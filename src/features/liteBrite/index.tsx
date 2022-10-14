import * as React from "react"

import ColorPanel from "./colors/components/colorPanel"
import Board from "./board"

const LiteBrite = () => {
    return (
        <div className="game-container_lite-brite">
            <ColorPanel/>
            <Board/>
        </div>
    )
}

export default LiteBrite