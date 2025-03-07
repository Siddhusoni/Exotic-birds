import React from 'react';

const services = [
  {
    title: 'Professional care',
    image: 'https://cdn5.vectorstock.com/i/1000x1000/50/09/positive-impact-action-icon-vector-30085009.jpg', // Replace with actual images
    description: '"Exotic Bird Professional Care" offers expert care for exotic bird species. This service includes specialized feeding plans, habitat maintenance, grooming, and regular health check-ups tailored to the specific needs of non-native birds.'
  },
  {
    title: 'Birds for sale',
    image: 'https://www.shutterstock.com/image-vector/early-bird-red-icon-clipart-260nw-1609328971.jpg',
    description: 'Discover a vibrant selection of healthy, beautiful birds available for sale at our store! We offer a diverse range of species, including parakeets, canaries, finches, cockatiels, and exotic birds, all lovingly cared for in a nurturing environment. Each bird is hand-fed, socialized, and health-checked to ensure they are ready to join their new homes.'
  },
  {
    title: 'Useful articles & advice',
    image: 'https://img.freepik.com/premium-vector/bulb-idea-talk-logo-template-design_20029-1128.jpg',
    description: 'Learn about common bird behaviors and what they mean, including body language, vocalizations, and social interactions. Understanding your birds behavior can strengthen your bond and improve their well-being.'
  }
];

const Service = () => {
  return (
    <div className="pt-11">
      <div className="flex justify-center items-center mb-12">
        <img
          src= "https://st2.depositphotos.com/1007566/5619/v/450/depositphotos_56191655-stock-illustration-garage-design.jpg" // Replace with actual logo
          alt="Logo"
          className="mr-4 h-20"
        />
        <h1 className="text-4xl font-bold text-center">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
