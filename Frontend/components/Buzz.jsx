import React from "react";

function Buzz() {
  return (
    <div className="sticky top-20 ">
      <div className="w-96 bg-[#1F2937] backdrop-blur-sm rounded-2xl shadow-lg ">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-600/50">
          <h2 className="text-white text-xl font-bold">Buzzz</h2>
        </div>

        {/* Notification Items */}
        <div className="px-6 py-4 space-y-6">
          <div className="hover:bg-slate-600/30 transition-colors cursor-pointer -mx-2 px-2 py-2 rounded">
            <p className="text-slate-200 text-sm leading-relaxed">
              A new Kohai (Riya, EEE'26) requested guidance.
            </p>
          </div>

          <div className="w-full h-px bg-slate-600/50"></div>

          <div className="hover:bg-slate-600/30 transition-colors cursor-pointer -mx-2 px-2 py-2 rounded">
            <p className="text-slate-200 text-sm leading-relaxed">
              Your Drop on "Placement prep" is trending in IT Dept.
            </p>
          </div>

          <div className="w-full h-px bg-slate-600/50"></div>

          <div className="hover:bg-slate-600/30 transition-colors cursor-pointer -mx-2 px-2 py-2 rounded">
            <p className="text-slate-200 text-sm leading-relaxed">
              New Whisper: "Can you guide me for off-campus jobs?"
            </p>
          </div>

          <div className="w-full h-px bg-slate-600/50"></div>

          <div className="hover:bg-slate-600/30 transition-colors cursor-pointer -mx-2 px-2 py-2 rounded">
            <p className="text-slate-200 text-sm leading-relaxed">
              3 Kohai saved your Drop on "DSA roadmaps."
            </p>
          </div>

          <div className="w-full h-px bg-slate-600/50"></div>

          <div className="hover:bg-slate-600/30 transition-colors cursor-pointer -mx-2 px-2 py-2 rounded">
            <p className="text-slate-200 text-sm leading-relaxed">
              A verified Kohai just started shadowing you.
            </p>
          </div>
          <div className="w-full h-px bg-slate-600/50"></div>
          <div className="text-center">
        <a href="/Buzz" className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300">
                Show all Buzz
              </a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Buzz;
