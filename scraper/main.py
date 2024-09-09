from modules.devpost.devpost import scrape_devpost
from modules.db.db import get_db_and_collection,batch_insert_with_retry
import asyncio
async def main():

    # asyncio.get_event_loop().run_until_complete(scrape_devpost())
    data = await asyncio.gather(*[scrape_devpost()])
asyncio.get_event_loop().run_until_complete(main())