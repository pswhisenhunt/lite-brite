import * as React from "react"
import { useAppSelector, useAppDispatch } from "../../../../app/hooks"
import { Cell } from "../../../../app/types"
import { setCellColor, setIsDragging } from "../boardSlice"

const LiteBoard = () => {
    const isDragging = useAppSelector(state => state.board.isDragging)
    const isErasing = useAppSelector(state => state.board.isErasing)
    const cells = useAppSelector(state => state.board.cells)
    const currentColor = useAppSelector(state => state.colors.current.value)
    const dispatch = useAppDispatch()

    const handleExitBoard = () => {
        dispatch(setIsDragging(false))
    }

    const handleCellMouseDown = (id: string) => {
        if (isErasing) {
            dispatch(setIsDragging(true))
            dispatch(setCellColor(id, ""))
            return
        }
        if (currentColor) {
            dispatch(setIsDragging(true))
            dispatch(setCellColor(id, currentColor))
        }
    }

    const handleCellDragOver = (id: string) => {
        if (isErasing && isDragging) {
            dispatch(setCellColor(id, ""))
            return
        }
        if (isDragging && currentColor) {
            dispatch(setCellColor(id, currentColor))
        }
    }
    
    const handleCellMouseUp = (id: string) => {
        if (isErasing) {
            dispatch(setIsDragging(false))
            dispatch(setCellColor(id, ""))
            return
        }
        if (currentColor) {
            dispatch(setIsDragging(false))
            dispatch(setCellColor(id, currentColor))
        }
    }

    const generateStyles = (cell: Cell) => {
        if (cell.color) {
            return {
                background: `radial-gradient(circle, rgba(255,255,255,0.88), ${cell.color}, ${cell.color}, ${cell.color})`,
                boxShadow: `1px 1px 22px 3px ${cell.color}, 0px 0px 6px 1px ${cell.color}`
            }
        } else {
            return {
                backgroundColor: cell.color
            }
        }
    }

    return (
        <div className="board" onMouseLeave={handleExitBoard}>
            { cells.map((cell) => {
                return (
                    <button 
                        key={cell.id}
                        className="cell"
                        style={generateStyles(cell)}
                        id={cell.id}
                        onMouseDown={() => handleCellMouseDown(cell.id)}
                        onMouseEnter={() => handleCellDragOver(cell.id)}
                        onMouseUp={() => handleCellMouseUp(cell.id)}
                    >
                    </button>
                )
            })}
        </div>    
    )
}

export default LiteBoard