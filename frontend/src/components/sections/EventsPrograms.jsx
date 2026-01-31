import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flier from "/Fliers/Frame 829.png";

const items = [
  "HR, Career & Business",
  "Customer Engagement & CX",
  "Tech & Innovation",
  "Business Summit and Award Night",
];

const EventsPrograms = () => {
  return (
    <section className="section-padding flex justify-center px-4">

      <div className="w-full max-[90%] mx-auto">

        {/* Image Container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">

          {/* Background Image */}
          <img
            src={Flier}
            alt="Event Flier"
            className="w-full h-[450px] object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content On Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">

            <p className="text-2xl md:text-3xl font-bold mb-3">
              Events & Programs
            </p>

            <p className="text-sm md:text-lg mb-5 max-w-xl">
              Industry-focused events that connect professionals with insights,
              leaders, and opportunities.
            </p>

            {/* List */}
            <ul className="space-y-2 mb-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheck className="text-[#FDB913]" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link to="/events" className="w-fit">
              <button className="bg-[#FDB913] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] transition">
                View Upcoming Events & Programs
              </button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsPrograms;
