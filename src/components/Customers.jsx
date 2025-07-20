import React from "react";

const logos = [
  "images/cocacola.png",
  "images/vecteezy_puma-logo-black-symbol-with-name-clothes-design-icon_10994431.jpg",
  "images/sony.png",
  "images/nestle.png",
];

const Customers = () => {
  return (
    <section className="py-16 bg-gray-50" id="customers">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Global Brands</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} className="h-12" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
