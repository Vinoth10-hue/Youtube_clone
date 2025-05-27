import { Route, Routes, } from "react-router-dom";
import Navbar from "./Component/NavBar/Navbar";
import Home from "../src/Pages/Home/Home";
import Video from "../src/Pages/Video/Video";
import { useState } from "react";
function App() {
  const [sideBar, setSideBar] = useState(true);

  return (
    <div>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
