import React from "react";

const Chats = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1B2A] text-white px-4 sm:px-2">
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-center">
        Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-center text-white/70 max-w-md mb-8 text-sm sm:text-base">
        We are working hard to bring you this feature. Stay tuned for updates!
      </p>

      {/* Notify Me Button */}
      <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base">
        Notify Me
      </button>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
    </div>
  );
};

export default Chats;
