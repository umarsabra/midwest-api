import { Router, Request, Response } from "express";
import { MessageData, sendMessage } from "../service/discordService";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const message = {
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

  sendMessage(message);
  res.json(message);
});

router.post("/reminder", (req, res) => {
  console.log(req.body);
});

export default router;
