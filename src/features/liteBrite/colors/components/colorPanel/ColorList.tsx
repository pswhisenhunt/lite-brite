import * as React from "react"
import { Color } from "../../../../../app/types"
import ColorListItem from "./ColorListItem"

interface ColorListProps {
    canEdit: boolean,
    colors: Color[]
}

const ColorList = (props: ColorListProps) => {
    return (
        <div className="color-list-container">
            <ul className="color-list">
                {props.colors && props.colors.map((c) => {
                    return (
                        <ColorListItem
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            value={c.value}
                            canEdit={props.canEdit} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ColorList