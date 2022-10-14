import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Games from "./features/games"
import LiteBrite from "./features/liteBrite"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Games/>}></Route>
                <Route path="/lite-brite" element={<LiteBrite/>}></Route>
            </Routes>
        </Router>
    )
}

export default App