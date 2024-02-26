import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Enter your MySQL password here
  database: "sdgp_islandbites",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

app.get("/recipes", (req, res) => {
  const q = "SELECT * FROM recipes";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

app.post("/recipes", (req, res) => {
  const { ingredients, description, instructions, img, userId, createdAt } =
    req.body;
  const q =
    "INSERT INTO recipes (`ingredients`, `description`, `instructions`, `img`, `userId`, `createdAt`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [ingredients, description, instructions, img, userId, createdAt];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json("Recipe has been created successfully");
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
