import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Assuming you will use custom CSS for spinner


const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = 'ce24912296074baa9474270e0c8eaafd'; // Replace with your NewsAPI key

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

    return (
        <div className="pt-24">
            {/* Header Section */}
            <div className="flex justify-center items-center mb-12">
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
    );
};

export default News;
