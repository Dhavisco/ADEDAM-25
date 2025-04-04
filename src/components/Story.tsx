// src/components/Story.tsx
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <motion.h2 
        className="text-4xl font-bold text-gray-800" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}>
        Our Love Story
      </motion.h2>
      
      <motion.p 
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}>
        "It all started with a simple hello, and now we’re here, counting down to forever. From our first meeting to countless cherished moments, our journey has been nothing short of magical."
      </motion.p>
      
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <motion.img 
          src="/assets/proposal.jpg" 
          alt="Proposal moment" 
          className="w-72 h-72 object-cover rounded-lg shadow-lg" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 1 }}
        />
        
        <motion.img 
          src="/assets/first-outing.jpg" 
          alt="First Outing" 
          className="w-72 h-72 object-cover rounded-lg shadow-lg" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1.2, duration: 1 }}
        />
        
        <motion.img 
          src="/assets/family-visit.jpg" 
          alt="First Family Visitation" 
          className="w-72 h-72 object-cover rounded-lg shadow-lg" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1.4, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Story;
