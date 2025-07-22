import express from "express"
import dotenv from "dotenv"
import scanRoute from "./routes/scan.route.js"
import cors from 'cors';


dotenv.config({});

const app = express();

const corsOptions = {
    origin: process.env.URL_FRONTEND,
    credentials: true
}
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server is running");
})

//Our api call here
app.use("/api/v1/url", scanRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})