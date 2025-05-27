import React from "react";
import "./Home.css";
import SideBar from "../../Component/SideBar/SideBar";
import Feed from "../../Component/Feed/Feed";
import { useState } from "react";

const Home = ({ sideBar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <SideBar
        sideBar={sideBar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sideBar ? "" : "large_container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
