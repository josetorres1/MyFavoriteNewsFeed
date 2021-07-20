import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addComment,
  getPostByID,
  selectCommentsByPost,
} from "../../redux/slices";
import styles from "./Post.module.css";
const Post = () => {
  const { postId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [sendRequestStatus, setSendRequestStatus] = useState("idle");

  const canSave =
    [name, email, body].every(Boolean) && sendRequestStatus === "idle";

  const dispatch = useDispatch();
  const post = useSelector((state) => getPostByID(state, postId));
  const commentsByPost = useSelector((state) =>
    selectCommentsByPost(state, { postId })
  );

  const sendComment = async () => {
    // evt.preventDefault()
    if (canSave) {
      try {
        setSendRequestStatus("loading");
        await dispatch(addComment({ name, email, body, postId }));
        setName("");
        setEmail("");
        setBody("");
      } catch (error) {
        setSendRequestStatus("idle");
      }
    }
  };
  const onChangeText = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "body":
        setBody(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <section style={{ maxWidth: "1024px" }}>
      <article>
        <h2>{post.title}</h2>
        <div className="">
          <p>{post.body}</p>
        </div>
      </article>
      <div className="">
        <h2>Comments</h2>
        <div className={styles.addComment}>
          <h3>Add comment</h3>
          <form action="">
            <input
              onChange={onChangeText}
              value={name}
              type="text"
              name="name"
              placeholder="name"
              id=""
            />
            <input
              onChange={onChangeText}
              value={email}
              type="email"
              name="email"
              placeholder="email"
              id=""
            />
            <textarea
              onChange={onChangeText}
              value={body}
              type="text"
              name="body"
              placeholder="body"
              id=""
            />
            <button disabled={!canSave} type="submit" onClick={sendComment}>
              Send
            </button>
          </form>
        </div>
        {commentsByPost.length ? (
          commentsByPost.map((comment) => (
            <div key={comment.id.toString()} className={styles.comment}>
              <span>{`${comment.name.toLocaleUpperCase()} (${
                comment.email
              })`}</span>
              <blockquote>{comment.body}</blockquote>
            </div>
          ))
        ) : (
          <div className="noComments">
            There are not comments for this post.{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default Post;
