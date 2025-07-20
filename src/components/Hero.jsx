import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-24" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Automate Employee Experiences <br />
            with <span className="text-blue-600">Conversational AI</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Empower your enterprise with smart, scalable, and secure automation—just like Leena.ai.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-50">
              Book a Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.leena.ai/images/use-cases/remoteOnboarding/hero.webp"
            alt="AI Avatar"
            className="w-full max-w-md mx-auto rounded-2xl drop-shadow-xl"
          />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-md text-sm text-gray-500">
            Your personal HR assistant
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
