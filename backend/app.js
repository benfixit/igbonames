require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Name = require("./models/name");

const app = express();

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

app.listen(PORT, () => {
    console.log("App listening on PORT: ", PORT);
});