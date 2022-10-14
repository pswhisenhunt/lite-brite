import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { setCurrent, deleteCustomColor, fetchCustomColors } from "../../colorsSlice"
import { setIsErasing } from "../../../board/boardSlice"

interface ColorListItemProps {
    id: string,
    name: string,
    value: string,
    canEdit: boolean
}

const ColorListItem = (props: ColorListItemProps) => {
    const dispatch = useAppDispatch()
    const currentColor = useAppSelector(state => state.colors.current)
    const isErasing = useAppSelector(state =>  state.board.isErasing)
    
    const handleColorClick = () => {
        if (isErasing) {
            dispatch(setIsErasing(false))
        }
        dispatch(setCurrent(props.id, props.name, props.value))
    }
    
    const handleDeleteColor = () => {
        dispatch(deleteCustomColor(props.id)).then(() => dispatch(fetchCustomColors()))
    }

    return (
        <li key={props.id} className={props.canEdit ? "color-list-item custom" : "color-list-item"}>
            <button style={{backgroundColor: props.value}} onClick={handleColorClick} className={currentColor.id === props.id ? "color-button selected" : "color-button"}></button>
            {props.canEdit && 
                <div className="delete" onClick={handleDeleteColor}>
                    <svg width="25pt" height="25pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                        <path d="m350 1100-200-800h900l-200 800zm-135.96-750 175 700h421.92l175-700zm235.96-150v-100h300v100h350v50h-1e3v-50zm50 0h200v-50h-200z" fill="#fff"/>
                    </svg>
                </div>
            }
        </li>
    )    
}

export default ColorListItem