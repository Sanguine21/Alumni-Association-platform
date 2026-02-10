const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Sample alumni data (mock database)
let alumni = [
  { id: 1, name: "Avik Mitra", job: "Software Engineer", batch: "2022" },
  { id: 2, name: "Prachi Kumari", job: "Data Analyst", batch: "2023" }
];

// API Route → Get Alumni List
app.get("/api/alumni", (req, res) => {
  res.json(alumni);
});

// API Route → Login Prototype
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    res.json({ success: true, role: "Admin" });
  } else {
    res.json({ success: true, role: "Student/Alumni" });
  }
});

app.listen(3000, () => {
  console.log("Prototype running at http://localhost:3000");
});
