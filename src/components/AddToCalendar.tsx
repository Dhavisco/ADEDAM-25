// components/AddToCalendar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { google, office365, ics } from "calendar-link";

type EventDetails = {
  title: string;
  description?: string;
  start: string;
  end: string;
  location?: string;
};

const AddToCalendar = ({ event }: { event: EventDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  const googleUrl = google(event);
//   const outlookUrl = outlook(event);
  const office365Url = office365(event);
//  const yahooUrl = yahoo(event);
  const icsUrl = ics(event);

  const buttonVariants = {
    hover: { scale: 1.05, opacity: 0.9, y: -2, transition: { duration: 0.3 } },
    tap: { scale: 0.95, opacity: 0.8, y: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="inline-block relative text-blue-900 z-[100]"> {/* Added relative and z-[100] */}
      <motion.button
        className="bg-white border border-blue-900 rounded px-4 py-3 font-bold"
        onClick={() => setIsOpen((prev) => !prev)}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Add to Calendar
      </motion.button>

      <ul
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute top-full left-0 min-w-full bg-white border shadow-lg py-2 px-1 transition-opacity z-50`}
      >
        <li>
          <a
            href={icsUrl}
            download="event.ics"
            className="block text-blue-900 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap"
          >
            Apple (iCal)
          </a>
        </li>
        <li>
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-900 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap"
          >
            Google Calendar
          </a>
        </li>
        <li>
          <a
            href={office365Url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-900 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap"
          >
            Office365
          </a>
        </li>
        {/* <li>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-900 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap"
          >
            Outlook
          </a>
        </li>
        <li>
          <a
            href={yahooUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-900 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap"
          >
            Yahoo
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default AddToCalendar;
