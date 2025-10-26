import React from "react";
import Navbar from "../components/Navbar_";
import Buzz from "../components/Buzz";
import Feed from "../components/Feed";

function Home() {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 sm:p-6 gap-4 sm:gap-8">
        {/* Left Side - Feed */}
        <div className="flex-1">
          <Feed />
        </div>

        {/* Right Side - Buzz */}
        <div className="lg:sticky lg:top-6 sm:hidden">
          <Buzz />
        </div>
      </div>
    </div>
  );
}

export default Home;
