[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/QT9uZhaV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10934320&assignment_repo_type=AssignmentRepo)

## *Description*

This is semi group project. Its function is to automise a problem that the members of the group faced on a daily basis.

## *The problem*

The primary purpose of your platform is to remind users to eat and provide them with easy-to-cook recipes.
Our thought process was to create an app or a website that sends notification to a certain email adress or a number to first remind them to eat while at the same time sending easy to cook food recipes for the type of meal they are going to eat.

## *How am i going to fix it*

I am personalising my project to make it so that it only sends notifications for breakfast and supper. I also wanted mine to only be able to send both recipes and ingredients.

## *What it has to have*

I'll try to integrate a notification system: Develop a notification system that sends reminders to the user's email or phone number. I could use third-party APIs like Twilio to send SMS notifications or email notifications.(I chose spooncular Api)

## *What woul be good to have*

A recipe database: Here i can either create my recipe database or use third-party APIs like Spoonacular or Edamam. I just have to make sure to have a wide variety of recipes for different types of meals, such as breakfast, lunch, dinner, and snacks.

A good design the user interface that is easy to navigate and user-friendly. I'll try to make sure to include features like the ability to search for recipes, save favorite recipes, and set reminders for meal times.
User registation.

A user being able to save their favorite recipes.

May be include a functional search bar.

## *Language/ Built with*

Python 3.9

Markdown

axios

dotenv

express

moment timezone

node-cron

sqlite3

nodemailer

All the above use Node js and can be installed by runing node install command in the command prompt.

## *How it functions*

At this point in time i havn't decided that if its going to be a website or an easy to build app.

## *Updates*

The prptype for the app has benn generated. I will need to fix all the addresses the notifaication is coming from and to where it is headed. At the same time clarify in what intervals this updates should be happening.

In the future updates i will ask my colleagues for suitable API's for this project.

## *Important update*

Due to me finding it hard to implement the api that i got to the prototype app that i had created from an idea based on a classproject that i had done. I will be changing my idea from an app to a website that has identical functions as the app. I wil try to make it more compicated by implenting node.js so as to have both backend and frontend. And will may be try to host in on a server somewhere. What i plan to do from now on  and the steps taken in this project will be written in the plans.txt file.

## *version 1*

I now have a prototype for backened but no frontend as of now. I have a mini database created using sqlite3.

The location has of the database has been changed now evrything is in the same place.

## *version 2*

The frontend is now created. The frontend is just going to be a html webpage that shows the users in a webpage.

But all the important funstions are in server.js. I thought it would be easier to have it like this. Have a website to specifically check who are the users i have. That is what will be shown in the index.html file.

The function for sending the email was made with in an earlier
prorotype which i decided to abandon and continue with this one. Thus
what was already there has just been taken and implemented here.

## *version 3*

A lot of functions and routes were created so that the frontend and backend would function seemlessly. Examlpes being,, a function was created to fetch ingredients and recipes. Then it sends that to the users via an email.

## *version 4*

The code is now complete. I can fetch recipes from an api send it to my users in the database immediatly. But there is also the part than is scheduled an dwill send notifications with the recipes and ingredients at certain times during the day.

## *How to add users to the database*

This is already in db.js, but i'll say it anyway.

* first have sqlite3 installed.

* use command prompt go to the location of your database.

* Then type "INSERT INTO users (name, email)". This is specific to my
database. It only has the nmae of the user and their address.
currenlty there is an example plus my own personal one.

* The you are done.

## *How to run the code*

* Have node.js installed.

* Go to the location of the files by running cd command in command prompt.

* The node followed by the name of the file

## *Problems i had*

* figuring out how to use databases with sqlite3

* How to install sqlite3

Both of these were easily fixed by watching tutorial on Youtube.

* The sent email here has too much unneeded information. This was fixed by applying a filter to the function that request recipes from the Api. This fixed that problem.

## *What i could do better in the future*

I could try usinng the frontend of the project a little bit more. May be implementing user authorisation and allowing the users to save their favorite recipes somewhere. But this means the index.html has to be made into a more functioning website that has better UI.

## *License*

[MIT](https://choosealicense.com/licenses/mit/)

## *Contact*

Zion Awino (unikhex )

* [Email] (<awinozion85@gmail.com>)
* [Project_link] (<https://github.com/NTI-Gymnasiet-Nacka/ett-vardagligt-problem-unikhex>)

## *Acknowledgements*

Credit to:

* Shazhoud Ravshanov
[Email](shahzod.ravshanov@elev.ga.ntig.se )
