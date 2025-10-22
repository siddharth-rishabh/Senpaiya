import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar_ from "../components/Navbar_";
import axios from "axios";
import Loader from "../components/Loader";

const CreateDrop = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category) return;

    setLoading(true);

    try {
      // Get logged-in user from localStorage
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      const authorId = loggedInUser?.id;

      if (!authorId) {
        alert("You must be logged in to post a Drop.");
        setLoading(false);
        return;
      }

      const response = await axios.post("https://senpaiya.onrender.com/api/drops", {
        title,
        description,
        tags: [category],
        author: authorId, // include author
      });

      if (response.status === 201 || response.status === 200) {
        // Reset form
        setTitle("");
        setDescription("");
        setCategory("");
        alert("Drop posted successfully!");
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Failed to post drop. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar_ />
      {loading && <Loader />}
      <div className="min-h-screen bg-[#0D1B2A] p-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold mb-2">Create Drop</h1>
            <p className="text-slate-400 text-sm">
              Share your knowledge with the community
            </p>
          </div>

          <div className="bg-slate-700/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Title */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Title or Question *
                </label>
                <input
                  type="text"
                  placeholder="What do you want to share or ask?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Description (Optional)
                </label>
                <textarea
                  rows="6"
                  placeholder="Add more details, code snippets, or context..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                ></textarea>
                <p className="text-slate-500 text-xs mt-2">
                  You can use markdown formatting
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600/80 border border-slate-500/50 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="study-tips">Study Tips</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="resource">Resource</option>
                  <option value="discussion">Discussion</option>
                  <option value="project">Project Showcase</option>
                  <option value="career">Career Advice</option>
                  <option value="events">College Events</option>
                  <option value="tech-tips">Technical Tips</option>
                </select>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Post Drop
                </button>
              </div>
            </form>
          </div>

          {/* Tips */}
          <div className="mt-6 bg-slate-700/40 border border-slate-600/30 rounded-lg p-4">
            <h3 className="text-white text-sm font-semibold mb-2">
              Tips for a great Drop:
            </h3>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li>• Be clear and specific in your title</li>
              <li>• Add relevant tags to help others discover your content</li>
              <li>• Include code snippets or examples when applicable</li>
              <li>• Be respectful and constructive in your posts</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDrop;
