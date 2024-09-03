def clean_string(s):
    """Remove newlines and excessive whitespace from a string."""
    return ' '.join(s.split())

def clean_nested_array(arr):
    """Recursively clean a nested array of strings."""
    cleaned = []
    for item in arr:
        if isinstance(item, str):
            cleaned.append(clean_string(item))
        elif isinstance(item, list):
            cleaned.append(clean_nested_array(item))
    return cleaned

# Example usage
nested_array = [['A clear and concise title for your project.'], ['A detailed description of the problem you are addressing and your AI solution. Explain the significance of the problem and the impact of your solution.'], ["Code Repository (Optional): GitHub Repository: Provide a link to your project's GitHub repository. Ensure your code is well-documented and includes instructions for setting up and running the project.", [["GitHub Repository: Provide a link to your project's GitHub repository. Ensure your code is well-documented and includes instructions for setting up and running the project."]]], ['Demo Video: A 3-5 minute video demonstrating your solution. Highlight key features, how it works, and the problem it solves. Make sure to showcase the functionality and user interface, if applicable.', [['A 3-5 minute video demonstrating your solution. Highlight key features, how it works, and the problem it solves. Make sure to showcase the functionality and user interface, if applicable.']]]]

cleaned_array = clean_nested_array(nested_array)
print(cleaned_array)