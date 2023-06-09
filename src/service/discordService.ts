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

export function sendMessage(content: string, webhookUrl: any) {
  const meesage = {
    content,
  };
  const request = axios.post(webhookUrl, meesage);
}
