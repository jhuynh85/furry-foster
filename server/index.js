// =============== DEPENDENCIES ===============//
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//=============== INITIALIZE EXPRESS APP & SETUP FOR DATA PARSING ===============//
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "2mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//=============== ENABLE CORS ===============//
app.use(cors());

//=============== AUTHENTICATION PACKAGES ===============//
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const flash = require('connect-flash');

//=============== DATABASE PACKAGES & CONFIG ===============//
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/furry-foster-test");

//=============== PASSPORT CONFIGURATION ===============//
// require('./config/passport')(passport) //pass passport for configuration
require("./services/passportStrategies");

//=============== AUTHENTICATION SETUP ===============//
// app.use(cookieParser());

// app.use(session({
//     secret: 'sdlfkjdlajsdoijajk',
//     resave: false,
//     saveUninitialized: false,
//     // cookie: { secure: true }
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

//=============== SERVE STATIC ASSETS ===============//
app.use(express.static(path.resolve(__dirname, "..", "build")));

//=============== ROUTES SETUP ===============//
require("./routes/testRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/searchRoute")(app);
require("./routes/petRoutes")(app);
require("./routes/rescueRoutes")(app);
require("./routes/uploadRoutes")(app);

//=============== API ROUTES ===============//
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

//=============== STARTING THE SERVER ===============//
const server = app.listen(PORT, () => console.log("App listening on PORT " + PORT));
// require("./sockets")(server)
