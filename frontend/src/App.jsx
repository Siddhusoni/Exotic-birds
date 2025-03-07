import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Home from './components/Home'
import Service from './components/Service'
import News from './components/News'
import Footer from './components/Footer'
import About from './components/About' // Assuming you have a Contact component
import Contact from './components/Contact';
import BirdGallery from './components/BirdGallery';
import ExoticBirdsHistory from './components/ExoticBirdsHistory';
import Buy from './components/Buy';
import BuyDetail from './components/BuyDetail';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Slider />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/gallery" element={<BirdGallery/>} />
        <Route path="/ExoticBirdsHistory" element={<ExoticBirdsHistory/>} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/BuyDetail" element={<BuyDetail/>} />

         {/* Add your Contact route here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
