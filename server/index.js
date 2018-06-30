// =============== DEPENDENCIES ===============//
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

//=============== INITIALIZE EXPRESS APP & SETUP FOR DATA PARSING===============//
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
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
const user = require("./models/User");
// mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/furry-foster-test");

//=============== PASSPORT CONFIGURATION ===============//
// require('./config/passport')(passport) //pass passport for configuration
require("./services/passport");

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
require("./routes/router")(app);
// require('./app/testRoutes.js')(app, passport) //load our routes and pass in our app and fully configured passport
// require('./app/githubRoutes.js')(app)
// require('./app/testRoutes.js')(app)

//=============== API ROUTES ===============//
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

//=============== STARTING THE SERVER ===============//
const server = app.listen(port, () => console.log("App listening on PORT " + port));
// require("./sockets")(server)
