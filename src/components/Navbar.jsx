import React from 'react';

const Navbar = ({ onBookDemoClick }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">Leena.ai</div>
      <ul className="flex space-x-6 text-gray-600">
        <li><a href="#features">Features</a></li>
        <li><a href="#customers">Customers</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button
        onClick={onBookDemoClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book a Demo
      </button>
    </nav>
  );
};

export default Navbar;
