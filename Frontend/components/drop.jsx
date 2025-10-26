import React from "react";
import axios from "axios";

const Drop = ({ drop, onLike }) => {
  const handleLike = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `https://senpaiya.onrender.com/api/drops/${drop._id}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      onLike(drop._id, res.data.likes); // update parent state
    } catch (err) {
      console.error("Error liking drop:", err);
    }
  };

  return (
    <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-600/50 shadow-lg w-full mb-4 sm:mb-6">
      {/* User Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-600 rounded-full mr-2 sm:mr-3 overflow-hidden">
            <img
              src="/senpai_bg.png"
              alt={drop.author?.fullName || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base">
              {drop.author?.fullName || "Anonymous"}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">ECE '26 | CGC Landran</p>
          </div>
        </div>
      </div>

      {/* Category */}
      {drop.tags && drop.tags.length > 0 && (
        <span className="px-2 sm:px-3 py-1 bg-slate-600/50 text-slate-300 text-xs rounded-full font-medium">
          {drop.tags[0]}
        </span>
      )}

      {/* Title */}
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 leading-relaxed">
        {drop.title}
      </h2>

      {/* Description */}
      {drop.description && (
        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
          {drop.description}
        </p>
      )}

      {/* Like / Timestamp */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors group"
        >
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-xs sm:text-sm font-medium">{drop.likes}</span>
        </button>

        <span className="text-slate-500 text-xs">
          {new Date(drop.createdAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Drop;