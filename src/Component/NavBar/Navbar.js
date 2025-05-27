import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSideBar }) => {
  return (
    <nav className="flex_div">
      <div className="nav_left flex_div">
        <img
          src={menu_icon}
          alt=""
          onClick={() => setSideBar((prev) => (prev === false ? true : false))}
          className="menu_icon"
        />
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="nav_middle flex_div">
        <div className="search_box">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="nav_right flex_div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className="user_icon" />
      </div>
    </nav>
  );
};

export default Navbar;
