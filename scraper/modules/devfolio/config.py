import json
class Config:
    base = "https://api.devfolio.co/api/search/hackathons"
    results_class = "hackathons-container"
    params = {
        "type": "application_open",
        "from": "0",
        "size": "30"
    }
