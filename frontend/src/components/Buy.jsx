import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
  const navigate = useNavigate();

  const birdsForSale = [
    { name: 'Scarlet Macaw', price: '$1500', img: 'https://e1.pxfuel.com/desktop-wallpaper/948/174/desktop-wallpaper-macaw-bird-birds-ultra.jpg' },
    { name: 'African Grey Parrot', price: '$1200', img: 'https://w0.peakpx.com/wallpaper/775/755/HD-wallpaper-african-grey-parrot-old-world-parrot-gray-beautiful-bird-parrot-psittacus-erithacus.jpg' },
    { name: 'Cockatoo', price: '$2000', img: 'https://w0.peakpx.com/wallpaper/300/896/HD-wallpaper-leadbeaters-cockatoo-major-mitchells-cockatoo-pink-parrot-beautiful-bird-pink-cockatoo.jpg' },
    { name: 'Lovebird', price: '$250', img: 'https://img.freepik.com/premium-photo/lovebird-parrots-bokeh-background-against-jungle-two-colorful-lovebird-parrots-kissing-branch-being-happy-colorful-pets-hugging-animals-love-banner-national-hug-day_756498-2659.jpg' },
    { name: 'Canary', price: '$180', img: 'https://img.freepik.com/premium-photo/birds-canary-image_848850-6.jpg' },
    { name: 'Toucan', price: '$2500', img: 'https://wallpapercave.com/wp/wp4131148.jpg' },
    { name: 'Blue jay', price: '$1500', img: 'https://www.courierpress.com/gcdn/-mm-/c3adb76d33eb24e53bfb4683581e22edafd19d7b/c=0-0-5177-2925/local/-/media/2016/11/09/INGroup/Evansville/636143021356078947-DSC-2830lr.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp' },
    { name: 'Woodpecker', price: '$3500', img: 'https://img.pikbest.com/ai/illus_our/20230418/b98b20971a6877349258a85146ba3a2f.jpg!sw800' },
    { name: 'Kingfisher', price: '$1000', img: 'https://images.pexels.com/photos/255435/pexels-photo-255435.jpeg?cs=srgb&dl=pexels-pixabay-255435.jpg&fm=jpg' },
  ];

  // Function to handle the click and navigate to the BuyDetail page
  const handleBuyNowClick = (bird) => {
    navigate('/BuyDetail', { state: { bird } });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Buy and Sell <span className="text-red-500">Exotic Birds</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {birdsForSale.map((bird, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
            <img className="w-full h-48 object-cover rounded-md mb-4" src={bird.img} alt={bird.name} />
            <h2 className="text-xl font-semibold mb-2">{bird.name}</h2>
            <p className="text-lg font-medium text-gray-700 mb-2">Price: {bird.price}</p>
            <button
              onClick={() => handleBuyNowClick(bird)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Buy;
