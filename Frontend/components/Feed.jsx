import React, { useEffect, useState } from "react";
import axios from "axios";
import Drop from "./Drop";
import Loader from "./Loader";

function Feed() {
  const [drops, setDrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/drops");
        setDrops(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDrops();
  }, []);

  const handleLike = (id, updatedLikes) => {
    setDrops(prev =>
      prev.map(drop =>
        drop._id === id ? { ...drop, likes: updatedLikes } : drop
      )
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      {drops.length === 0 ? (
        <p className="text-gray-400 text-center">No posts yet</p>
      ) : (
        drops.map(drop => (
          <Drop key={drop._id} drop={drop} onLike={handleLike} />
        ))
      )}
    </div>
  );
}

export default Feed;
