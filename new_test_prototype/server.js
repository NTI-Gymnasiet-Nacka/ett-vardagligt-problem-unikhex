const express = require('express');
const router = require('./api');
const db = require('./db');
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');
const moment = require('moment-timezone');
const now = moment.tz('Europe/Stockholm');
moment.tz.setDefault('Europe/Stockholm');

console.log(now.format());

dotenv.config();
const API_KEY = process.env.API_KEY
const PASSWORD = process.env.PASSWORD
const EMAIL = process.env.EMAIL

const PORT = process.env.PORT || 3000;
const app = express()



function getUserById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}


// middleware to parse request body as JSON
app.use(express.json());

// add the router as a middleware to the app
app.use('/api' , router);

app.get('/api/users', async (req, res) => {
  try {
    const users = await db.all('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
});


app.post('/api/send-message', async (req, res) => {
  try {
    const { message } = req.body;
    await sendMessage(message);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
  }
});

// serve static files from the public folder
app.use(express.static('public'));

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//schedule cron jobs to send notifications
//breakfast at 7:00
cron.schedule('0 7 * * *', () => {
  console.log(`Scheduled breakfast at ${moment().tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm:ss')}`);
  sendNotifications('Breakfast');
});// lunch at 12:00
cron.schedule('28` 13 * * *', () => {
  console.log(`Scheduled lunch at ${moment().tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm:ss')}`);
  sendNotifications();
});// supper at 18:30
cron.schedule('30 18 * * *', () => {
  console.log(`Scheduled supper at ${moment().tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm:ss')}`);
  sendNotifications('Supper');
});// snacktime at 17:00
cron.schedule('0 17 * * *', () => {
  console.log(`Scheduled snacktime at ${moment().tz('Europe/Stockholm').format('YYYY-MM-DD HH:mm:ss')}`);
  sendNotifications('Snacktime');
});


// function to send notifications to users
function sendNotifications() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        rows.forEach(async (user) => {
          try {
            // send notification to user
            const meal = await  getRecipes();
            await sleep(2000);
            console.log(`Sending notification to ${user.email} for ${JSON.stringify(meal)}`);

            // create transporter object with SMTP settings
            const transporter = nodemailer.createTransport({
              host: process.env.SMTP_HOST,
              port: process.env.SMTP_PORT,
              secure: false, // upgrade later with STARTTLS
              auth: {
                user: EMAIL,
                pass: PASSWORD
              }
            });

            // define email message
            const message = {
              from: process.env.EMAIL,
              to: user.email,
              // subject: `Your Daily ${meal}`,
              text: `From the best here to remind you to eat something for :\n\nIngredients:\n${meal.ingredients.join('\n')}\n\nInstructions:\n${meal.instructions.join('\n')}`
            };

            // send mail with defined transport object
             transporter.sendMail(message, (err, info) => {
               if (err) {
                console.log(`Error sending email to ${user.email}: ${err}`);
               } else {
                 console.log(`Email sent to ${user.email}: ${info.response}`);
               }
             });
          } catch (error) {
            console.error(error);
            reject(error);
          }
        });
        resolve();
      }
    });
  });
}


function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
// route to get recipe based on ingredients
async function getRecipes(){
  try {
    let recipes = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${1}`)
    const recipe = recipes.data.recipes[0];
    //filter in order to only get ingredients and isntructions
    const ingredients = recipe.extendedIngredients.map((ingredient) => ingredient.original);
    const instructions = recipe.instructions.split('\n').filter((instruction) => instruction !== '');
    console.log(`\n\n\n\n\n`)
    
    sleep(3000)
    return {
      ingredients,
      instructions,
    }
    
  } catch (error) {
    console.error(error);
  }
};

// serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
//Is here to send notification immediately
sendNotifications()