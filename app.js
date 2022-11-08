const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");

const pesanRouter = require("./router/pesan.router");

const path = require("path");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/pesan", pesanRouter);

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
});
