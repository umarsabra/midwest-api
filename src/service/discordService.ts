import axios from "axios";

export function createMessage() {}

export function sendMessage(content: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const meesage = {
    content,
  };

  const request = axios.post(webhookUrl, meesage);
}
