import React from "react";
import "./navbar.css";

import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsEnvelope, BsEnvelopeFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Christin App</span>
      <div className="icons">
        <div className="icon">
          <IoMdNotifications />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <BsEnvelopeFill />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <AiFillSetting />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};
