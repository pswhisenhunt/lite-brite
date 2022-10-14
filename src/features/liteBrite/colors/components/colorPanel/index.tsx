import * as React from "react"
import ColorPicker from "./ColorPicker"
import ColorList from "./ColorList"

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { fetchDefaultColors, fetchCustomColors } from "../../colorsSlice"

const ColorPanel = () => {
    const dispatch = useAppDispatch()
    const defaultColors = useAppSelector(state => state.colors.defaultValues)
    const customColors = useAppSelector(state => state.colors.customValues)
    
    React.useEffect(() => {
        if (defaultColors.status === "idle") {
            dispatch(fetchDefaultColors())
        }
    }, [])

    React.useEffect(() => {
        if (customColors.status === "idle") {
            dispatch(fetchCustomColors())
        }
    }, [customColors])

    const defaultColorListProps = {
        canEdit: false,
        colors: defaultColors.colors
    }
    const customColorListProps = {
        canEdit: true,
        colors: customColors.colors
    }

    return (
        <div className="color-panel-container">
            <h1 className="title section-heading">Colors</h1>
            <div className="default-colors">
                <h4 className="title">Default Colors</h4>
                <ColorList {...defaultColorListProps}/>
            </div> 
            { customColors.colors.length > 0 && 
                <div className="custom-colors">
                <h4 className="title">Custom Colors</h4>
                <ColorList {...customColorListProps}/>
        </div>  
            }
            <ColorPicker/>
        </div>
    )
}

export default ColorPanel