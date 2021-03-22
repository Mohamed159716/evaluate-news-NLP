const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env.API_KEY);

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

console.log(__dirname);

app.listen(8081, () => console.log("Example app listening on port 8081!"));

app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});

app.post("/getData", (req, res) => {
    let url = req.body.url;

    fetch(`${baseURL}${process.env.API_KEY}&url=${url}&lang=en`)
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
});

app.post("/getArticleData", (req, res) => {
    let txt = req.body.txt;

    fetch(`${baseURL}${process.env.API_KEY}&txt=${encodeURI(txt)}&lang=en`)
        .then((response) => response.json())
        .then((data) => res.send(data));
});
