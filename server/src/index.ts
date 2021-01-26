import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { connect } from "mongoose";
import todoRouter from "./controllers/todoController";
import bodyParser from "body-parser";

dotenv.config();

const URI = 'mongodb://localhost:27017/tes' || process.env.MONGO
const PORT = parseInt(process.env.PORT as string, 10) || 8080;
const app: Application = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.json());

connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => { console.log('banco conectado') })


// organizar melhor o código 

// API Endpoints
app.use("/api/", todoRouter);



app.listen(PORT, () => {
    console.log(`server funcionando na porta: ${PORT}`);
});