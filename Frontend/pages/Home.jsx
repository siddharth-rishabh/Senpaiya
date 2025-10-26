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
      <div className="flex max-w-7xl mx-auto p-6 gap-8">
        {/* Left Side - Feed */}
        <div className="flex-1">
          <Feed />
        </div>

        {/* Right Side - Buzz */}
        <div className=" sticky top-6">
          <Buzz />
        </div>
      </div>
    </div>
  );
}

export default Home;
