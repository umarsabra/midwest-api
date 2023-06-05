import axios from "axios";

export function createMessage() {}

export function sendMessage(content: string) {
  const webhookUrl =
    "https://discord.com/api/webhooks/1115357254074515466/gX0pGOyEXSXH7sEgOQmJ5i3bloTGfugsp9BP17zGlJCJJSPB4AsF27_yVu9l1B4gO9YY";
  const meesage = {
    content,
  };

  const request = axios.post(webhookUrl, meesage);
}
