import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
     "https://i.pinimg.com/originals/f1/c3/55/f1c355a67b8794588692b91726f1703f.jpg",  

   "https://a-static.besthdwallpaper.com/two-parrots-the-most-beautiful-natural-meeting-wallpaper-2880x960-92715_104.jpg",
   "https://s1.1zoom.me/b5050/991/Birds_Merops_apiaster_Two_Branches_Foliage_585738_1920x1080.jpg",
   "https://wallpaperaccess.com/full/860701.jpg",

 
];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="pt-20">
     
      <div className="relative w-full h-96">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
    </div>
  );
};

export default Slider;
