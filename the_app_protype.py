import requests
import time
import schedule
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Set up the Spoonacular API endpoint and parameters
api_endpoint = 'https://api.spoonacular.com/recipes/random'
api_params = {
    'apiKey': ' 32b42d1430674384b035f4551f40572f',
    'number': 1,
}

# Set up your email credentials
sender_email = 'potatoc377@gmail.com'
sender_password = 'shswixwxckmvrruv'
recipient_email = 'awinozion85@gmail.com'

# Define the email message
subject = 'Recipe of the Hour'
body = 'Here is your recipe for this hour:\n'

# Define the function that generates the recipe and sends the email
def generate_recipe_and_send_email():
    # Call the Spoonacular API to generate a random recipe
    response = requests.get(api_endpoint, params=api_params)
    recipe_data = response.json()['recipes'][0]

    # Construct the email message with the recipe information
    recipe_name = recipe_data['title']
    recipe_url = recipe_data['sourceUrl']
    message_body = f"{body}{recipe_name}\n\n{recipe_url}"

    # Create a message object
    message = MIMEMultipart()
    message['potatoc377@gmail.com'] = sender_email
    message['awinozion85@gmail.com'] = recipient_email
    message['Here is is your daily recipe'] = subject
    message.attach(MIMEText(message_body, 'plain'))

    # Set up the SMTP server
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587

    # Start the SMTP session
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()

    # Login to your email account
    server.login(sender_email, sender_password)

    # Send the message
    text = message.as_string()
    server.sendmail(sender_email, recipient_email, text)

    # Quit the SMTP session
    server.quit()

    print('Recipe sent to', recipient_email)

# Schedule the function to run every hour
schedule.every().hour.do(generate_recipe_and_send_email)

# Loop forever and run the scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(1)

"""In this code, you will need to replace YOUR_SPOONACULAR_API_KEY, 
YOUR_EMAIL_ADDRESS, and YOUR_EMAIL_PASSWORD with your own API key and email credentials. 
You will also need to replace YOUR_RECIPIENT_EMAIL_ADDRESS with the email address that you want to receive the recipe notifications.

Note that this code will run continuously and send a new recipe to your email every hour. 
If you want to stop the program, you will need to manually terminate the script."""