import aiohttp
import asyncio
import json
from .config import Config
from modules.devpost.scraper import scrape_hackathon_details
from .schema import DevpostHackathon
from uuid import uuid4

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as res:
            if res.status != 200:
                raise aiohttp.ClientError("Error fetching data from Devpost")
            data = await res.json()
            return data.get("hackathons", [])

async def process_hackathon(hackathon):
    # Deserialize hackathon data using the Pydantic model
    data = DevpostHackathon(**hackathon).model_dump(mode="python")
    description_url = data["url"]

    # Scrape the hackathon details
    print(description_url)
    description_data = await scrape_hackathon_details(description_url, Config.scraper_paths[0])
    data["description"] = description_data

    return data

async def scrape_devpost():
    hackathon_info = await fetch_data(Config.base)
    tasks = []
    for hackathon in hackathon_info:
        hackathon["id"] = str(uuid4())[:8]
        tasks.append(process_hackathon(hackathon))
    results = await asyncio.gather(*tasks)

    with open("data1.json", "w") as f:
        json.dump(results, f)