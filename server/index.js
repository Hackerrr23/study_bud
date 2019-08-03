require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
const cors = require("cors");
const port = 4000;

//firebase
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`StudyUp listening on port ${port}!`));
