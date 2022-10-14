
import * as React from "react"
import { Link } from "react-router-dom"

const Games = () => {
    return (
        <div className="games-container">
            <h1>Choose a game:</h1>
            <ul className="games-list">
                <li className="game-list-item">
                        <Link to="/lite-brite">Lite Brite</Link>
                </li>
            </ul>
        </div>
    )
}

export default Games;