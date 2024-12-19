import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import connectCD from "./config/cloudinary.config.js";
import app from "./app.js";


const PORT = process.env.PORT || 8000;

connectCD()

app.get('/', (req, res) => res.send('AI Recipe Generator API is running...'));

app.listen(PORT,() => {
    console.log(`Server started on PORT ${PORT}`)
})
