  import useScrollToHash from "../hooks/useLocation";
import Button from "../components/common/Button";
import { FaLinkedinIn} from "react-icons/fa";
function Sponsors() {
  useScrollToHash();

  const offerings = [
    {
      title: "Strong Brand Visibility",
      icon: "/Serviceicons/branding 1.png",
    },
    {
      title: "Trusted & Curated Platform",
      icon: "/Serviceicons/community 1.png",
    },
    {
      title: "Lead Generation & Partnerships",
      icon: "/Serviceicons/corporate 1.png",
    },
    {
      title: "People-First Brand Alignment",
      icon: "/Serviceicons/light-bulb 1.png",
    },
  ];
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-24"
        id="sponsorsus"
        style={{
          backgroundImage: "url('/Fliers/Frame 878.png')", // change to your image path
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container  px-4 ">
          <h2 className="text-2xl  font-bold mb-3">CoEngageX</h2>
          <h1 className="mb-8 text-4xl lg:text-5xl font-bold text-[#FDB913] leading-tight lg:w-[60%] ">
            Become a Proud Sponsors of This Experience
          </h1>
          <div className="flex  space-x-0 flex-col sm:flex-row md:space-x-4 space-y-0 w-fit gap-5 md:gap-2">
            <a href="mailto:Partnership@coengagex.com">
              <Button className="bg-[#FDB913] hover:bg-[#ddcb9d] text-sm text-black">
                REQUEST SPONSORSHIP DECK
              </Button>
            </a>
            <a href="mailto:Partnership@coengagex.com">
              <Button className="text-[#FDB913] bg-black text-sm hover:bg-gray-800">
                REQUEST EXHIBITION DECK
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pb-5">
        <h1 className="text-3xl font-bold text-center w-[100%] md:w-[50%] mx-auto py-8">
          Why you should sponsor CoEngageX?
        </h1>
        <div className="grid gap-8 sm:grid-cols-4 grid-cols-2">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center "
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {<img src={Icon} alt={item.title} className="" />}
                </div>

                <h3 className="text-md font-bold mb-2">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{
          backgroundImage: "url('/Fliers/Frame 900.png')", // change to your image path
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl font-bold leading-tight">
            Join Us in Shaping the Future Of Personal & Career Development
          </h1>

          <a href="mailto:Partnership@coengagex.com">
            <Button className="bg-[#FDB913] hover:bg-[#ddcb9d] text-sm text-black">
              REQUEST SPONSORSHIP DECK
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-white p-10 px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
          {/* IMAGE SIDE */}
          <div className="order-1 md:order-2">
            <div className="rounded-xl">
              <img
                src="/Serviceicons/Frame 936.png"
                alt="CoengageX Event"
                className="w-full h-auto max-h-[700px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div
            className="space-y-5 order-2 md:order-1 scroll-mt-28"
            id="founder"
          >
            <div className="space-y-2">
              <p className="text-sm font-bold tracking-widest text-[#FDB913]">
                LEARN MORE ABOUT
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">CoengageX</h2>

              <p className="text-gray-600 leading-relaxed text-md">
                CoEngageX is a people-first platform that connects
                professionals, students, and businesses through curated events
                and trusted career opportunities, fostering growth,
                collaboration, and meaningful connections.
              </p>
            </div>

            <hr className="border-gray-400" />

            <div className="space-y-2">
              <p className="text-sm font-bold tracking-widest text-[#FDB913]">
                MEET OUR FOUNDERS
              </p>

              <p className="text-gray-600 leading-relaxed text-md">
                Driven by a passion for people, growth, and meaningful
                connections, our founder created CoEngageX to bridge talent and
                opportunity through a people-first approach.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-4 w-64 text-center space-y-3">

                  <img
                    src="/Serviceicons/photo_2026-02-03_09-57-22.jpg"
                    alt="Team Member"
                    className="w-full h-48  rounded-lg"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">Royhan Ekemode</h4>
                    <p className="text-sm text-gray-500">Project Lead</p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/royhan-ekemode-b6a76a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition"
                  >
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                </div>


                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-4 w-64 text-center space-y-3">

                  <img
                    src="/Serviceicons/photo_2026-02-12_02-32-23.jpg"
                    alt="Team Member"
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <div>
                    <h4 className="font-semibold text-lg">Oluwatofunmi Ayo</h4>
                    <p className="text-sm text-gray-500">Project Manager</p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/oluwatofunmi-ayo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition"
                  >
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                </div>

              </div>
          </div>
        </div>
      </div>
      <div className="bg-white pb-10">
        <div className="mx-auto px-4 justify-center w-[90%] sm:w-[60%] space-y-6">
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            Join Us for <br />
            <span className="text-[#FDB913]">an Unforgettable</span> <br />
            Event
            <a
              href="https://luma.com/f3fpygbt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex ml-10 bg-[#FDB913] text-black px-3 py-1 text-sm rounded-lg font-semibold hover:bg-[#ddcb9d] transition">
                Preregister Now
              </button>
            </a>
          </p>
        </div>
        <div className="mx-auto flex justify-center items-center pt-10">
          <img
            src="/Serviceicons/Frame 932.png"
            alt="Event highlight"
            className="w-30 h-24 object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
