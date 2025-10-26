import { useEffect, useState } from "react";
import axios from "axios";
import Navbar_ from "../components/Navbar_";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Drop from "../components/drop.jsx";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let storedUser;
      try {
        storedUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        console.error("Error parsing stored user:", e);
        setError("Invalid user data in storage. Please log in again.");
        setLoading(false);
        return;
      }
      setLoggedInUser(storedUser);
      if (!storedUser) return;

      try {
        const dropsRes = await axios.get(`https://senpaiya.onrender.com/api/drops/user/${id}`);
        setDrops(dropsRes.data);
        const response = await axios.get(`https://senpaiya.onrender.com/api/users/${id}`);
        if (response.data.success) {
          const profileData = response.data.data;
          setUser(profileData);

          if (profileData.shadowedBy?.includes(storedUser.id)) {
            setIsFollowing(true);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleFollowToggle = async () => {
    if (!loggedInUser) return;
    const endpoint = isFollowing ? "https://senpaiya.onrender.com/api/users/unfollow" : "https://senpaiya.onrender.com/api/users/follow";

    try {
      const response = await axios.post(endpoint, {
        senpaiId: user._id,
        kohaiId: loggedInUser.id,
      });

      if (response.status === 200) {
        setIsFollowing(!isFollowing);
        setUser((prev) => ({
          ...prev,
          kohaiCount: isFollowing
            ? Math.max(0, prev.kohaiCount - 1)
            : prev.kohaiCount + 1,
        }));
      }
    } catch (error) {
      console.error("Follow/unfollow error:", error);
    }
  };

  const handleLike = (dropId, newLikes) => {
    setDrops((prevDrops) =>
      prevDrops.map((drop) =>
        drop._id === dropId ? { ...drop, likes: newLikes } : drop
      )
    );
  };

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
        <p className="text-white text-lg">{error}</p>
      </div>
    );
  if (!user)
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center">
        <p className="text-white text-lg">User not found.</p>
      </div>
    );

  const isOwnProfile = loggedInUser?.id === user._id;

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      <Navbar_ />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 sm:mb-12">
          <div className="relative mb-4 sm:mb-0 sm:mr-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-700 border-4 border-slate-600 overflow-hidden">
              <img
                src="/senpai_bg.png"
                alt={user.fullName}
                className="w-full h-full object-cover scale-100"
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {user.fullName}
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mb-4">
              {user.kohaiCount ?? 0} kohai | {drops.length ?? 0} drops
            </p>

            {!isOwnProfile &&
              loggedInUser?.role === "kohai" &&
              user.role === "senpai" && (
                <button
                  onClick={handleFollowToggle}
                  className={`w-full sm:w-60 py-3 px-6 font-semibold rounded-full transition-all duration-300 text-sm sm:text-base ${
                    isFollowing
                      ? "bg-gray-600 text-gray-300 hover:opacity-80"
                      : "bg-[#4800C4] text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  }`}
                >
                  {isFollowing ? "Unshadow" : "Shadow+"}
                </button>
              )}
          </div>
        </div>

        <div className="w-full h-px bg-slate-700 mb-12"></div>

        <div className="grid grid-cols-1 gap-2">
          {drops.length === 0 ? (
            <p className="text-slate-500 text-center">
              No drops yet
            </p>
          ) : (
            drops.map((drop) => (
              <Drop key={drop._id} drop={{ ...drop, author: user }} onLike={handleLike} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
