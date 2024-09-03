from bs4 import BeautifulSoup
from bs4 import Tag
from typing import List
import aiohttp
import asyncio

requirement_id = "#challenge-requirements"


def details_factory(tag_type="", text="", list_data: List[str] = []):
    return {
        "type": tag_type,
        "text": text,
        "list": list_data
    }


def process_list(tag: Tag) -> List[str]:
    section = []

    if tag.name == "li":
        for content in tag.contents:
            text = ""
            if isinstance(content, str):
                text = ' '.join(content.split())
            elif content.name in ["p", "strong"]:
                text = ' '.join(content.get_text().split())
            elif content.name == "ul":
                nested_data = process_list(content)
                if nested_data:
                    section.append(nested_data)
            if text:
                section.append(text)
        return section

    for child in tag.children:
        if isinstance(child, Tag):
            processed = process_list(child)
            if processed:
                section.append(processed)

    return section


def get_content(children: Tag, details: List[dict]) -> List[dict]:
    if not children:
        return []

    for child in children:
        if isinstance(child, Tag):
            tag_name = child.name
            if tag_name.startswith("h"):
                details.append(details_factory(
                    "heading", text=' '.join(child.stripped_strings)))
            elif tag_name == "ul":
                details.append(details_factory(
                    "list", list_data=process_list(child)))
            else:
                details.append(details_factory(
                    "description", text=' '.join(child.stripped_strings)))
    
    return details


async def scrape_hackathon_details(url: str, requirement_id: str) -> List[dict]:
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as search_response:
            if search_response.status != 200:
                raise aiohttp.ClientError("Error: non-200 response")

            content = await search_response.text()  # Get the content as a string
            soup = BeautifulSoup(content, 'html.parser')
            element = soup.select_one(requirement_id)
            details = []

            if element:
                for child in element.children:
                    if isinstance(child, Tag):
                        get_content(child, details)
            else:
                print("Content not found")
            
            return details


# # Example usage
# async def main():
#     url = "https://convexhackathon2.devpost.com/"  # Replace with actual URL
#     details = await scrape_hackathon_details(url, requirement_id)
#     print(details)


# # Run the async main function
# asyncio.run(main())
