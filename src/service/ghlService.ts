import axios from "axios";
import { MessageData } from "./discordService";

type Opportunity = {
  title: string;
  status: string;
  stageId: string;

  name?: string;
  email?: string;
  phone: string;
  source: string;

  tags: Array<string>;
};

type Contact = {
  name?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  contactId?: string;

  dateOfBirth?: string;

  address1: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;

  companyName?: string;
  website?: string;

  tags: Array<string>;
  source: string;

  customField?: any;
};

type ReadContact = {
  id: string;
  dateAdded: string;
  phone: string;
  type: string;
  locationId: string;
  tags: Array<string>;
  source: string;
  email: string;
  emailLowerCase: string;
  firstName: string;
  firstNameLowerCase: string;
  fullNameLowerCase: string;
  lastName: string;
  lastNameLowerCase: string;
  country: string;
  state: string;
  city: string;
  address1: string;
  postalCode: string;
  customField: Array<any>;
};

export async function postOpportunity(leadData: MessageData) {
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
    status: "open",
    phone: leadData.phoneNumber,
    source: "Midwest API",
    tags: ["midwest cc appt"],
  };

  const URL = `https://rest.gohighlevel.com/v1/pipelines/${piplineId}/opportunities/`;
  const GHL_API_KEY = process.env.GHL_API_KEY;

  try {
    const res = await axios.post(URL, opportunity, {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function postContact(leadData: MessageData) {
  const URL = `https://rest.gohighlevel.com/v1/contacts/`;
  const GHL_API_KEY = process.env.GHL_API_KEY;

  const contact: Contact = {
    firstName: leadData.fistName,
    lastName: leadData.lastName,
    phone: leadData.phoneNumber,
    email: leadData.email,
    address1: leadData.address,
    city: leadData.city,
    postalCode: leadData.zipCode || leadData.postalCode,
    state: leadData.state,
    country: "US",
    tags: ["midwest cc appt", leadData.listId, leadData.listName],
    source: "Midwest API",
  };

  try {
    const res = await axios.post(URL, contact, {
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
      },
    });
    return res.data.contact as unknown as ReadContact;
  } catch (e) {
    console.log(e);
  }
}

export async function postContactOpportunity(leadData: MessageData) {
  //POST CONTACT
  postContact(leadData);
  //POST OPPORTUINTY
  postOpportunity(leadData);
}
