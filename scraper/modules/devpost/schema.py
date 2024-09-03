from pydantic import BaseModel, HttpUrl, model_validator
from typing import List


def ensureHttps(url):
    if (url.startswith("//")):
        return "https:" + url

    if (url.startswith("http://")):
        return "https://" + url[:7]

    if not url.startswith("https://"):
        return "https://" + url

    return url


class Theme(BaseModel):
    id: int
    name: str


class DevpostHackathon(BaseModel):
    id: str
    title: str
    displayed_location: dict  # Assuming this could be more complex
    open_state: str
    thumbnail_url: str
    analytics_identifier: str
    url: str
    time_left_to_submission: str
    submission_period_dates: str
    themes: List[Theme]
    prize_amount: str
    organization_name: str
    # winners_announced: bool

    @model_validator(mode="before")
    @classmethod
    def check_url(cls, data):
        data["thumbnail_url"] = ensureHttps(data["thumbnail_url"])
        # checking the url
        HttpUrl(data["thumbnail_url"])
        HttpUrl(data["url"])

        return data