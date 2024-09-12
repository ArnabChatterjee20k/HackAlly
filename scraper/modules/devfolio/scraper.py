from bs4 import BeautifulSoup
import aiohttp
import asyncio
from lxml import etree 

def get_content():
    pass

async def scrape_hackathon_details(url: str, requirement_id: str):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as search_response:
            if search_response.status!=200:
                raise aiohttp.ClientError("Error: non-200 response")
            content = await search_response.text()
            soup = BeautifulSoup(content,"html.parser")
            dom = etree.HTML(str(soup))
            xpath_element = dom.xpath(requirement_id)
            if xpath_element:
                img :etree._Element = dom.xpath(requirement_id)[0]
                image_host = url if not url.endswith("/") else url[:-1] + img.get("src")
                return image_host
            return ""