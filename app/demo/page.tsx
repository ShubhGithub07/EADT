"use client"; // Ensure this is at the very top of the file

import { useState } from "react";

const DemoPage = () => {
  const [a1Score, setA1Score] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      a1_score: a1Score,
      a2_score: 1, // Replace with actual form inputs
      age: 25,
      gender: "male",
    };

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error fetching prediction");
      }

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError("Failed to get a prediction");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={a1Score}
          onChange={(e) => setA1Score(e.target.value)}
          placeholder="Enter A1 Score"
        />
        {/* Add other form fields here */}
        <button type="submit">Predict</button>
      </form>

      {prediction && <p>Prediction: {prediction}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default DemoPage;
