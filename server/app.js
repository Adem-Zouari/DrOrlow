const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'DrOrlowDB'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json("This is the health check");
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, surname, gender, id, psw, email, pemail, birthday } = req.body;

  // Check if identifier exists
  pool.query('SELECT * FROM users WHERE identifier = ?', id, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      // Identifier already exists, ask user to change it
      res.status(400).send('Identifier already exists. Please choose a different one.');
    } else {
      // Identifier doesn't exist, insert data into database
      const userData = {
        identifier: id,
        name: name,
        surname: surname,
        gender: gender,
        password: psw,
        email: email,
        pemail: pemail,
        birthday: birthday
      };

      pool.query('INSERT INTO users SET ?', userData, (insertError) => {
        if (insertError) {
          console.error('Error inserting data into database:', insertError);
          res.status(500).send('Internal Server Error');
        } else {
          res.redirect('/Home.html');
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
