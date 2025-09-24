const express = require("express");

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors()); // this allows all origins -> allows React frontend to call API

app.use(express.json()); //for post reqs w json body

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello World! Backend works!" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});