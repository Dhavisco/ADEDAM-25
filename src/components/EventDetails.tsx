import { motion } from "framer-motion";
import coupleImage1 from "../assets/moment.jpg";
import coupleImage2 from "../assets/mt2.jpg";
import "./EventDetails.css";
import AddToCalendar from "./AddToCalendar";

const EventDetails = () => {

  const weddingDetails = {
  title: "Oluwadamilola & Oluwaseun's Wedding",
  description: "Celebrate with us on our special day!",
  start: "2025-04-19T09:00:00+01:00",
  end: "2025-04-19T19:00:00+01:00",
  location:
    "Engagement: TBA @ 8am | Church: Highland Church, Oregun @ 11am | Reception: SUBEB Maryland @ 2pm",
};
 
  const verticalTextVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
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
          <motion.div className="date" variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">THE DATE</div>
            <div className="date-text">19TH APRIL 2025</div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">ENGAGEMENT</div>
            <motion.div className="date-text" variants={itemVariants} initial="hidden" animate="visible">
              8:00 AM
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">CHURCH CEREMONY</div>
            <motion.div className="date-text" variants={itemVariants} initial="hidden" animate="visible">
              <span>Highland Church</span>
              <span className="location">
                2/3 Kudirat Abiola Way, First Bank Bus Stop, Oregun, Lagos State
              </span>
              <span>11:00 AM</span>
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">RECEPTION</div>
            <motion.div className="date-text" variants={itemVariants} initial="hidden" animate="visible">
              <span>State Universal Basic Education Board (SUBEB)</span>
              <span className="location">Maryland, Lagos</span>
              <span>2:00 PM</span>
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">DRESS CODE</div>
            <motion.div className="date-text" variants={itemVariants} initial="hidden" animate="visible">
              Blue and White
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <div className="date-title">RSVP</div>
            <motion.div className="date-text" variants={itemVariants} initial="hidden" animate="visible">
              09135846538, 08109377182
            </motion.div>
          </motion.div>

          <AddToCalendar event={weddingDetails}/>
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
