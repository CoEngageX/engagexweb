import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <div className=" p-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto pb-20">
        <div className="max-w-sm bg-[#252B37] text-white rounded-lg p-8 space-y-20 pb-2">
  
            {/* Title */}
            <div>
                <h3 className="text-2xl font-bold mb-1">Contact Information</h3>
                <p className="text-sm text-gray-400">
                Say something to start a live chat!
                </p>
            </div>


            {/* Contact Details */}
            <div className="space-y-5 text-sm md:text-base">

                {/* Phone */}
                <div className="flex items-center gap-4">
                <div className=" flex items-center justify-center">
                    <FiPhone className="text-lg" />
                </div>
                <span className="text-sm">+1012 3456 789</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                <div className="flex items-center justify-center">
                    <FiMail className="text-lg" />
                </div>
                <span className="text-sm">demo@gmail.com</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                <div className="flex items-center justify-center mt-1">
                    <FiMapPin className="text-lg" />
                </div>
                <span className="text-sm">
                    132 Dartmouth Street 
                    Boston, Massachusetts 02156 <br />
                    United States
                </span>
                </div>

            </div>
            <div className="flex flex-wrap gap-2">
                <a href="#" aria-label="LinkedIn" className="w-9 h- flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-colors">
                    <FaLinkedinIn className="text-white text-sm" />
                </a>
                <a href="#" aria-label="X" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors">
                    <FaTwitter className="text-white text-sm" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E4405F] transition-colors">
                    <FaInstagram className="text-white text-sm" />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#1877F2] transition-colors">
                    <FaFacebookF className="text-white text-sm" />
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#FF0000] transition-colors">
                    <FaYoutube className="text-white text-sm" />
                </a>
                <a href="#" aria-label="TikTok" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors">
                    <FaTiktok className="text-white text-sm" />
                </a>
            </div>
        </div>


          <form className="space-y-4 my-auto">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-sm w-full">
                        <label className="text-[10px] text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full border-b border-gray-500 focus:outline-none focus:none bg-transparent"
                        />
                    </div>

                     <div className="text-sm w-full">
                        <label className="text-[10px] text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full border-b border-gray-500 focus:outline-none focus:none bg-transparent"
                        />
                    </div>

                    <div className="text-sm w-full">
                        <label className="text-[10px] text-gray-600">
                           Email
                        </label>
                        <input
                            type="email"
                            className="w-full border-b border-gray-500 focus:outline-none focus:none bg-transparent"
                        />
                    </div>
                    <div className="text-sm w-full">
                        <label className="text-[10px] text-gray-600">
                           Phone Number
                        </label>
                        <input
                            type="tel"
                            className="w-full border-b border-gray-500 focus:outline-none focus:none bg-transparent"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="text-sm w-full">
                    <label className="text-[10px] text-gray-600">
                    Message
                    </label>
                    <textarea
                    rows="1"
                    placeholder="Write your message..."
                    className="w-full border-b border-gray-500 focus:outline-none focus:none bg-transparent placeholder:text-smbn "
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-fit bg-[#FDB913] text-white py-1 rounded-lg text-sm hover:bg-[#ddcb9d] transition px-3 ml-auto mt-5 justify-end flex"
                >
                    Send Message
                </button>
         </form>

    </div>
  )
}

export default Contact