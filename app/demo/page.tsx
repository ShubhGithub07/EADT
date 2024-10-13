"use client";

import { useState } from "react";

const AutismDemoPage = () => {
  const [formData, setFormData] = useState({
    a1_score: "",
    a2_score: "",
    a3_score: "",
    a4_score: "",
    a5_score: "",
    a6_score: "",
    a7_score: "",
    a8_score: "",
    a9_score: "",
    a10_score: "",
    age: "",
    gender: "",
    ethnicity: "",
    jaundice: "",
    austim: "",
    contry_of_res: "",
    used_app_before: "",
  });

  const [prediction, setPrediction] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form data to the backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Autism Prediction Demo
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Map through each form field */}
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key.replace(/_/g, " ").toUpperCase()}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Get Prediction
          </button>
        </form>

        {prediction && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Prediction:</h2>
            <p className="text-lg text-gray-600">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutismDemoPage;
