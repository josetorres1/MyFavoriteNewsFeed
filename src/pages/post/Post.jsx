import React from "react"
import { useParams } from "react-router-dom"
const Post = () => {
    const { postId } = useParams()
    console.log(postId)
    const post = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    }
    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <h2>{postId}</h2>
                <div className="">
                    <p>{post.body}</p>
                </div>
            </article>
            <div className="">
                <h2>Comments</h2>
            </div>
        </section>
    )
}

export default Post
