import React from "react"
import style from "./PostItem.module.css"
import { useRouteMatch, Link } from "react-router-dom"
const PostItem = ({ title, body, postId }) => {
    const match = useRouteMatch()
    return (
        <li className={style.postItem}>
            <div>
                <Link to={`${match.url}post/${postId}`}>{title}</Link>
                <div className={style.postDetail}>
                    <img src="https://source.unsplash.com/user/erondu/160x160" alt="test" />
                    <div className={style.postBody}>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

PostItem.propTypes = {}

export default PostItem
