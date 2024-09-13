# from modules.devpost.devpost import scrape_devpost
from modules.devfolio.devfolio import scrape_devfolio
from modules.devpost.devpost import scrape_devpost
from modules.db.db import get_db_and_collection,batch_insert_with_retry
from dotenv import load_dotenv
import asyncio,os
load_dotenv(".env")
async def main():
    conn = os.environ.get("MONGO_URI")
    db,col = get_db_and_collection(conn,"hackathons","events")
    data = await asyncio.gather(*[scrape_devfolio(),scrape_devpost()])
    loop = asyncio.get_event_loop()
    db_inserts = []
    for doc in data:
        db_inserts.append(loop.run_in_executor(None,batch_insert_with_retry,col,doc))
    results = await asyncio.gather(*db_inserts)

if(os.environ.get("MONGO_URI")):
    print("db found",os.environ.get("MONGO_URI"))
    asyncio.get_event_loop().run_until_complete(main())