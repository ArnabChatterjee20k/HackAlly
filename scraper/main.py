from modules.devpost.devpost import scrape_devpost
from modules.db.db import get_db_and_collection,batch_insert_with_retry
import asyncio,os
async def main():

    # asyncio.get_event_loop().run_until_complete(scrape_devpost())
    data = await asyncio.gather(*[scrape_devpost()])
    conn = os.environ.get("MONGO_URI")
    db,col = get_db_and_collection(conn,"hackathons","events")
    for doc in data:
        batch_insert_with_retry(col,doc)
asyncio.get_event_loop().run_until_complete(main())