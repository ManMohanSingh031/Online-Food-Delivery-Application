// About.js
import React from 'react';
import { GlobeAltIcon, BriefcaseIcon } from '@heroicons/react/solid'; // Import Heroicons
import Profile from '../assets/Profile.jpg'; // Import image

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="p-8 bg-white rounded shadow-xl">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="relative">
        <img 
          src={Profile} 
          alt="About us" 
          className="rounded-full w-64 h-64 object-cover mb-4" // Adjust size as needed
        />
        <div className="absolute bottom-0 right-0 flex space-x-2 p-2">
          <a href="https://www.linkedin.com/in/rajputakash18/" target="_blank" rel="noopener noreferrer">
            <GlobeAltIcon className="h-12 w-12 text-blue-600" />
          </a>
          <a href="https://github.com/ManMohanSingh031" target="_blank" rel="noopener noreferrer">
            <BriefcaseIcon className="h-12 w-12 text-gray-800" />
          </a>
        </div>
      </div>
      <p className="text-gray-700">
        We are a team of passionate individuals dedicated to providing the best service possible. Our goal is to exceed your expectations and ensure your satisfaction.
      </p>
      <p className="text-gray-700">
        We are the creators of this website and we specialize in online food delivery.
      </p>
    </div>
  </div>
  
  );
};

export default About;

