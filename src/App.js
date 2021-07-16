import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/header/header/Header"
import Home from "./pages/home/Home"
import Post from "./pages/post/Post"

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <Post />
                        </Route>
                        <Route path="/post/:postId">
                            <Post />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App
