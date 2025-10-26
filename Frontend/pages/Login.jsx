import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://senpaiya.onrender.com/api/users/login", {
        email,
        password,

      });
      setMessage("Login successful!");
      console.log("User Data:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log(response.data.token);

      setTimeout(() => {
        navigate("/home");
      }, 800);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center relative overflow-hidden">
      {/* Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0D1B2A]/70 backdrop-blur-md z-50">
          <Loader />
        </div>
      )}
      {/* Geometric Shapes Background */}
      <div className="absolute inset-0 z-0">
        {/* Large Blurred Circles */}
        <div
          className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-indigo-400/15 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-24 h-24 bg-gradient-to-br from-cyan-400/25 to-blue-300/15 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Medium Rectangles */}
        <div
          className="absolute top-40 right-1/4 w-20 h-8 bg-gradient-to-r from-blue-600/10 to-purple-400/15 rounded-lg blur-lg rotate-45 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-16 h-12 bg-gradient-to-r from-slate-400/20 to-blue-500/10 rounded-md blur-lg rotate-12 animate-pulse"
          style={{ animationDelay: "2.3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-16 w-18 h-6 bg-gradient-to-r from-indigo-300/15 to-cyan-400/20 rounded-lg blur-md -rotate-30 animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>

        {/* Small Squares */}
        <div
          className="absolute top-24 left-2/3 w-8 h-8 bg-blue-400/20 rounded-sm blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-6 h-6 bg-white/15 rounded-sm blur-sm -rotate-12 animate-pulse"
          style={{ animationDelay: "2.7s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-10 h-10 bg-purple-400/18 rounded-md blur-md rotate-30 animate-pulse"
          style={{ animationDelay: "1.8s" }}
        ></div>

        {/* Triangular Shapes (using transform) */}
        <div
          className="absolute top-52 left-1/2 w-12 h-12 bg-gradient-to-br from-blue-300/25 to-transparent rounded-full blur-lg"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "1.1s",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-lg blur-xl rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "0.3s",
          }}
        ></div>

        {/* Hexagons */}
        <div
          className="absolute top-80 right-32 w-14 h-14 bg-slate-300/15 blur-md rotate-12 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "2.5s",
          }}
        ></div>
        <div
          className="absolute top-1/4 left-20 w-10 h-10 bg-blue-500/20 blur-sm -rotate-45 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "0.9s",
          }}
        ></div>

        {/* Lines/Bars */}
        <div
          className="absolute top-36 left-3/4 w-20 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-16 w-16 h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm -rotate-30 animate-pulse"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400/35 to-transparent blur-sm rotate-60 animate-pulse"
          style={{ animationDelay: "0.7s" }}
        ></div>

        {/* Diamond Shapes */}
        <div
          className="absolute top-16 right-20 w-8 h-8 bg-blue-300/25 blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "1.9s" }}
        ></div>
        <div
          className="absolute bottom-16 left-2/3 w-6 h-6 bg-slate-400/20 blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 relative text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-5 relative z-10">
            Welcome
            <br />
            Back ...
          </h1>
          <p className="text-slate-300 text-sm sm:text-base relative z-10">
            Continue your journey with your
            <br className="hidden sm:block" />
            Senpais ✨
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center px-4 sm:px-8 lg:px-16 mt-8 lg:mt-0">
          <div className="bg-[#1B263B] backdrop-blur-lg border border-blue-300/70 rounded-3xl p-4 sm:p-7 w-full max-w-md shadow-[inset_0_0_35px_rgba(59,130,246,1)]">
            <h2 className="text-white text-xl sm:text-2xl font-bold text-center mt-3 mb-6">
              Log in
            </h2>

            {message && (
              <div className="mb-4 text-center text-white-400 text-sm">{message}</div>
            )}
            <form onSubmit={handleSubmit} className="grid justify-center">
              <div className="mb-4 w-full max-w-xs sm:w-64">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-3xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-3xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium border border-white rounded-3xl hover:from-indigo-600 hover:to-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 transition-all duration-300 tracking-wide text-sm sm:text-base"
              >
                Log in
              </button>
            </form>

            <div className="text-center mt-5 text-slate-400 text-xs sm:text-sm">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
