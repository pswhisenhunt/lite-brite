import * as React from "react"
import { useAppDispatch } from "../../../../../app/hooks"
import { addCustomValue } from "../../colorsSlice"

const ColorPicker = () => {
    const [ newColor, setNewColor ] = React.useState("#FFF")
    const dispatch = useAppDispatch()

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewColor(e.target.value)
    }

    const handleSubmitColor = (e: React.MouseEvent<HTMLButtonElement>) => {
       e.preventDefault()
       dispatch(addCustomValue(newColor))
    }

    return (
        <div className="color-picker-container">
            <label htmlFor="color">
                <h4 className="title">Add a Color:</h4>
            </label>
            <div className="color-picker-wrapper" onChange={handleColorChange} style={{backgroundColor: newColor}}>
                <input type="color" id="color" className="color-picker-input"  defaultValue={newColor}/>
            </div>
            <button onClick={(e) => handleSubmitColor(e)} className="color-picker-button">Add +</button>
        </div>
    )
}

export default ColorPicker