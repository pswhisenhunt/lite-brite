import { NUM_OF_CELLS } from "./constants"

export const generateRandomId = () => {
    return `id-${Math.random().toString(16).slice(2)}`
}

export const generateDefaultCells = () => {
    const cells = []
    for (let i = 0; i < NUM_OF_CELLS; i++) {
        cells.push({
            id: generateRandomId(),
            color: ""
        })
    }
    return cells;
}