import React from "react"
import "./App.css"
import PostItem from "./components/postItem/PostItem"

const post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My favorite Newsfeed</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h2>New posts</h2>
                    <div className="postList">
                        <ul>
                            {Array(3)
                                .fill(3)
                                .map((e, i) => (
                                    <PostItem title={post.title} body={post.body} key={i.toString()} />
                                ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
