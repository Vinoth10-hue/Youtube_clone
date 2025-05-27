import React from "react";
import "./SideBar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertiment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blog from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const SideBar = ({ sideBar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sideBar ? "" : "small_sidebar"}`}>
      <div className="shortcut_links">
        <div
          className={`side_links ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side_links ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gameing</p>
        </div>
        <div
          className={`side_links ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobile} alt="" />
          <p>Automobile</p>
        </div>
        <div
          className={`side_links ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side_links ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertiment} alt="" />
          <p>Entertiment</p>
        </div>
        <div
          className={`side_links ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Tecnology</p>
        </div>
        <div
          className={`side_links ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side_links ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blog} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side_links ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribe_list">
        <h3>Subscribed</h3>
        <div className="side_links">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side_links">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side_links">
          <img src={tom} alt="" />
          <p>Justin Bieber </p>
        </div>
        <div className="side_links">
          <img src={megan} alt="" />
          <p>5-Minute Craft</p>
        </div>
        <div className="side_links">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
