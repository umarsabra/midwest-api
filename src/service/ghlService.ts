import axios from "axios";
import { MessageData } from "./discordService";

type Opportunity = {
  title: string;
  status: string;
  stageId: string;
  email: string;
  phone: string;
  source: string;
  name: string;
  tags: Array<string>;
};

export function postOpportunity(leadData: MessageData) {
  const stageId = "29f5376a-91d9-44dc-af7e-48bc543a8c6c";
  const piplineId = "X3kJN2nkL0j25sYutakV";

  const name = `${leadData.fistName} ${leadData.lastName}`;
  const address = `${leadData.address}, ${leadData.city}, ${leadData.state}, ${
    leadData.zipCode || leadData.postalCode
  }`;
  const title = `${name} - ${address}`;

  const opportunity: Opportunity = {
    title,
    stageId,
    name,
    status: "open",
    email: leadData.email,
    phone: leadData.phoneNumber,
    source: "Midwest API",
    tags: ["Midwest cc appt"],
  };
  const URL = `https://rest.gohighlevel.com/v1/pipelines/${piplineId}/opportunities/`;
  const GHL_API_KEY = process.env.GHL_API_KEY;
  console.log(opportunity);
  axios.post(URL, opportunity, {
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
    },
  });
}
