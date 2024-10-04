"use client";

import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials"; 
import { CheckCircle, Twitter, Linkedin } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Symptoms
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Common Symptoms of Autism
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: "Communication",
                    description: "Difficulty with communication",
                  },
                  {
                    name: "Social",
                    description: "Challenges in social interactions",
                  },
                  {
                    name: "Repetition",
                    description: "Repetitive behaviors",
                  },
                  {
                    name: "Focus",
                    description: "Intense focus on specific interests",
                  },
                  {
                    name: "Routine",
                    description: "Difficulty with changes in routine",
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckCircle
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <Testimonials />
      </main>
    </div>
  );
}
