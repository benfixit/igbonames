require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Name = require("./models/name");

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/igboname');

app.get("", (req, res) => {
    res.send("Hello World");
});

app.post("/names/create", async (req, res) => {
    try {
        const name = await Name.create(req.body);
        res.status(200).json(name)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
});

app.get("/names", async (req, res) => {
    try {
        const names = await Name.find({});
        res.status(200).json({ names })
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
});

app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT);
});