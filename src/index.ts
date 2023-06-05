import express, { Request, Response } from "express";
import discordController from "./controller/discordController";
const app = express();
app.use("/discord", discordController);
const port = 8080;
const ipAddress = "192.168.1.108";

app.get("/", (req, res) => {
  res.send("Welcome to Midwest Api");
});

app.listen(port, ipAddress, () => {
  console.log(`Server is running on http://${ipAddress}:${port}`);
});
