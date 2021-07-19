import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPostByID, selectCommentsByPost } from "../../redux/slices"
import styles from "./Post.module.css"
const Post = () => {
    const { postId } = useParams()

    const post = useSelector((state) => getPostByID(state, postId))
    const commentsByPost = useSelector((state) => selectCommentsByPost(state, { postId }))
    console.log(commentsByPost)

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <div className="">
                    <p>{post.body}</p>
                </div>
            </article>
            <div className="">
                <h2>Comments</h2>
                {commentsByPost.length ? (
                    commentsByPost.map((comment) => (
                        <div key={comment.id.toString()} className={styles.comment}>
                            <span>{`${comment.name.toLocaleUpperCase()} (${comment.email})`}</span>
                            <blockquote>{comment.body}</blockquote>
                        </div>
                    ))
                ) : (
                    <div className="noComments">There are not comments for this post. </div>
                )}
            </div>
        </section>
    )
}

export default Post
