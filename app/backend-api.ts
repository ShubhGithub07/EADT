import { NextApiRequest, NextApiResponse } from "next";

const BACKEND_URL = "https://87c8-35-223-221-119.ngrok-free.app/api/predict"; // Replace with your Colab ngrok URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const prediction = await response.json();
      res.status(200).json({ prediction });
    } catch (error) {
      console.error("Error fetching prediction from backend:", error);
      res.status(500).json({ error: "Error fetching prediction from backend" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
