const fs = require('fs');
const https = require('https');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PUBLIC_PREFIX } = require("./config/public.config");
const publicRoute = require("./routes/public.route");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Hello World!" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log("MongoDB Connected")).catch((err) => console.warn(err));

app.use(PUBLIC_PREFIX, publicRoute);

const PORT = process.env.PORT || 3015;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const privateKey  = fs.readFileSync('secrets/secret.key');
const certificate = fs.readFileSync('secrets/secret.crt');
const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
httpsServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));