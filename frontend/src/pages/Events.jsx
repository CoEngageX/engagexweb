import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedEventIds, setExpandedEventIds] = useState([]); 

  useEffect(() => {
    axios
      .get("/json/Event.json")
      .then((res) => {
        setEvents(res.data.events);
        setFeaturedEvent(res.data.events[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        Loading events...
      </div>
    );
  }

  if (!featuredEvent) return null;

  const toggleExpand = (id) => {
    setExpandedEventIds((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl font-semibold text-center mb-8 w-[100%] md:w-[60%] mx-auto">
        Grow Your Network & Skill With Our Events
      </h1>

      {/* main events*/}
      <div className="border border-gray-300 p-3 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <img
              src={featuredEvent.coverImage}
              alt={featuredEvent.eventName}
              className="w-full h-auto 2xl:h-[400px] rounded-lg"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold">{featuredEvent.eventName}</h3>
            <p className="mb-4">{featuredEvent.description}</p>

            <h4 className="font-bold">Core Sessions:</h4>
            <ol className="list-decimal list-inside">
              {featuredEvent.coreSessions.map((session, index) => (
                <li key={index}>{session}</li>
              ))}
            </ol>

            <p className="text-sm font-bold mt-4">Time: {featuredEvent.date}</p>
            <p className="text-sm font-bold">Theme: {featuredEvent.theme}</p>
          </div>
        </div>
        <a href={featuredEvent.registrationLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#FDB913] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] w-[100%] md:w-[70%] flex justify-center items-center mx-auto">
            Preregister Now
          </button>
        </a>
      </div>

      {/* other events */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold bg-[#FDB913] text-black px-4 py-2 w-fit rounded-lg">
          Other Events
        </h2>

        {events
          .filter((event) => event.id !== featuredEvent.id)
          .map((event) => {
            const isExpanded = expandedEventIds.includes(event.id);

            return (
              <div key={event.id} className="border border-gray-300 rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src={event.coverImage}
                    alt={event.eventName}
                    className="w-full md:w-32 h-24 object-cover rounded-lg flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{event.eventName}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {event.description ||
                        "A CoEngageX summit bringing together industry leaders to explore growth, leadership, and innovation."}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <a 
                      href={event.registrationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#FDB913] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] inline-block text-center"
                    >
                      Buy a ticket
                    </a>
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="text-[#FDB913] px-4 py-2 font-semibold hover:text-black"
                    >
                      {isExpanded ? "Hide Details" : "See Details"}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-4 border-t pt-4">
                    <h4 className="font-bold mb-2">Core Sessions:</h4>
                    <ol className="list-decimal list-inside">
                      {event.coreSessions?.map((session, index) => (
                        <li key={index}>{session}</li>
                      ))}
                    </ol>
                    <p className="text-sm font-bold mt-2">Time: {event.date}</p>
                    <p className="text-sm font-bold">Theme: {event.theme}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;
