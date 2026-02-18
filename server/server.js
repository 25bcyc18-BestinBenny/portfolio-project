const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bestin2007',
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// ✅ Put GET route here (outside db.connect)
app.get('/', (req, res) => {
  res.send("Backend is working");
});

// API route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving message");
    }
    res.send("Message saved successfully");
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
