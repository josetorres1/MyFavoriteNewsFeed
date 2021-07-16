import React from "react"
import style from "./PostItem.module.css"

const PostItem = ({ title, body }) => {
    return (
        <li className={style.postItem}>
            <div>
                <h3>{title}</h3>
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
