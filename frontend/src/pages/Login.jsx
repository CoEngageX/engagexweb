import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const inputStyle =
    "w-full px-4 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none placeholder:text-[12px]";

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#252B37] rounded-xl p-10 min-h-[70vh]">
        <form className="space-y-4">
          <h3 className="text-2xl font-bold text-white">
            {isSignUp ? "Get Started Now" : "Welcome Back"}
          </h3>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className={inputStyle}
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className={inputStyle}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
          )}

          {isSignUp && (
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-1"
              />
              <p>
                I agree to the{" "}
                <span className="text-[#FDB913] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#FDB913] cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSignUp && !agree}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${
                isSignUp && !agree
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FDB913] text-black hover:bg-[#ddcb9d]"
              }`}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg text-white hover:bg-[#FDB913] hover:text-black hover:border-[#FDB913] transition text-sm font-medium">
            <FaGoogle />
            {isSignUp ? "Sign up with Google" : "Sign in with Google"}
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg text-white hover:bg-[#FDB913] hover:text-black hover:border-[#FDB913] transition text-sm font-medium">
            <FaApple />
            {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
          </button>
        </div>

       {/* social media */}
        <p className="text-sm text-gray-400 text-center pt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#FDB913] cursor-pointer font-semibold"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
