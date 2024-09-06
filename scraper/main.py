from modules.devpost.devpost import scrape_devpost
import asyncio
asyncio.get_event_loop().run_until_complete(scrape_devpost())
