import React from 'react';
import children from "../assets/images/children.jpeg";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <section className="hero h-500 bg-cover bg-center relative mt-20" style={{ backgroundImage: `url(${children})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center py-20">
          <h1 className="text-4xl font-bold">Welcome to Muhammadiyah Welfare Home</h1>
          <p className="mt-4 text-lg">Providing shelter, care, and protection for children in need.</p>
          <Link to="/aboutus" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded text-white">Learn More About Us</Link>
        </div>
      </section>

      <section className="mission text-center py-16">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Muhammadiyah Welfare Home (MWH) provides shelter and care for children in need, including those who are neglected, abused, homeless, or have been involved with the juvenile justice system. Our mission is to protect and nurture these children, helping them build a brighter future.
        </p>
      </section>

      <section className="services py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="service-item bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">24/7 Residential Care</h3>
            <p className="mt-4">We provide round-the-clock care to ensure the safety and well-being of every child in our home.</p>
          </div>
          <div className="service-item bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Therapeutic Support</h3>
            <p className="mt-4">We offer counseling and psychological support to help children overcome trauma and rebuild their lives.</p>
          </div>
          <div className="service-item bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Education & Vocational Training</h3>
            <p className="mt-4">We provide education and skills training to ensure the children have opportunities for their future.</p>
          </div>
        </div>
      </section>

      <section className="testimonials py-16">
        <h2 className="text-3xl font-bold text-center">What People Say</h2>
        <div className="mt-8 max-w-2xl mx-auto">
          <blockquote className="text-lg italic text-center">
            "Muhammadiyah Welfare Home has been a safe haven for children in need. Their dedication and care have transformed the lives of so many."
          </blockquote>
          <p className="mt-4 text-center text-sm">- John Doe, Social Worker</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
