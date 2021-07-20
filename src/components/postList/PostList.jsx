import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPostsByPage, fetchComments, fetchPosts } from "../../redux/slices";
import PostItem from "../postItem/PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(AllPostsByPage);
  const postsStatus = useSelector((state) => state.posts.status);
  const commentsStatus = useSelector((state) => state.comments.status);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
    if (commentsStatus === "idle") {
      dispatch(fetchComments());
    }
  }, [postsStatus, commentsStatus, dispatch]);

  return (
    <div>
      {postsStatus === "loading" && <h3>Loading latest news...</h3>}
      {postsStatus === "fulfilled" && posts.length > 0 ? (
        <ul>
          {posts.map((e) => (
            <PostItem title={e.title} body={e.body} key={e.id} postId={e.id} />
          ))}
        </ul>
      ) : (
        <div>There are not news for today</div>
      )}
    </div>
  );
};

export default PostList;
