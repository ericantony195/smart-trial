const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// 🟡 Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",               // 👈 use your MySQL user
  password: "ericsanah2",  // 👈 use your MySQL password
  database: "smart_trial",    // 👈 make sure DB name matches
});

// ✅ Connect to DB and log success
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database.");
  }
});

// 🟢 Route to fetch clothing by ID
app.post("/get-clothing", (req, res) => {
  const { id } = req.body;

  console.log("✅ Received ID from frontend:", id);

  const numericId = parseInt(id); // force to integer
  if (isNaN(numericId)) {
    console.log("❌ Invalid ID received");
    return res.status(400).json({ error: "Invalid ID" });
  }

  db.query("SELECT * FROM clothes WHERE id = ?", [numericId], (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("📦 Query Results:", results);

    if (results.length === 0) {
      console.log("❌ No matching item found in DB");
      return res.status(404).json({ error: "Item not found" });
    }

    console.log("✅ Item found and returned");
    res.json(results[0]);
  });
});

// 🟢 Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
