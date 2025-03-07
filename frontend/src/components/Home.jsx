import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { FaWhatsapp } from 'react-icons/fa';
// Reusable Image Component with Hover Effect
const ImageComponent = ({ src, alt }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={src}
      alt={alt}
      className="w-72 h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
);

// Reusable Text Component
const TextContent = ({ title, description }) => (
  <div className="flex flex-col justify-center">
    <h1 className="font-bold flex flex-col text-red-500 text-3xl mb-4">{title}</h1>
    <p className="text-lg text-gray-700">{description}</p>
  </div>
);

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'ce24912296074baa9474270e0c8eaafd'; // Replace with your NewsAPI key
  const whatsappUrl = 'https://wa.me/8878721435?text=Hello! I would like to know more about your services.'; // Updated with your number

  useEffect(() => {
      const fetchArticles = async () => {
          try {
              const response = await axios.get(`https://newsapi.org/v2/everything?q=birds&apiKey=${API_KEY}`);
              setArticles(response.data.articles.slice(0, 6)); // Get the first 6 articles
          } catch (error) {
              console.error("Error fetching news articles", error);
          } finally {
              setLoading(false);
          }
      };
      fetchArticles();
  }, []);

  if (loading) {
      return (
          <div className="flex justify-center items-center h-screen">
              <div className="spinner"></div>
          </div>
      );
  }
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
  return (
    <div className="pt-16">
    <div className="pb-16 min-h-screen flex flex-col items-center justify-center">
      {/* Section Wrapper */}
      <div className="container mx-auto px-4 mb-16 space-y-16">
        
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex space-x-4">
            <ImageComponent
              src="https://cdn.pixabay.com/photo/2013/02/21/19/02/animal-84485_640.jpg"
              alt="Large Image"
            />
            <ImageComponent
              src="https://static.vecteezy.com/system/resources/previews/035/655/180/non_2x/ai-generated-scarlet-macaw-bird-isolated-on-transparent-background-ai-generated-free-png.png"
              alt="Scarlet Macaw"
            />
          </div>
          <TextContent
            title="Name is Scarlet Macaw"
            description="The sun conure, or sun parakeet, is a lovely yellow-and-orange bird from South America. Despite their small size, sun conures are known for their loud squawks."
          />
        </div>

        {/* Second Section (Flipped Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextContent
            title="Name is Galah (Rose-Breasted) Cockatoo"
            description="Cockatoos are known for their beautiful 'crowns.' and the rose-breasted cockatoo (Eolophus roseicapillus) has pretty pink crown feathers. At about two-feet tall, this Australian native is a popular pet because of its pleasant personality and impressive ability to 'speak' and do tricks. In fact, its nickname galah means 'fool' in Australian slang."
          />
          <div className="relative flex space-x-4">
            <ImageComponent
              src="https://t3.ftcdn.net/jpg/06/93/15/66/360_F_693156628_P8VicRLx44gvLagOVcnlcodU4kqfqGCt.jpg"
              alt="Collared Lory"
            />
            <ImageComponent
              src="https://png.pngtree.com/png-vector/20240203/ourlarge/pngtree-galah-bird-pink-and-grey-cockatoo-watercolor-painted-png-image_11598131.png"
              alt="Galah (Rose-Breasted) Cockatoo"
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex space-x-4">
            <ImageComponent
              src="https://thumbs.dreamstime.com/b/isolated-portrait-burrowing-parrot-29459596.jpg"
              alt="Burrowing Parrot"
            />
            <ImageComponent
              src="https://cdn.britannica.com/28/12728-050-AA42E39F/parakeet.jpg"
              alt="Parakeet"
            />
          </div>
          <TextContent
            title="Name is Patagonian Conure"
            description="The Patagonian conure is a burrowing parrot found in South America. Its olive-brown feathers and vibrant yellow belly make it a unique species."
          />
        </div>

        {/* Fourth Section (Flipped Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextContent
            title="Name is Scarlet Macaw"
            description="The Scarlet Macaw is the largest parrot species, known for its striking blue feathers and strong beak. They are social, intelligent, and a symbol of beauty."
          />
          <div className="relative flex space-x-4">
            <ImageComponent
              src="https://png.pngtree.com/png-clipart/20231007/ourmid/pngtree-sun-conure-transparent-background-png-image_10196194.png"
              alt="Scarlet Macaw 1"
            />
            <ImageComponent
              src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-sun-conure-companions-png-image_10304820.png"
              alt="Scarlet Macaw 2"
            />
          </div>
        </div>
      </div>
    </div>

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

       {/* WhatsApp Floating Button */}
       <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>    <div>
            {/* Header Section */}
            <div className="pt-20 flex justify-center items-center mb-12">
        <img
          src= "https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435823_c3MiOAvV8gFwtQzTGlsLt6I6mFvQuQmN.jpg" // Replace with actual logo
          alt="Logo"
          className="mr-4 h-20"
        />
        <h1 className="text-4xl font-bold text-center">
        Latest  <span className="text-red-500">News</span>
        </h1>
        </div>

            {/* News Cards */}
            <div className="flex flex-wrap justify-center">
                {articles.map((article, index) => (
                    <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {article.urlToImage && <img className="w-full h-48 object-cover" src={article.urlToImage} alt={article.title} />}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{article.title}</div>
                            <p className="text-gray-700 text-base">{article.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default Home;
