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

        No Buzzes to show

          
          <br></br>
          <br></br>
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
