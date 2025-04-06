import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RSVPModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAttending, setIsAttending] = useState<"gladly_accept" | "regretfully_decline" | "">("");
  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    attendanceType: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAttendanceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      attendanceType: checked
        ? [...prev.attendanceType, value]
        : prev.attendanceType.filter((type) => type !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setIsAttending("");
      setFormData({
        name: "",
        guests: 1,
        attendanceType: [],
      });
    }, 2000);
  };

  return (
    <div className="text-center py-12 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-3xl font-bold font-[Cinzel] text-gray-800">RSVP</h2>
      <p className="text-sm font-[Jost] text-gray-600 mt-2">
        Let us know if you'll be attending!
      </p>
      <button
        className="mt-6 bg-blue-800 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        RSVP Now
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-[Cinzel] font-bold text-gray-800 mb-4">
                Will you be joining us?
              </h3>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="grid gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-left text-gray-700 font-bold mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded"
                      min="1"
                      required
                    />
                  </div>

                  {/* Attendance Status */}
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Would you be attending?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attendanceStatus"
                          value="gladly_accept"
                          onChange={(e) => setIsAttending(e.target.value as "gladly_accept" | "regretfully_decline")}
                          className="mr-2"
                          required
                        />
                        Gladly Accept
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attendanceStatus"
                          value="regretfully_decline"
                          onChange={(e) => setIsAttending(e.target.value as "gladly_accept" | "regretfully_decline")}                          className="mr-2"
                          required
                        />
                        Regretfully Decline
                      </label>
                    </div>
                  </div>

                  {/* Attendance Type (Conditional) */}
                  <AnimatePresence>
                    {isAttending === "gladly_accept" && (
                      <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <label className="block text-left text-gray-700 font-bold mb-2">
                          Attendance Type
                        </label>
                        <div className="grid gap-2">
                          {["Engagement", "Church", "Reception"].map((type) => (
                            <label key={type} className="flex items-center">
                              <input
                                type="checkbox"
                                value={type}
                                onChange={handleAttendanceTypeChange}
                                className="mr-2"
                              />
                              {type}
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                  >
                    Submit RSVP
                  </button>
                </form>
              ) : (
                <motion.div
                  className="text-center p-6 bg-blue-50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <h4 className="text-2xl font-[Cinzel] font-bold text-blue-900">
                    Thank You! 🎉
                  </h4>
                  <p className="text-gray-700 font-[Jost] mt-2">
                    Your RSVP has been submitted successfully.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RSVPModal;