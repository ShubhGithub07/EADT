"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const DemoPage = () => {
  const [formData, setFormData] = useState({
    communication: "",
    socialInteraction: "",
    repetitiveBehaviors: "",
    focus: "",
    routineChange: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prediction = simulatePrediction(formData);
    setResult(prediction);
  };

  const simulatePrediction = (data: typeof formData) => {
    const score = Object.values(data).reduce(
      (acc, val) => acc + Number(val),
      0
    );
    return score > 5 ? "High likelihood of autism" : "Low likelihood of autism";
  };

  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center">
          Autism Prediction Simulation
        </h1>
        <p className="mt-4 text-gray-600 text-lg text-center max-w-md">
          Use this tool to input observations about your child's behavior and
          get insights into the likelihood of autism.
        </p>
      </header>

      <section className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Fill out the form
        </h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <label className="block">
            <span className="text-gray-700 font-medium">
              Communication Difficulty (1-5):
            </span>
            <input
              type="number"
              name="communication"
              min="0"
              max="5"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">
              Social Interaction Difficulty (1-5):
            </span>
            <input
              type="number"
              name="socialInteraction"
              min="0"
              max="5"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">
              Repetitive Behaviors (1-5):
            </span>
            <input
              type="number"
              name="repetitiveBehaviors"
              min="0"
              max="5"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">
              Intense Focus (1-5):
            </span>
            <input
              type="number"
              name="focus"
              min="0"
              max="5"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium">
              Difficulty with Routine Changes (1-5):
            </span>
            <input
              type="number"
              name="routineChange"
              min="0"
              max="5"
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Simulate Prediction
          </button>
        </motion.form>

        {result && (
          <motion.div
            className="mt-8 p-4 bg-green-100 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-green-800">
              Prediction Result:
            </h3>
            <p className="mt-2 text-gray-700">{result}</p>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default DemoPage;
