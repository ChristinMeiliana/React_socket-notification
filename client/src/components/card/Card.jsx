import React, { useState } from "react";
import "./card.css";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillSetting,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BiCommentDetail,
  BiSolidCommentDetail,
  BiInfoCircle,
} from "react-icons/bi";
import { PiShareFatDuotone } from "react-icons/pi";

export const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(!liked);
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
          <AiFillHeart className="cardIcon like" onClick={handleNotification} />
        ) : (
          <AiOutlineHeart className="cardIcon" onClick={handleNotification} />
        )}
        <BiCommentDetail className="cardIcon" />
        <PiShareFatDuotone className="cardIcon" />
        <BiInfoCircle className="cardIcon infoIcon" />
      </div>
    </div>
  );
};
