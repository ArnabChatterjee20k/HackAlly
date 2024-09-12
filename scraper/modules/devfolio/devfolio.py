import aiohttp
import asyncio
from .config import Config
from .schema import DevfolioHackathon
import modules.constants.constants as constants
from .scraper import scrape_hackathon_details
from modules.utils.get_id import get_id
from .config import Config

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.post(url,json=Config.params) as res:
            if res.status != 200:
                raise aiohttp.ClientError("Error fetching data from Devpost")
            data = await res.json()
            return data.get("hits",{"hits":{}}).get("hits")

async def process_hackathon(hackathon):
    data = DevfolioHackathon(**hackathon).model_dump(mode="python")
    data["portal"] = constants.DEVFOLIO
    data["id"] = get_id()
    data["thumbnail_url"] = await scrape_hackathon_details(data["url"],Config.requirement_xpath)
    return data


async def scrape_devfolio():
    result = []
    hackathons_info = await fetch_data(Config.base)
    for hackathon in hackathons_info:
        result.append(await process_hackathon(hackathon.get("_source")))
    
    return result
        