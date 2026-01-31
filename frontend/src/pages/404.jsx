import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#252B37] px-4">
      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6 text-[#FDB913] text-7xl">
          <FaExclamationTriangle />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-200 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-[#FDB913] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#ddcb9d] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
