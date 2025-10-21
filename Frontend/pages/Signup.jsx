import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", {
      fullname,
      email,
      username,
      password,
      branch,
      role,
    });
    setLoading(true);

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/users/register", {
        fullName: fullname,
        email,
        username,
        password,
        branch,
        role,
      });
      console.log("Signup successful:", response.data);
      alert("Account created successfully!");
      window.location.href = "/";
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Floating Rectangles */}
        <div
          className="absolute top-20 left-16 w-24 h-16 bg-gradient-to-br from-blue-500/15 to-purple-500/10 rounded-lg blur-lg rotate-45 animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-32 h-20 bg-gradient-to-br from-indigo-400/10 to-blue-400/15 rounded-xl blur-xl rotate-12 animate-pulse"
          style={{ animationDelay: "1.5s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-20 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-300/10 rounded-md blur-lg -rotate-30 animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "6s" }}
        ></div>

        {/* Triangular Shapes */}
        <div
          className="absolute top-40 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-600/8 to-purple-400/12 blur-lg rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "0.5s",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-slate-400/15 to-blue-500/8 blur-md rotate-60"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "2.5s",
          }}
        ></div>

        {/* Hexagonal Shapes */}
        <div
          className="absolute top-80 right-32 w-14 h-14 bg-slate-300/10 blur-md rotate-12 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "4s",
            animationDuration: "7s",
          }}
        ></div>
        <div
          className="absolute top-1/4 left-20 w-10 h-10 bg-blue-500/15 blur-sm -rotate-45 animate-pulse"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animationDelay: "1s",
            animationDuration: "5s",
          }}
        ></div>

        {/* Diamond Shapes */}
        <div
          className="absolute top-16 right-20 w-8 h-8 bg-blue-300/20 blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-16 left-2/3 w-6 h-6 bg-slate-400/15 blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "0.8s", animationDuration: "6s" }}
        ></div>

        {/* Floating Lines */}
        <div
          className="absolute top-36 left-3/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent blur-sm rotate-45 animate-pulse"
          style={{ animationDelay: "1.2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-16 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm -rotate-30 animate-pulse"
          style={{ animationDelay: "3.5s", animationDuration: "4s" }}
        ></div>

        {/* Small Circles for Balance */}
        <div
          className="absolute top-60 left-1/3 w-4 h-4 bg-purple-400/15 rounded-full blur-sm animate-pulse"
          style={{ animationDelay: "2.8s", animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-6 h-6 bg-cyan-400/12 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "0.3s", animationDuration: "5s" }}
        ></div>
      </div>

      <div className="flex w-full max-w-6xl items-center relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center px-16 relative">
          <h1 className="text-white text-5xl font-bold leading-tight mb-5 relative z-10">
            Join Our
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Community
            </span>
            ...
          </h1>
          <p className="text-slate-300 text-base relative z-10 mb-8">
            Create your account and start your
            <br />
            journey with{" "}
            <span className="text-blue-300 font-medium">Senpais</span> ✨
          </p>

          {/* Feature highlights */}
          <div className="space-y-3 relative z-10">
            <div className="flex items-center text-slate-400 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span>Connect with like-minded developers</span>
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              <span>Share knowledge and collaborate</span>
            </div>
            <div className="flex items-center text-slate-400 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
              <span>Build your professional network</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center px-16">
          <div className="bg-slate-700/80 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 w-full max-w-md shadow-[inset_0_0_35px_rgba(59,130,246,0.3)]">
            <h2 className="text-white text-2xl font-normal text-center mb-6">
              Sign up
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              <div className="mb-4">
                <select
                  id="role-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                >
                  <option value="">Please choose your role</option>
                  <option value="senpai">Senpai</option>
                  <option value="kohai">Kohai</option>
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-3 focus:ring-blue-500/10 transition-all duration-300 hover:border-slate-400/60"
                />
              </div>

              {/* Terms checkbox */}
              <div className="flex items-start mb-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="terms"
                  className="text-slate-400 text-sm leading-relaxed"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0 transition-all duration-300 tracking-wide"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-5 text-slate-400 text-sm">
              Already have an account?{" "}
              <a
                href="/"
                className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
