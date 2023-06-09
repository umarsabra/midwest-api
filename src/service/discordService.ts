import axios from "axios";

export type MessageData = {
  agent: string;
  fistName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  callNotes: string;
  comments: string;
  city: string;
  state: string;
  listId: string;
  listName: string;
  zipCode: string;
  postalCode: string;
  email: string;
  campaign: string;
  dispo: string;
};

export function createBookedApptMessage(messageData: MessageData): string {
  const temp = `## ${messageData.agent} just got a new appointment! 🎉

### 📢 Campaign 
    ✏️ Agent Name: ${messageData.agent}
    ✏️ Campaign Name: ${messageData.campaign}
    🆔 List id: ${messageData.listId}
    📝 List name: ${messageData.lastName}

### 👤 Client
    ✏️ Full name: ${messageData.fistName} ${messageData.lastName}
    📞 Phone number: ${messageData.phoneNumber}
    📧 Email: ${messageData.email}
    📌 Address: ${messageData.address}
    🏙️ City: ${messageData.city}
    🚩 State: ${messageData.state}
    📭 Zip: ${messageData.zipCode}

### ☎️ Call
    📝 Notes: ${messageData.callNotes}
    💬 Comments: ${messageData.comments}
  `;

  return temp;
}

export type ApptReminderMessageData = {
  firstName: string;
  clientName: string;
  apptDate: string;
};

export function createApptCloserReminder(data: ApptReminderMessageData) {
  return `# ATTENTION PLEASE ⚠️

Hey ${data.firstName},

Just a quick reminder to ensure timely dispositioning of the appointment scheduled with ${data.clientName} on ${data.apptDate}.
Properly logging the outcome of each appointment helps us maintain organized records and provide excellent service to our clients.
Your attention to this task is greatly appreciated. For any questions, reach out to your team leader or designated contact.

Best regards,

IT Department
Midwest Solutions Inc.
`;
}

export function sendMessage(content: string, webhookUrl: any) {
  const meesage = {
    content,
  };
  const request = axios.post(webhookUrl, meesage);
}
