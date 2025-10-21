import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center z-50 overflow-hidden">
      
      {/* Main loader content */}
      <div className="relative">
        {/* Morphing hexagon container */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Hexagon layers */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="1.5"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-2 animate-spin-reverse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                fill="none" 
                stroke="url(#grad2)" 
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute inset-4 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Center logo */}
          <div className="relative z-10">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
              <img src="senpai_bg.png" alt="loader"/>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full -ml-0.75"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse" style={{animationDelay: '0.5s'}}>
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full -ml-0.75"></div>
          </div>
        </div>

        {/* Animated text below */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-blue-500 rounded-full animate-wave" style={{animationDelay: '0s'}}></div>
              <div className="w-1 h-6 bg-blue-400 rounded-full animate-wave" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-6 bg-purple-500 rounded-full animate-wave" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-6 bg-purple-400 rounded-full animate-wave" style={{animationDelay: '0.3s'}}></div>
              <div className="w-1 h-6 bg-cyan-500 rounded-full animate-wave" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.5);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;