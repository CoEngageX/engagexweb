import React from 'react'

const Services = () => {
  const offerings = [
  {
    title: "Career Opportunities",
    icon: "/Serviceicons/eos-icons_trusted-organization.png"
  },
  {
    title: "Events & Networking",
    icon: "/Serviceicons/material-symbols_event-rounded.png"
  },
  {
    title: "Job Postings",
    icon: "/Serviceicons/streamline-ultimate_job-search-man-bold.png"
  },
  {
    title: "Talent Marketplace",
    icon: "/Serviceicons/fluent_people-community-12-filled.png"
  },
  {
    title: "Mentorship & Career Guidance",
    icon: "/Serviceicons/simple-icons_codementor.png"
  },
  {
    title: "Development Bootcamp",
    icon:"/Serviceicons/simple-icons_hyperskill.png"
  },
  {
    title: "People-First Ecosystem",
    icon: "/Serviceicons/streamline-pixel_entertainment-events-hobbies-reward-winner-talent.png"
  },
  {
    title: "Community & Collaboration Spaces",
    icon: "/Serviceicons/eos-icons_trusted-organization.png"
  }
];
  return (
     <section className="bg-gray-50 py-10px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className=" text-md font-bold">
            CoengageX provides verified job opportunities, career-focused events,
            mentorship, and a trusted space for students, professionals, and
            businesses to connect, grow, and collaborate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-4 grid-cols-2">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center "
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {<img src={Icon} alt={item.title} className=""/>}
                </div>

                <h3 className="text-md font-bold mb-2">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default Services