import React from "react";
import style from "./PostItem.module.css";
import { useRouteMatch, Link } from "react-router-dom";
const PostItem = ({ title, body, postId }) => {
  const match = useRouteMatch();
  return (
    <li className={style.postItem}>
      <Link to={`${match.url}post/${postId}`}>
        <div>
          <h2>{title}</h2>
          <div className={style.postDetail}>
            <img
              src="https://source.unsplash.com/user/erondu/1920x1080"
              alt="test"
            />
            <div className={style.postBody}>
              <p>{body}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

PostItem.propTypes = {};

export default PostItem;
