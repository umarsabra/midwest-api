import { Router, Request, Response } from "express";
import {
  ApptReminderMessageData,
  MessageData,
  createApptCloserReminder,
  createBookedApptMessage,
  sendMessage,
} from "../service/discordService";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const messageData = {
    agent: req.query.agent,
    fistName: req.query.first_name,
    lastName: req.query.last_name,
    phoneNumber: req.query.phone,
    address: req.query.address,
    callNotes: req.query.notes,
    comments: req.query.comments,
    city: req.query.city,
    state: req.query.state,
    listId: req.query.list_id,
    listName: req.query.list_name,
    zipCode: req.query.zip_code,
    postalCode: req.query.postal_code,
    email: req.query.email,
    campaign: req.query.campaign,
    dispo: req.query.dispo,
  } as unknown as MessageData;

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const content = createBookedApptMessage(messageData);
  sendMessage(content, webhookUrl);
  res.json(messageData);
});

router.post("/reminder", (req, res) => {
  const webhookUrl = process.env.DISCORD_REMINDER_WEBHOOK_URL;

  console.log(req.body);
  const data: ApptReminderMessageData = {
    firstName: req.body.fist_name as unknown as string,
    clientName: req.body.client_name as unknown as string,
    apptDate: req.body.appt_date as unknown as string,
  };

  const content = createApptCloserReminder(data);
  sendMessage(content, webhookUrl);
  res.send("message sent");
});

export default router;
