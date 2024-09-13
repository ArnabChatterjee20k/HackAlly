import aiohttp
import asyncio
import json
from .config import Config
from modules.devpost.scraper import scrape_hackathon_details
from modules.utils.datelib import generate_iso_timestamps
import modules.constants.constants as constants
from modules.utils.get_id import get_id

from .schema import DevpostHackathon

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as res:
            if res.status != 200:
                raise aiohttp.ClientError("Error fetching data from Devpost")
            data = await res.json()
            return data.get("hackathons", [])

async def process_hackathon(hackathon):
    data = DevpostHackathon(**hackathon).model_dump(mode="python")
    data["portal"] = constants.DEVPOST
    description_url = data["url"]

    # Scrape the hackathon details
    print(description_url)
    try:
        description_data = await scrape_hackathon_details(description_url, Config.scraper_paths[0])
        data["description"] = description_data
        submission_data = generate_iso_timestamps(data.get("submission_period_dates"))
        data["starts_at"] = submission_data["start_date"]
        data["ends_at"] = submission_data["end_date"]
    except Exception as e:
        data["starts_at"] = None
        data["ends_at"] = None
        data["description"] = []
    return data

async def scrape_devpost():
    hackathon_info = await fetch_data(Config.base)
    tasks = []
    for hackathon in hackathon_info:
        # we are taking the id first as here the uuid should be unique
        # so we are using the portal's id as uuid
        hackathon["uuid"] = str(hackathon.get("id"))
        location = hackathon["displayed_location"].get("location")
        hackathon["displayed_location"] = location
        hackathon["is_online"] = location.lower() == "online"
        hackathon["id"] = get_id()
        tasks.append(process_hackathon(hackathon))
    results = await asyncio.gather(*tasks)
    return results