import express, { Request, Response } from "express";
import dotenv from "dotenv";
import discordController from "./controller/discordController";

dotenv.config();
const PORT = process.env.PORT as unknown as number;
const IP = process.env.IP;

const app = express();
app.use("/discord", discordController);

app.get("/", (req, res) => {
  res.send("Welcome to Midwest Api");
});

app.listen(PORT, IP, () => {
  console.log(`Server is running on http://${IP}:${PORT}`);
});
