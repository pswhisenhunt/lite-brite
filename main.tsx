import * as React from "react"
import { createRoot } from "react-dom/client"

import { Provider } from "react-redux"
import { store } from "./src/app/store"

import App from "./src/app"

import "./src/styles/main.css"

const appContainer = document.getElementById("root")
const root = createRoot(appContainer!)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)