import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar_() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#0D1B2A] w-full mt-0 p-2 sticky top-0 z-10">
      <div className="bg-[#1F2937] text-white rounded-2xl flex flex-col sm:flex-row items-center my-2">
        <div className="w-full sm:w-1/2 flex justify-between sm:justify-start items-center">
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/senpai_logo.png"
              alt="logo"
              className="h-8 sm:h-12 scale-125 w-auto ml-0 sm:ml-3"
            />
          </Link>
          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="sm:hidden mr-3 p-2 rounded-md hover:bg-slate-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex w-full sm:w-1/2 flex-wrap justify-center sm:justify-end items-center mt-2 sm:mt-0">
          <Link to="/network" className="hover:text-blue-500 m-1 sm:m-3 mr-2 sm:mr-8 font-bold text-sm sm:text-base">
            Network
          </Link>

          {/* ✅ Only Senpais can see Drop */}
          {user?.role === "senpai" && (
            <Link
              to="/create"
              className="text-white hover:text-blue-500 m-1 sm:m-3 mr-2 sm:mr-8 font-bold text-sm sm:text-base"
            >
              Drop
            </Link>
          )}

          <Link to="/chats" className="hover:text-blue-500 m-1 sm:m-3 mr-2 sm:mr-8 font-bold text-sm sm:text-base">
            Chat
          </Link>

          {user ? (
            <>
              <Link
                to={`/user/${user.id}`}
                className="hover:text-blue-500 m-1 sm:m-3 mr-1 sm:mr-2 flex items-center"
              >
                <img src="/profile-user.png" alt="profile" className="h-5 sm:h-6" />
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 rounded-md m-1 sm:m-3 mr-2 sm:mr-10 text-xs sm:text-sm transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/" className="hover:text-blue-500 m-1 sm:m-3 mr-2 sm:mr-10 font-bold text-sm sm:text-base">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="sm:hidden w-full mt-4 bg-slate-600 rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/network"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 font-bold text-sm py-2"
              >
                Network
              </Link>

              {/* ✅ Only Senpais can see Drop */}
              {user?.role === "senpai" && (
                <Link
                  to="/create"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-blue-500 font-bold text-sm py-2"
                >
                  Drop
                </Link>
              )}

              <Link
                to="/chats"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500 font-bold text-sm py-2"
              >
                Chat
              </Link>

              {user ? (
                <>
                  <Link
                    to={`/user/${user.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-blue-500 font-bold text-sm py-2 flex items-center"
                  >
                    <img src="/profile-user.png" alt="profile" className="h-5 mr-2" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm transition w-full text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-500 font-bold text-sm py-2"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar_;
