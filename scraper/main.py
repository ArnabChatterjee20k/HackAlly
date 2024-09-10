# from modules.devpost.devpost import scrape_devpost
from modules.devfolio.devfolio import scrape_devfolio
from modules.db.db import get_db_and_collection,batch_insert_with_retry
import asyncio,os
async def main():
    data = await asyncio.gather(*[scrape_devfolio(),scrape_devfolio()])
    conn = os.environ.get("MONGO_URI")
    db,col = get_db_and_collection(conn,"hackathons","events")
    for doc in data:
        batch_insert_with_retry(col,doc)
asyncio.get_event_loop().run_until_complete(main())