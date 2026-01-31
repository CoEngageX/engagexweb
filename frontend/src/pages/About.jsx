import useScrollToHash from "../hooks/useLocation";

import Flier from "/Fliers/Frame 851.png";
const aboutus = [
  {
    id: 1,
    slug: "who-we-are",
    topic: "Who We Are",
    image: "/Serviceicons/Frame 940.png",
    content:
      "CoengageX is a people-first growth platform that connects professionals, students, and businesses through  events, trusted opportunities, and career-focused experiences. We exist to empower individuals, strengthen organizations, and build communities where people and businesses grow together.",
  },
  {
    id: 2,
    slug: "why-us",
    topic: "Why Us",
    image: "/Serviceicons/Frame 941.png",
    content:
      "CoengageX stands out because we put people first. We create trusted, high-impact connections through verified opportunities, curated events, and a supportive community that prioritizes real growth, meaningful collaboration, and long-term value for both individuals and businesses.",
  },
  {
    id: 3,
    slug: "mission",
    topic: "Our Mission",
    image: "/Serviceicons/Frame 938.png",
    content:
      "Our MissionOur mission is to empower professionals, students, and businesses by creating trusted opportunities, meaningful connections, and growth-driven experiences that support people-first success and long-term impact.",
  },
  {
    id: 4,
    slug: "vision",
    topic: "Our Vision",
    image: "/Serviceicons/Frame 937.png",
    content:
      "Our vision is to build a leading people-first platform that shapes the future of work by connecting talent, opportunity, and innovation to drive sustainable growth for individuals and organizations.",
  },
];

const About = () => {
  useScrollToHash();

  return (
    <div className=" mx-auto py-10 space-y-20" id="aboutus">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
        About Us
      </h1>

      {/* Stories */}
      <div className="space-y-28 max-w-7xl mx-auto px-4">
        {aboutus.map((story, index) => (
          <div
            key={story.id}
            id={story.slug}
            className={`flex flex-col sm:flex-row items-center gap-16 mt-24
        ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}
        ${index > 3 ? "hidden sm:flex" : ""}
      `}
          >
            {/* Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={story.image}
                alt={story.topic}
                className="w-[70%] h-64 rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 max-w-2xl text-center sm:text-left">
              <h3 className="text-sm md:text-base text-[#FDB913] tracking-widest mb-2">
                {story.topic}
              </h3>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                {story.topic}
              </h2>

              <p className="text-base leading-relaxed text-gray-700">
                {story.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-6 space-y-7">
        <img
          src={Flier}
          alt="Event Flier"
          className="w-full max-h-[400px] h-auto"
        />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Who We Serve */}
            <div className=" p-2">
              <span className="text-sm text-[#FDB913] tracking-widest">
                Who We Serve
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                Communities We Empower
              </h3>

              <p className="text-sm md:text-base xl:text-lg leading-relaxed text-gray-600">
                We serve students and early-career professionals seeking growth
                and opportunities, experienced professionals and leaders looking
                to connect and advance, and businesses and startups aiming to
                discover trusted talent and build people-centered teams.
              </p>
            </div>

            {/* What We Do */}
            <div className="p-2">
              <span className="text-sm text-[#FDB913] tracking-widest">
                What We Do
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
                How We Create Impact
              </h3>

              <p className="text-sm md:text-base xl:text-lg leading-relaxed text-gray-600">
                We connect professionals, students, and businesses through
                curated events, verified job opportunities, mentorship, and
                career-focused experiences that drive learning, collaboration,
                and people-centered growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/Fliers/Frame 900.png"
          alt="Event Flier"
          className="w-full h-auto max-h-[400px]"
        />
        <div className="max-w-xl text-center mx-auto py-6 ">
          <h3 className="text-sm text-[#FDB913] tracking-widest">Join Us</h3>
          <h3 className="text-2xl font-semibold mb-3">
            Follow Us On Our Journey
          </h3>

          <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-relaxed">
            Join the CoengageX community to connect, learn, and grow. Attend our
            events, explore trusted opportunities, or partner with us to build
            meaningful careers and people-first businesses.
          </p>
          <div>
            <button className="mt-4 bg-[#FDB913] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#ddcb9d] w-[100%] md:w-[50%]">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
