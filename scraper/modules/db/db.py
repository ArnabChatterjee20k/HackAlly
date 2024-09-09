from pymongo import MongoClient
from pymongo.errors import BulkWriteError
import json

def get_db_and_collection(conn_string, db_name, collection_name):
    client = MongoClient(conn_string)
    db = client[db_name]
    collection = db[collection_name]
    return db, collection

def batch_insert_with_retry(collection, documents, max_retries=3):
    remaining_docs = documents.copy()
    retry_count = 0

    while remaining_docs and retry_count < max_retries:
        try:
            result = collection.insert_many(remaining_docs, ordered=False)
            print(f"Successfully inserted {len(result.inserted_ids)} documents")
            return len(documents)
        except BulkWriteError as error:
            print(f"Attempt {retry_count + 1} failed:", error)
            
            failed_ops = {op['index']: op for op in error.details['writeErrors']}
            remaining_docs = [doc for i, doc in enumerate(remaining_docs) if i in failed_ops]
            
            retry_count += 1

    if remaining_docs:
        print(f"Failed to insert {len(remaining_docs)} documents after {max_retries} attempts")

    return len(documents) - len(remaining_docs)  # Return number of successfully inserted documents