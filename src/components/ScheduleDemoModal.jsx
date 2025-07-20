import React from 'react';

const ScheduleDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Schedule a 30-minute product demo</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First name" className="w-1/2 border rounded px-3 py-2" />
            <input type="text" placeholder="Last name" className="w-1/2 border rounded px-3 py-2" />
          </div>
          <input type="email" placeholder="Work email" className="w-full border rounded px-3 py-2" />
          <div className="flex gap-4">
            <select className="w-1/2 border rounded px-3 py-2">
              <option>India (+91)</option>
              <option>USA (+1)</option>
              <option>UK (+44)</option>
            </select>
            <input type="tel" placeholder="+91..." className="w-1/2 border rounded px-3 py-2" />
          </div>
          <input type="text" placeholder="Job title" className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="Company name" className="w-full border rounded px-3 py-2" />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded"
          >
            Schedule Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleDemoModal;
