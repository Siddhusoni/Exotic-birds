import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing FontAwesome icons

const Contact = () => {
    return (
        <div className="pt-16 flex flex-col md:flex-row justify-center items-start max-w-screen-lg mx-auto">
            {/* Left Side - Contact Details */}
            <section className="w-full pt-20 md:w-1/2 p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-4">
                    Get in Touch <br />
                    <span className="text-red-500">Contact me ................</span>
                </h1>
                
                <p className="text-lg mb-2 flex items-center">
                    <FaUser className="mr-2 text-black-500" /> <strong>Name:</strong> Siddharth Soni
                </p>
                
                <p className="text-lg mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-500" /> <strong>Email:</strong> Siddharthsoni070@gmail.com
                </p>
                
                <p className="text-lg mb-2 flex items-center">
                    <FaPhone className="mr-2 text-orange-500 -500" /> <strong>Contact Number:</strong> +91 8878721435
                </p>
                
                <p className="text-lg mb-2 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-green-500" /> <strong>Location:</strong> Indore....
                </p>

              
            </section>


            {/* Right Side - Contact Form */}
            <section className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-600 mb-4">We'd love to hear from you! Please fill out the form below.</p>
                <form className="space-y-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                    >
                        Send
                    </button>
                </form>
                <footer className="text-gray-500 text-sm mt-4">
             
                </footer>
            </section>
        </div>
    );
};

export default Contact;
