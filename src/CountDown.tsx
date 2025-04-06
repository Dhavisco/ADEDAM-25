import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const difference = targetDate.getTime() - now;

  const totalSeconds = Math.max(Math.floor(difference / 1000), 0);

  return {
    days: Math.floor(totalSeconds / (3600 * 24)),
    hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

export const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date('2025-04-19T00:00:00+01:00'), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPastEvent, setIsPastEvent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedTime = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTime);

      if (now > targetDate) {
        clearInterval(interval);
        setIsCompleted(false);
        setIsPastEvent(true);
      } else if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        clearInterval(interval);
        setIsCompleted(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {isPastEvent ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-white shadow-xl mx-1 md:mx-0 rounded-3xl p-8 sm:p-12 border border-blue-200"
          >
            <h2 className="text-3xl sm:text-4xl font-[Cinzel] font-bold text-pink-700 mb-4">
              💖 Thank You for Celebrating with Us!
            </h2>
            <p className="text-lg sm:text-xl font-[Jost] text-gray-700">
              Thank you for attending our wedding. God bless you!
            </p>
          </motion.div>
        ) : isCompleted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-white shadow-xl mx-1 md:mx-0 rounded-3xl p-8 sm:p-12 border border-blue-200"
          >
            <h2 className="text-3xl sm:text-4xl font-[Cinzel] font-bold text-blue-800 mb-4">
              💍 It's Our Wedding Day!
            </h2>
            <p className="text-lg sm:text-xl font-[Jost] text-gray-700">
              The big day is finally here. Come celebrate with us! 🎉
            </p>
          </motion.div>
        ) : (
          <>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 md:mb-12 font-[Cinzel]">
              Countdown to Our Big Day 💍
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="relative bg-white rounded-3xl border border-blue-200 shadow-lg p-5 sm:p-7 flex flex-col items-center transition-all duration-300 hover:shadow-blue-100 hover:scale-[1.03]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 180 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={item.value}
                      className="text-5xl sm:text-6xl font-bold text-blue-900 font-[Cinzel] drop-shadow-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.value}
                    </motion.span>
                  </AnimatePresence>
                  <span className="mt-3 text-sm sm:text-base text-gray-700 font-[Jost] tracking-wide uppercase">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};
