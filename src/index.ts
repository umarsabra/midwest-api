import express, { Request, Response } from "express";
import dotenv from "dotenv";
import discordController from "./controller/discordController";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.PORT as unknown as number;
const IP = process.env.IP;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/discord", discordController);

app.get("/", (req, res) => {
  res.send("Welcome to Midwest Api");
});

app.listen(PORT, IP, () => {
  console.log(`Server is running on http://${IP}:${PORT}`);
});
