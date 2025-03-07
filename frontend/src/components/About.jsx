import React from 'react';

const About = () => {
  const birds = [
    {
      title: 'The Beauty of Exotic Birds',
      description: 'Exotic birds are admired for their vibrant feathers and fascinating behavior.',
      image: 'https://c4.wallpaperflare.com/wallpaper/499/8/945/birds-pair-parrots-red-macaw-wallpaper-preview.jpg', // Replace with actual image URL
    },
    {
      title: 'Importance of Exotic Birds',
      description: 'Exotic birds play crucial roles in ecosystems as pollinators and seed dispersers.',
      image: 'https://i.pinimg.com/originals/05/0e/d6/050ed66eb9f3fdd633e18d16f47187ef.png', // Replace with actual image URL
    },
    {
      title: 'Conservation Efforts',
      description: 'Protecting exotic birds is essential for maintaining biodiversity.',
      image: 'https://p4.wallpaperbetter.com/wallpaper/658/257/100/toucan-colorful-exotic-birds-colorful-beak-yellow-black-body-build-red-tail-desktop-hd-wallpaper-for-pc-tablet-and-mobile-download-2560%C3%971600-wallpaper-preview.jpg', // Replace with actual image URL
    },
    {
      title: 'Fascinating Bird Facts',
      description: 'Birds like the Hyacinth Macaw and Lyrebird possess unique traits and skills.',
      image: 'https://w0.peakpx.com/wallpaper/135/717/HD-wallpaper-birds-on-branch-pretty-colorful-art-exotic-birds-beautiful-parrot-branch-leaves-paradise-feather-painting-tropics.jpg', // Replace with actual image URL
    },
    {
      title: 'Rare Species',
      description: 'Many exotic bird species are rare and threatened by habitat destruction.',
      image: 'https://w0.peakpx.com/wallpaper/441/616/HD-wallpaper-exotic-bird-trunk-red-feathers-animal.jpg', // Replace with actual image URL
    },
    {
      title: 'Bird Conservation Programs',
      description: 'Various organizations work to protect exotic bird species worldwide.',
      image: 'https://c4.wallpaperflare.com/wallpaper/998/607/622/exotic-birds-parrot-plumage-branch-wallpaper-preview.jpg', // Replace with actual image URL
    }
  ];

  return (
    <div className=" py-10 px-4 md:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About <span className="text-red-500">Exotic Birds</span></h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {birds.map((bird, index) => (
          <div key={index} className=" shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Top Image */}
            <img src={bird.image} alt={bird.title} className="w-full h-32 object-cover" />
            
            {/* Bottom Description */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{bird.title}</h2>
              <p className="text-gray-600 text-sm">{bird.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Card */}
      <div className="bg-white shadow-2xl rounded-lg p-8 text-center mt-10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Help Protect <span className="text-red-500 font-bold">Exotic Birds</span></h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Contribute to the conservation of exotic birds. Support wildlife organizations, adopt sustainable practices, or spread awareness about these magnificent creatures.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
