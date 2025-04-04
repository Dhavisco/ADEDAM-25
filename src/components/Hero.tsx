import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage1 from "../assets/ci.jpg";
import heroImage2 from "../assets/moment.jpg";
import heroImage3 from "../assets/t2g.jpg";
import "./Hero.css";

const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <motion.div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className="overlay"></div>
      <div className="content">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Oluwadamilola & Oluwaseun
        </motion.h1>
        <motion.p
          className="hashtag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          #ADEDAM’25
        </motion.p>
        <motion.p
          className="date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Save the Date
        </motion.p>
        <motion.p
          className="date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          19 April, 2025
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;