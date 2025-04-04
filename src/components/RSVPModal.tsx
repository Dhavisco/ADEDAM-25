import { useState } from 'react';

export default function RSVPModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white p-6 rounded max-w-md w-full" onClick={e => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center space-y-4">
            <h3 className="font-dancing text-3xl">Thank you!</h3>
            <p className="font-jost text-lg">We have received your response.</p>
            <button 
              onClick={onClose}
              className="bg-black text-white px-6 py-2 font-jost mt-4 rounded"
            >
              Go To Home
            </button>
          </div>
        ) : (
          <>
            <div className="text-center space-y-2 mb-6">
              <h3 className="font-dancing text-3xl">Will you be joining us?</h3>
              <p className="font-jost text-lg">Please Reply by 1st of November</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields here */}
            </form>
          </>
        )}
      </div>
    </div>
  );
}