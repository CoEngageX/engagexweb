import {FaCheck} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import Flier from"/Fliers/Frame 829.png"

const items = [
  "HR,Career & Business",
  "Customer Engagement & Cx",
  "Tech & Innovation",
  "Business Summit and Award Night"
];

const EventsPrograms = () => {
  return (
    <section className="section-padding flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Image */}
          <div className="flex-1 ">
            <img
              src={Flier}
              alt="Event Flier"
              className="w-full max-h-[400px] h-auto rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 ">
             <p className="text-2xl font-bold mb-3">Event & Programs</p>
             <p className="text-xl mb-4">Industry-focused events that connect professionals with insights, leaders, and opportunities</p>
             <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center text-[#FDB913]">
                    <FaCheck size={20} />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/events">
               <button className="mt-4 bg-[#FDB913] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] w-[100%] md:w-[70%]">View Upcoming Events & Programs </button>
            </Link>
          </div>

        </div>

    </section>
  )
}

export default EventsPrograms