import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputStyle =
    "w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none placeholder:text-[12px]";

  // Validation
  const isSignInValid = email && password;

  const isSignUpValid =
    fullName &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    agree;

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && !isSignUpValid) return;
    if (!isSignUp && !isSignInValid) return;

    console.log("Form submitted ✅", {
      fullName,
      email,
      password,
    });
  };

  return (
    <div className="flex items-center justify-center p-4 bg-[#252B37] min-h-screen">
      <div className="w-full max-w-lg bg-[#1F2430] rounded-xl p-10 shadow-lg">

        <form className="space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-white">
            {isSignUp ? "Get Started Now" : "Welcome Back"}
          </h3>

          {/* Full Name */}
          {isSignUp && (
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputStyle}
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password */}
          {isSignUp && (
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
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

              {/* Password error */}
              {password &&
                confirmPassword &&
                password !== confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    Passwords do not match
                  </p>
                )}
            </div>
          )}

          {/* Agreement */}
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
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-[#FDB913] cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={
                isSignUp ? !isSignUpValid : !isSignInValid
              }
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition ${
                (isSignUp && !isSignUpValid) ||
                (!isSignUp && !isSignInValid)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FDB913] text-black hover:bg-[#ddcb9d]"
              }`}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        {/* Social Login */}
        <div className="mt-8 flex flex-col md:flex-row gap-3 mx-auto justify-center items-center ">
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg text-white hover:bg-[#FDB913] hover:text-black transition text-sm">
            <FaGoogle />
            {isSignUp ? "Sign up with Google" : "Sign in with Google"}
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 rounded-lg text-white hover:bg-[#FDB913] hover:text-black transition text-sm">
            <FaApple />
            {isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
          </button>
        </div>

        {/* Switch Mode */}
        <p className="text-sm text-gray-400 text-center pt-6">
          {isSignUp
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
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
