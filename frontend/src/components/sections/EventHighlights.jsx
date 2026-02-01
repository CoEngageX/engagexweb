import React from 'react'

const EventHighlights = () => {
  const event = {
    id: 1,
    eventName: "CoengageX HR & Business",
    description: "Join HR leaders, business strategists, founders, and workplace innovators for a transformative Q1 edition of CoEngageX. This event focuses on empowering professionals with skills, strategies, and insights that drive business and people growth.",
    coreSessions: [
      "Employee Engagement & Talent Culture",
      "AI in HR & System Efficiency",
      "Business Strategy & Leadership"
    ],
    date: "March 28th, 2026",
    theme: "People. Culture. Leadership. Growth.",
    coverImage: "/Fliers/Frame 943.png"
  }

  return (
    <section className="section-padding flex flex-col md:flex-row gap-8 md:gap-16 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src={event.coverImage}
              alt={event.eventName}
              className="w-full h-auto  max-h-[400px] rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-2">{event.eventName}</h3>
            <p className=" mb-4">{event.description}</p>
            <h4 className="font-bold mb-2">Core Sessions:</h4>
            <ol className="list-decimal list-inside mb-4">
              {event.coreSessions.map((session, index) => (
                <li key={index}>{session}</li>
              ))}
            </ol>
            <p className="text-sm font-bold">Time: {event.date}</p>
            <p className="text-sm font-bold">Theme: {event.theme}</p>
            <div className="grid-cols-1 sm:grid-cols-2 grid gap-4 mt-4 w-full">
              <a href="https://luma.com/f3fpygbt" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#FDB913] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] w-full">Preregister Now</button>
              </a>
              <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=partnership@coengagex.com&su=Request for Lagos Tech Fest Sponsorship Deck&body=compose email."
                target="_blank" rel="noopener noreferrer">
                <button className="mt-4 text-[#FDB913] bg-black hover:bg-gray-700 hover:text-white px-4 py-2 rounded-lg font-semibold w-full">Request Sponsorsip Desk</button>
              </a>
            </div>
          </div>

        </div>

    </section>
  )
}

export default EventHighlights