// components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/siddharth-soni-9230b6286",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      classes: "text-blue-500 hover:text-blue-800"
    },
    {
      href: "https://github.com/Siddhusoni",
      icon: <FaGithub />,
      label: "GitHub",
      classes: "text-gray-400 hover:text-gray-700"
    },
    {
      href: "https://www.instagram.com/siddharthsoni372/",
      icon: <FaInstagram />,
      label: "Instagram",
      classes: "text-pink-600 hover:text-pink-800"
    },
    {
      href: "https://www.facebook.com/profile.php?id=100095104073139&mibextid=LQQJ4d", // Replace with your Facebook profile link
      icon: <FaFacebook />,
      label: "Facebook",
      classes: "text-blue-600 hover:text-blue-800"
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-20 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2 flex justify-center items-center">
          <span>&copy; {currentYear} Copy Right by</span>
          <span className="flex items-center ml-2">
            <svg 
              className="w-5 h-5 text-red-500 inline-block" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="ml-1">Siddharth Soni</span>
          </span>
        </p>
        <ul className="flex justify-center space-x-4 mb-2">
          {["Privacy Policy", "Terms of Service", "Contact Us"].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-gray-400">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ href, icon, label, classes }) => (
            <a 
              key={label}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`cursor-pointer transform hover:scale-110 transition-transform duration-200 text-3xl ${classes}`}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
