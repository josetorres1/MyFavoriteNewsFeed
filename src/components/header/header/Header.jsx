import React from "react"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div>
            <header className="App-header">
                <h1>My favorite Newsfeed</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/about">About</Link>
                        </li> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
