import React from "react"
import ReactDOM from "react-dom"
// import "./index.css"
import App from "./App"
import { store } from "./app/store"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"
import injectFonts from "typography-inject-fonts"

const typography = new Typography(elkGlenTheme)
typography.injectStyles()
injectFonts(typography)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
