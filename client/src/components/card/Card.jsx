import React, { useState } from "react";
import "./card.css";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail, BiInfoCircle } from "react-icons/bi";
import { PiShareFatDuotone } from "react-icons/pi";

export const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket?.emit("sendNotification", {
      senderName: user,
      receivingName: post.username,
      type: type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post?.userImg} alt="" className="userImg" />
        <span>{post?.fullName}</span>
      </div>
      <img src={post?.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <AiFillHeart className="cardIcon like" />
        ) : (
          <AiOutlineHeart
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <BiCommentDetail
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <PiShareFatDuotone
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <BiInfoCircle className="cardIcon infoIcon" />
      </div>
    </div>
  );
};
