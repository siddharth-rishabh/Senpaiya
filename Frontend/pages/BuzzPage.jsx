import React from 'react'
import Navbar from '../components/Navbar_'

function BuzzPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            
              <h1 className="text-white text-3xl font-bold">Buzzz</h1>
            

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all text-sm">
                Mark all as read
              </button>
              <button className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all text-sm">
                Settings
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 mb-8 bg-slate-700/30 p-1 rounded-xl overflow-x-auto">
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all bg-slate-600 text-white shadow-sm"
            >
              All
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-500">
                10
              </span>
            </button>

            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Guidance
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-600/50">
                2
              </span>
            </button>

            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Trending
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-600/50">
                2
              </span>
            </button>

            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Whispers
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-600/50">
                2
              </span>
            </button>

            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Saves
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-600/50">
                2
              </span>
            </button>

            <button
              className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Followers
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-slate-600/50">
                2
              </span>
            </button>
          </div>
 <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1B2A] text-white px-2">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-center text-white/70 max-w-md mb-8">
        We are working hard to bring you this feature. Stay tuned for updates!
      </p>

      {/* Notify Me Button */}
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg">
        Notify Me
      </button>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
    </div>
         
          {/* Decorative Circles */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
        </div>

      </div>
    </div>
  )
}

export default BuzzPage