import express from "express";
import db from "./config/Database.js";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import UserRoute from "./routers/UserRoute.js";
dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server Running!')
});