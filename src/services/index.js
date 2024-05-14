import { DOMAIN_URL } from "@/config";

export const SendMail = async (body) => {
  try {
    const response = await fetch(DOMAIN_URL + "/api/mail", {
      method: "POST",
      body,
    });

    if (response.ok) return true;

    throw new Error("Failed to send mail");
  } catch (error) {
    console.warn("Error sending mail:", error);
    throw error;
  }
};
