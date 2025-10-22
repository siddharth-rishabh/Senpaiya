import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Drops from "../pages/Drops";
import Ping from "../pages/Ping";
import User from "../pages/User";
import Chats from "../pages/chats";
import BuzzPage from "../pages/BuzzPage";
import Network from "../pages/Network";
import CreateDrop from "../pages/CreateDrop";

import "./App.css";
import Loader from "../components/Loader";
function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/drop" element={<Drops/>} />
        <Route path="/ping" element={<Ping/>} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="/chats" element={<Chats/>} />
        <Route path="/buzz" element={<BuzzPage/>} />
        <Route path="/network" element={<Network/>} />
        <Route path="/create" element={<CreateDrop/>} />
        <Route path="/loader" element={<Loader/>} />
      </Routes>
    </div>
  );
}

export default App;
