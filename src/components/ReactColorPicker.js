import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

export const ReactColorPicker = () => {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    return (
        <div>
            <h1>React Color Picker Demo</h1>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
            </button>
            {
                showColorPicker && <ChromePicker color={color}
                    onChange={(updatedColor) => setColor(updatedColor.hex)}
                />
            }
            <h3>You Picked Color : {color}</h3>
        </div>
    )
}
