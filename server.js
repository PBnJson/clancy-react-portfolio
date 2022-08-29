require("dotenv").config;
const express = require('express');
const cors = require('cors');
const path = require('path');

const contactMeRoute = require('./routes/contactMeRoute');

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());

app.use('/', contactMeRoute);

if (process.env.NODE_ENV === "production") {
    //Express will serve  up production assets
    //like our main.js file. or main.css file
    app.use(express.static("client/build"));

    //Express will serve up index.html file
    //if it doesn't recongize the route
    //This is the catch all case
    app.get("*", (req, res) => {
        // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: "MY_SECRET",
//     cookie: {
//         maxAge: 3600000,
//         httpOnly: true,
//         secure: true
//     }
// })
// );
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(bodyParser.json());

app.listen(PORT, console.log(`listening on port 5000`));