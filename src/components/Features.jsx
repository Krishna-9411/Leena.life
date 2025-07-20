import React from "react";

const features = [
  { title: "Smart Automation", description: "Automate routine HR tasks and streamline workflows." },
  { title: "24/7 Support", description: "AI-powered assistance available round the clock." },
  { title: "Employee Insights", description: "Gain deep insights with data-driven analytics." },
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
