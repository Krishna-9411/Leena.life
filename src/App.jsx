import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScheduleDemoModal from './components/ScheduleDemoModal'; // 👈 import

const App = () => {
  const [showModal, setShowModal] = useState(false); // 👈 modal state

  return (
    <>
      <Navbar onBookDemoClick={() => setShowModal(true)} />
      <Hero />
      <Features />
      <Customers />
      <Testimonials />
      <Footer />
      {showModal && <ScheduleDemoModal onClose={() => setShowModal(false)} />} {/* 👈 modal */}
    </>
  );
};

export default App;
