const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const relationship = require("./relationship");

const path = require("path");

const bpjsRouter = require("./router/bpjs.route");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bpjsRouter);

relationship();

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
});
