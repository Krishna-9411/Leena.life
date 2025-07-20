import React from "react";

const testimonials = [
  { name: "John Doe", text: "Leena.ai helped us streamline HR like never before!" },
  { name: "Jane Smith", text: "Our productivity improved with their AI-driven solutions." },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-xl shadow-md bg-gray-50">
              <p className="text-gray-700 italic">“{testimonial.text}”</p>
              <h4 className="mt-4 font-semibold text-blue-600">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
