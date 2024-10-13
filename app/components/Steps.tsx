// app/components/Steps.tsx
import React from "react";

const Steps = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Input Your Data",
              description:
                "Provide basic health information and lifestyle details.",
            },
            {
              title: "AI Analysis",
              description:
                "Our advanced AI model processes your data for accurate predictions.",
            },
            {
              title: "Get Results",
              description:
                "Receive a comprehensive report on your heart health status.",
            },
            {
              title: "Expert Review",
              description:
                "Optional review of your results by certified cardiologists.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-blue-500 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
