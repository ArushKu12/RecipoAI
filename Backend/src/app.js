import dotenv from "dotenv"
dotenv.config({path:'../.env'})
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// JSON PARSING MIDDLEWARE
app.use(express.json({limit: `16kb`}));

// URL PARSING MIDDLEWARE
app.use(express.urlencoded({extended: true, limit: `16kb`}));

// STATIC MIDDLEWARE
app.use(express.static("public"));

// COOKIE PARSER MIDDLWARE
app.use(cookieParser());

//MOUNTING THE ROUTES
const api_version = '/api/v1'

import UserRouter from "./routes/auth.routes.js"
app.use(`${api_version}/auth`,UserRouter);

export default app



