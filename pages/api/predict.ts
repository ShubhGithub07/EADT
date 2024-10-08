// pages/api/predict.ts
import type { NextApiRequest, NextApiResponse } from "next";

const BACKEND_URL = "https://87c8-35-223-221-119.ngrok-free.app/api/predict"; // Update with your ngrok URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { a1_score, a2_score, age, gender } = req.body;

    try {
      // Forward the request to your Google Colab model
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ a1_score, a2_score, age, gender }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.statusText}`);
      }

      const prediction = await response.json();
      return res.status(200).json({ prediction: prediction.result });
    } catch (error) {
      console.error("Error fetching prediction from backend:", error);
      return res
        .status(500)
        .json({ error: "Error fetching prediction from backend" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
