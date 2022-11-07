const express = require("express");
const dotenv = require("dotenv");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
