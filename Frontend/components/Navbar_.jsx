import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar_() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) {
      setUserId(storedUser.id);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-[#0D1B2A] w-full mt-0 p-2 sticky top-0 z-10">
      <div className="bg-[#1F2937] text-white rounded-2xl flex items-center my-2">
        <div className="w-1/2">
          <Link to="/home">
            <img
              src="/senpai_logo.png"
              alt="logo"
              className="h-12 scale-125 w-auto ml-3"
            />
          </Link>
        </div>

        <div className="w-1/2 flex justify-end items-center">
          <Link to="/network" className="hover:text-blue-500 m-3 mr-8 font-bold">
            Network
          </Link>
          <Link to="/create" className="hover:text-blue-500 m-3 mr-8 font-bold">
            Drop
          </Link>
          <Link to="/chats" className="hover:text-blue-500 m-3 mr-8 font-bold">
            Chat
          </Link>

          {userId && (
            <>
              <Link
                to={`/user/${userId}`}
                className="hover:text-blue-500 m-3 mr-2 flex items-center"
              >
                <img src="/profile-user.png" alt="profile" className="h-6" />
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md m-3 mr-10 text-sm transition"
              >
                Logout
              </button>
            </>
          )}

          {!userId && (
            <Link to="/" className="hover:text-blue-500 m-3 mr-10 font-bold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar_;
