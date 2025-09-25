const express = require("express");
const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient()

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors()); // this allows all origins -> allows React frontend to call API

app.use(express.json()); //for post reqs w json body

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello World! Backend works!" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

app.get("/api/notes", async (req, res) => {
  const notes = await prisma.practiceNote.findMany();
  res.json(notes);
})

app.post("/api/notes", async (req, res) => {
  const { content } = req.body;
  const newNote = await prisma.practiceNote.create({
    data: { content }
  });
  res.json(newNote);
});