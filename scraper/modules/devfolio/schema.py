from pydantic import BaseModel, HttpUrl, Field
from typing import List, Optional
from datetime import datetime
from pprint import pprint

class DevfolioHackathon(BaseModel):
    id: Optional[str] = None
    uuid: Optional[str] = None
    title: Optional[str] = Field(alias="name", default=None)
    displayed_location: Optional[str] = Field(alias="location", default=None)
    thumbnail_url: Optional[HttpUrl] = Field(alias="logo", default=None)
    url: Optional[str] = Field(alias="slug")
    is_online: Optional[bool] = None
    themes: Optional[List[str]] = None
    organization_name: Optional[str] = Field(alias="hosted_by", default=None)
    starts_at: Optional[datetime] = None
    ends_at: Optional[datetime] = None
    description: Optional[str] = Field(alias="desc", default=None)
    registrations_count: Optional[int] = Field(alias="participants_count")
# Data input
data = {
    "_source": {
        "country": "India",
        "devfolio_official": None,
        "featured": None,
        "private": False,
        "starts_at": "2024-09-07T04:30:00+00:00",
        "hosted_by": None,
        "hashtags": [],
        "apply_mode": "both",
        "city": "Thiruvananthapuram",
        "timezone": "Asia/Calcutta",
        "rating": 0,
        "type": "HACKATHON",
        "uuid": "ae8a2718fd324824a85ff5b21de72c70",
        "sponsor_tiers": [
            {
                "sponsors": [
                      {
                          "name": "Polygon",
                          "about": "[Polygon](https://polygon.technology/) is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.",
                          "logo": "https://assets.devfolio.co/hackathons/28bbd4f275b046f5b35698b9727eb71e/sponsors/5c7d24df013b4aa7911141b599ed0d23/348.png",
                          "company": {
                              "domain": "https://polygon.technology/",
                              "name": "Polygon Technology",
                              "verified": False,
                              "logo": None,
                              "uuid": "24e5677d6dee43868247d75fa77e4628"
                          },
                          "position": 1,
                          "uuid": "36304327bcf3424e8a9faef978d08067"
                      },
                    {
                          "name": "ETHIndia",
                          "about": "ETHIndia is empowering the Ethereum Community through its various initiatives including hackathons, fellowships, grants, and more!",
                          "logo": "https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/70095ac7-8485-49ab-9117-342196b48c67.png",
                          "company": {
                              "domain": "https://ethindia.co/",
                              "name": "ETHIndia",
                              "verified": False,
                              "logo": None,
                              "uuid": "89c7e55700c14710a14a14de2d9ab5e9"
                          },
                          "position": 2,
                          "uuid": "681f3609e7514455ab7e9aaedd29d92c"
                      }
                ],
                "name": "",
                "width": 200,
                "about": None,
                "position": 1,
                "uuid": "ecd740db574b473d8ed5d4dd51707877",
                "height": None
            }
        ],
        "themes": [],
        "hackathon_setting": {
            "winner_announce_at": None,
            "reg_starts_at": "2024-07-24T04:30:00+00:00",
            "winner_announced": False,
            "women_only": False,
            "reg_ends_at": "2024-09-02T18:29:00+00:00",
            "facebook": None,
            "telegram": None,
            "medium": None,
            "instagram": "https://discord.com/channels/1234551772962492607/1234551773415604286/1264216266722381824",
            "linkedin": "https://www.linkedin.com/company/103691376/admin/dashboard/",
            "external_apply_url": None,
            "primary_color": "#000000",
            "uuid": "096e632cef9445b29b73ebaaa918ecd5",
            "contact_email": "mulearnucek@gmail.com",
            "twitter": None,
            "site": "https://mulearn-hackathon.vercel.app/",
            "discord": None,
            "review": False,
            "slack": None,
            "logo": "https://assets.devfolio.co/hackathons/ae8a2718fd324824a85ff5b21de72c70/assets/logo/664.jpeg",
            "subdomain": "error-418",
            "farcaster": None
        },
        "ends_at": "2024-09-08T04:30:00+00:00",
        "is_online": False,
        "state": "Kerala",
        "slug": "error-418",
        "team_min": 1,
        "themed": False,
        "discover": False,
        "participants_count": 1040,
        "hackathon_faqs": [
            {
                "question": "What is ERROR_418 Hackathon?",
                "answer": "*ERROR_418* Hackathon is a 24-hour event hosted by MuLearn UCEK that brings together students to collaborate on real projects, share knowledge, and innovate in technology.",
                "uuid": "c6e6c505393d46f3aa62d5c939814646"
            },
            {
                "question": "Who can participate in the hackathon?",
                "answer": "The hackathon is open to anyone with a passion for technology and innovation, regardless of experience level.",
                "uuid": "8d0b4e3ca26f481492695264b0ab5c94"
            },
            {
                "question": "What types of projects are encouraged?",
                "answer": "Participants are encouraged to work on innovative projects that address real-world challenges, bringing unique ideas and solutions to life.",
                "uuid": "dbbd2f7e499c4ab3aa915b24b61605b1"
            },
            {
                "question": "What is the team size?",
                "answer": "Participants can join individually or in teams of up to 4 members",
                "uuid": "84043e1f4e28464f94a01ed4c0132c64"
            }
        ],
        "participants_details": [
            {
                "profile_image": "https://assets.devfolio.co/users/c81c2f96a1b8418b937052e3abfc97a2/avatar-1e232036-427a-4c5f-8cbf-135740c05091.jpeg",
                "last_name": "Akash",
                "first_name": "Sandeep",
                "uuid": "c81c2f96a1b8418b937052e3abfc97a2",
                "username": "sandeepakash"
            },
            {
                "profile_image": "https://assets.devfolio.co/users/50ca09c9b00a4bda9ec7d47fcaced7f7/avatar-81372726-da32-4c03-9d81-13a5c80dde99.jpeg",
                "last_name": "M",
                "first_name": "Dhanush",
                "uuid": "50ca09c9b00a4bda9ec7d47fcaced7f7",
                "username": "iDhanush"
            },
            {
                "profile_image": "https://assets.devfolio.co/users/cc414b0c181146fab9f37cdc66b6f8c3/avatar-eba65b8f-a47c-489b-9bce-5c910a4d1105.jpeg",
                "last_name": "D",
                "first_name": "Nikhil",
                "uuid": "cc414b0c181146fab9f37cdc66b6f8c3",
                "username": "nikhil404"
            }
        ],
        "team_size": 4,
        "verified": True,
        "prizes": [
            {
                "parent_prize_uuid": None,
                "name": "Best hack built on Polygon",
                "is_sponsor_prize": False,
                "uuid": "739743cc7cb648de9ce65dda6f3dacdc",
                "desc": "Get started with Polygon [here](https://nsb.dev/polygon-bounty)."
            },
            {
                "parent_prize_uuid": None,
                "name": "Best hack built on Ethereum",
                "is_sponsor_prize": False,
                "uuid": "8c03c0e7c4774e808fdac8d2b1769906",
                "desc": "Winner of this track receives $100 in prizes from ETHIndia"
            },
            {
                "parent_prize_uuid": None,
                "name": "Error_418",
                "is_sponsor_prize": False,
                "uuid": "5f795e2ec66444f7b95034ed2e756dd9",
                "desc": "Prize pool of upto 50k"
            }
        ],
        "projects_submitted": 0,
        "name": "ERROR_418",
        "tagline": "Hack a way to brew coffee in your teapot!",
        "location": "Technopark Phase l, Kulathoor, Thiruvananthapuram, Kerala",
        "judges": [],
        "cover_img": "https://assets.devfolio.co/hackathons/ae8a2718fd324824a85ff5b21de72c70/assets/cover/934.png",
        "desc": "**Welcome to ERROR_418!**\n\nMuLearn UCEK proudly presents ERROR_418, a unique hackathon where creativity meets technology. This exciting event invites participants to tackle the challenge: \"Hack a way to brew coffee in your teapot.\" ERROR_418 aims to bring together innovative minds to solve unconventional problems through a day of brainstorming, coding, and fun.\n\n**Event Highlights:**\n\n- **Innovative Challenges**: Engage with thought-provoking tasks designed to stretch the boundaries of your imagination and technical skills.\n- **Exciting Prizes**: Compete for attractive rewards and gain recognition for your ingenious solutions.\n- **Networking Opportunities**: Connect with industry leaders, fellow innovators, and potential sponsors, fostering valuable relationships and future collaborations.\n\n**Who Can Participate?**\n\n- **Eligibility**: Open to everyone, with priority given to students.\n- **Shortlisting**: Participants will be shortlisted based on their GitHub profiles.\n\n**Why Participate?**\n\n- **Innovate Now**: Tackle real-world challenges and unleash your potential.\n- **Illuminate Tomorrow**: Drive social impact through innovative problem-solving and showcase your talent on a national stage.\n\n**Rules and Regulations**\n\n- **Eligibility**: Open to students and professionals from any field and year of study.\n- **Shortlisting**: Participants will be shortlisted based on their/team's project idea and GitHub profiles.\n- **Team Formation**: Individual or team particiption upto 4 members.\n- **Registration Details**: Register through our platform by **31 August 2024**. Ensure accurate details and valid contact information.\n\nImportant Dates\n\n- **Registration Closes**: 31 August, 2024\n\nContact\nEmail: mulearnucek@gmail.com\nPhone: 9349936990\n8939429434\n\n**Register Now and Be Part of the Change!**\n\nTo take part in the hackathon and for further details, visit our official ERROR_418 website : https://mulearn-hackathon.vercel.app/",
        "status": "publish",
        "user_hackathon": None,
        "user_hackathon_reminder": None
    }
}

source = data.get("_source")
hackathon_data = DevfolioHackathon(**source).model_dump(mode="json")

# Pretty print the parsed data
pprint(hackathon_data)
