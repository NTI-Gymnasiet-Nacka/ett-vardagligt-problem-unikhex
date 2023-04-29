import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Define your email message
sender_email = 'your_email@example.com'
sender_password = 'your_email_password'
recipient_email = 'recipient_email@example.com'
subject = 'Notification Subject'
body = 'Notification message body'

# Create a message object
message = MIMEMultipart()
message['From'] = sender_email
message['To'] = recipient_email
message['Subject'] = subject

# Add body to message
message.attach(MIMEText(body, 'plain'))

# Set up the SMTP server
smtp_server = 'smtp.example.com'
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

print('Notification sent to', recipient_email)
