import React from 'react';

const BirdGallery = () => {
    const birdImages = [
        'https://i.pinimg.com/originals/3c/32/56/3c32567ab206c7c3b575e559d5c8851a.jpg', // Replace with actual image URLs
        'https://w0.peakpx.com/wallpaper/358/85/HD-wallpaper-blue-yellow-macaw-tropical-birds-parrots-beautiful-birds.jpg',
        'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=377,fit=crop,trim=1.7278617710583155;15.553398058252428;146.8682505399568;5.184466019417475/AVLPKZZeXjCB9ENE/download-1-Aq2ZOXQXrKCrQMeQ.jpg',
        'https://c4.wallpaperflare.com/wallpaper/577/323/667/5bd3801d1970f-wallpaper-preview.jpg',
        'https://wallpapershome.com/images/pages/ico_h/10037.jpg',
        'https://t3.ftcdn.net/jpg/06/84/15/38/360_F_684153829_LqrXnv4C0MZm88PZJn5dTE20vVHk1x21.jpg',
        'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F561464180912%2F1624337020625%2Fshutterstock_1663494748-1-TN.jpg%3Fv%3D0&c_options=w_600',
        'https://wallpapercave.com/wp/wp5846487.jpg',
        'https://png.pngtree.com/thumb_back/fh260/background/20240424/pngtree-tropical-birds-at-the-zoo-image_15665735.jpg',
        'https://c1.wallpaperflare.com/preview/989/620/1/macaw-red-parrot-bird.jpg',
        'https://e0.pxfuel.com/wallpapers/192/665/desktop-wallpaper-exotic-bird-heads-exotic-graphy.jpg',
       ' https://img.freepik.com/free-photo/vividly-colored-hummingbird-nature_23-2151495322.jpg',
       'https://wallpapershome.com/images/pages/ico_h/26114.jpg',
       'https://img.freepik.com/free-photo/vividly-colored-hummingbird-natural-environment_23-2151495384.jpg',
       'https://c4.wallpaperflare.com/wallpaper/106/620/62/bald-eagle-bird-predator-snow-wallpaper-preview.jpg',
       'https://png.pngtree.com/thumb_back/fh260/background/20240727/pngtree-colorful-scarlet-macaw-parrot-image_16116050.jpg',
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-12">Bird Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {birdImages.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img 
                                src={image} 
                                alt={`Bird ${index + 1}`} 
                                className="w-full h-64 object-cover" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                                <p className="text-white text-xl font-semibold">Bird {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BirdGallery;
