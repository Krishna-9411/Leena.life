import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg">© {new Date().getFullYear()} Leena.ai Clone. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
