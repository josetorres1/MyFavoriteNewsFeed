import React from "react"
import PostItem from "../../components/postItem/PostItem"

const post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
}

const Home = () => {
    return (
        <section>
            <h2>New posts</h2>
            <div className="postList">
                <ul>
                    {Array(3)
                        .fill(3)
                        .map((e, i) => (
                            <PostItem title={post.title} body={post.body} key={i.toString()} postId={i} />
                        ))}
                </ul>
            </div>
        </section>
    )
}

export default Home
