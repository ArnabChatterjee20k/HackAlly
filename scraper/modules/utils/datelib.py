from datetime import datetime

def generate_iso_timestamps(date_range_str: str) -> dict:
    """
    Generate start and end dates in ISO 8601 format from a date range string.

    Args:
    - date_range_str (str): The date range string in format "Sep 04 - Oct 23, 2024" or "Sep 04 - Oct 23"

    Returns:
    - dict: A dictionary with 'start_date' and 'end_date' in ISO 8601 format
    """
    # Split the string to get start and end date parts
    start_date_str, end_date_str = date_range_str.split(" - ")

    # Check if the year is already included in the end date
    if "," in end_date_str:
        year = end_date_str.split(", ")[1]
    else:
        # If year is not included, use the current year
        year = str(datetime.now().year)
        end_date_str += f", {year}"

    # Ensure start date has the year
    if "," not in start_date_str:
        start_date_str += f", {year}"

    # Parse the date strings into datetime objects
    date_format = "%b %d, %Y"
    start_date = datetime.strptime(start_date_str, date_format)
    end_date = datetime.strptime(end_date_str, date_format)

    # Set time to midnight for start date and end of day for end date
    start_date = start_date.replace(hour=0, minute=0, second=0, microsecond=0)
    end_date = end_date.replace(hour=23, minute=59, second=59, microsecond=999999)

    # Convert to ISO 8601 format
    start_date_iso = start_date.isoformat() + 'Z'
    end_date_iso = end_date.isoformat() + 'Z'

    return {
        'start_date': start_date_iso,
        'end_date': end_date_iso
    }