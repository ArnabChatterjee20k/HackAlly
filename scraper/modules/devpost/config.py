class Config:
    base = "https://devpost.com/api/hackathons?open_to[]=public&page=1&status[]=upcoming&status[]=open&per_page=40"
    results_class = "hackathons-container"
    scraper_paths = ["#challenge-requirements"]