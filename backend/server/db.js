import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "saferent",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    db.end();
  } else {
    console.log("Connected to MySQL");
  }
});
