import React, { useEffect, useState } from "react";
import Navbar_ from "../components/Navbar_";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Network = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setCurrentUser(storedUser);

        const response = await axios.get("/api/users", {
          headers: { Authorization: `Bearer ${storedUser.token}` },
        });

        if (response.data.success) {
          // filter out logged-in user
          const filteredUsers = response.data.data.filter(
            (user) => user._id !== storedUser.id
          );
          setUsers(filteredUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-white p-8"><Loader/></div>;

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar_ />
      <div className="min-h-screen bg-[#0D1B2A] p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex sticky p-4 top-12 z-10 bg-[#0D1B2A]">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2">Network</h1>
              <p className="text-slate-400 text-sm">
                Discover and connect with Senpais
              </p>
            </div>
            <div className="absolute right-32">
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-96 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-slate-700/60 rounded-2xl p-6 border border-slate-600/50 hover:border-slate-500/50 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-600 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/senpai_bg.png"
                      alt={user.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1">
                    {user.fullName}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">
                    {user.branch || "Unknown"} | {user.college || "CGC"}
                  </p>

                  <div className="flex space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">
                        {user.kohaiCount || 0}
                      </div>
                      <div className="text-slate-400 text-xs">Kohai</div>
                    </div>
                    <div className="w-px bg-slate-600"></div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm">
                        {user.drops || 0}
                      </div>
                      <div className="text-slate-400 text-xs">Drops</div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <Link
                    to={`/user/${user._id}`}
                    className="w-full py-2 font-medium rounded-lg text-center transition-all bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:from-indigo-600 hover:to-blue-600"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
