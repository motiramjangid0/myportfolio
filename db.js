const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // <-- Replace with your MySQL username
  password: "Moti@1234", // <-- Replace with your MySQL password
  database: "project1",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + connection.threadId);
});

module.exports = connection;
