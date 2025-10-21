import React from 'react'
import Navbar from '../components/Navbar_'

function BuzzPage() {
  return (
    <div>
      <Navbar/>
        <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button className="mr-4 p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-white text-3xl font-bold">Buzzz</h1>
          
          </div>
          
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

        {/* Notifications List */}
        <div className="space-y-3">
          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/60 border-blue-500/30 hover:border-blue-500/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-blue-600/20">
                  🎓
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-100">
                    A new Kohai (Riya, EEE'26) requested guidance.
                  </p>
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                </div>
                <p className="text-xs text-slate-400">2 minutes ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/60 border-blue-500/30 hover:border-blue-500/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-blue-600/20">
                  📈
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-100">
                    Your Drop on "Placement prep" is trending in IT Dept.
                  </p>
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                </div>
                <p className="text-xs text-slate-400">15 minutes ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/60 border-blue-500/30 hover:border-blue-500/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-blue-600/20">
                  💬
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-100">
                    New Whisper: "Can you guide me for off-campus jobs?"
                  </p>
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                </div>
                <p className="text-xs text-slate-400">1 hour ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/40 border-slate-600/30 hover:border-slate-600/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-600/50">
                  🔖
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-200">
                    3 Kohai saved your Drop on "DSA roadmaps."
                  </p>
                </div>
                <p className="text-xs text-slate-400">2 hours ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/40 border-slate-600/30 hover:border-slate-600/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-600/50">
                  👥
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-200">
                    A verified Kohai just started shadowing you.
                  </p>
                </div>
                <p className="text-xs text-slate-400">3 hours ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/40 border-slate-600/30 hover:border-slate-600/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-600/50">
                  🎓
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-200">
                    Kohai (Amit, CSE'25) thanked you for your guidance on "React basics".
                  </p>
                </div>
                <p className="text-xs text-slate-400">5 hours ago</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border cursor-pointer transition-all hover:bg-slate-700/40 bg-slate-700/40 border-slate-600/30 hover:border-slate-600/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-600/50">
                  📈
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm leading-relaxed text-slate-200">
                    Your Drop on "System Design" reached 100 views!
                  </p>
                </div>
                <p className="text-xs text-slate-400">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all">
            Load More Notifications
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BuzzPage