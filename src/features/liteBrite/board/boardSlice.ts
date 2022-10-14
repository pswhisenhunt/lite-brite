import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cell } from "../../../app/types"
import { generateDefaultCells } from "../../../app/utils"

interface BoardState {
    cells: Cell[],
    isDragging: boolean,
    isErasing: boolean
}

const initialState: BoardState = {
    cells: generateDefaultCells(),
    isDragging: false,
    isErasing: false
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setIsErasing(state, action: PayloadAction<boolean>) {
            state.isErasing = action.payload
        },
        setIsDragging(state, action: PayloadAction<boolean>) {
            state.isDragging = action.payload
        },
        resetCells(state) {
            state.cells = generateDefaultCells() 
        },
        setCellColor: {
            reducer(state, action: PayloadAction<Cell>) {
                let cell = findCell(action.payload.id, state)
                cell.color = action.payload.color
            },
            prepare(id: string, color: string) {
                return {
                    payload: {
                        id: id,
                        color: color
                    }
                }
            }
        }
    }
})

const findCell = (id: string, state: BoardState): Cell => {
    return state.cells.filter(cell => cell.id === id)[0]
}

export const { resetCells, setCellColor, setIsDragging, setIsErasing } = boardSlice.actions

export default boardSlice.reducer