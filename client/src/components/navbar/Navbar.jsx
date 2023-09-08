import React, { useEffect, useState } from "react";
import "./navbar.css";

import { IoMdNotifications } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";

export const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!socket.hasListeners("getNotification")) {
      socket.on("getNotification", (data) => {
        setNotifications((prev) => [...prev, data]);
      });
    }
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }

    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Christin App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <IoMdNotifications />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <BsEnvelopeFill />
          {/* <div className="counter">2</div> */}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <AiFillSetting />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};
