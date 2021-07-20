import React from "react";
import PageControl from "../../components/pageControl/PageControl";
import PostList from "../../components/postList/PostList";

const Home = () => {
  return (
    <section style={{ maxWidth: "1024px" }}>
      <h2>New posts</h2>
      <PageControl />
      <PostList />
      <PageControl />
    </section>
  );
};

export default Home;
