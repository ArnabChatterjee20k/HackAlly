import json
class Config:
    base = "https://api.devfolio.co/api/search/hackathons"
    results_class = "hackathons-container"
    params = {
        "type": "application_open",
        "from": "0",
        "size": "30"
    }
    requirement_xpath = """//*[@id="__next"]/div[2]/div[2]/div/div/div[1]/div/div/span/img"""