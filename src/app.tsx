import * as React from "react"

import ColorPanel from "./features/liteBrite/colors/components/colorPanel"
import BoardContainer from "./features/liteBrite/board"

const LiteBriteApp = () => {
    return (
        <div className="game-container_lite-brite">
            <ColorPanel/>
            <BoardContainer/>
        </div>
    )
}

export default LiteBriteApp