import { motion } from "framer-motion";
import coupleImage1 from "../assets/moment.jpg";
import coupleImage2 from "../assets/mt2.jpg";
import "./EventDetails.css";

const EventDetails = () => {
  const verticalTextVariants = {
   
    hidden: { opacity: 0, x: "-100%" }, // Start from the left (100% of its width)
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Move to its normal position (x: 0)
  
  };

  return (
    <section className="details">
      <div className="date-details">
        <motion.div
          className="vertical-text"
          variants={verticalTextVariants}
          initial="hidden"
          animate="visible"
        >
          SAVE THE DATE
        </motion.div>
        <div className="d-place">
          <div className="date">
            <div className="date-title">THE DATE</div>
            <div className="date-text">19TH APRIL 2025</div>
          </div>
          <div>
            <div className="date-title">CEREMONY</div>
            <div className="date-text">
              LAGOS STATE UNIVERSAL BASIC EDUCATION BOARD (SUBEB) MULTIPURPOSE
              HALL
            </div>
          </div>
        </div>
      </div>

      <div className="details-image">
        <motion.img
          src={coupleImage1}
          alt="Couple Image 1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={coupleImage2}
          alt="Couple Image 2"
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 20 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default EventDetails;
