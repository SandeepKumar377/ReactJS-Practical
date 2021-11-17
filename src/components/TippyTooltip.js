import React, { forwardRef } from 'react';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
    return (
        <span style={{ color: 'pink' }}>
            Colored Componenet
        </span>
    )
}
const CustomChiled = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

export const TippyTooltip = () => {
    return (
        <div>
            <h1>Tippy Tooltip Demo</h1>
            <div style={{ padding: '10px' }} >
                <Tippy arrow={false} delay={1000} placement='right' content='Basic Tooltip' >
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding: '20px' }} >
                <Tippy content={<span style={{ color: 'yellow' }} >Colered</span>} >
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding: '20px' }} >
                <Tippy content={<ColoredTooltip />} >
                    <button>Hover</button>
                </Tippy>
            </div>

            <div style={{ padding: '30px' }} >
                <Tippy content={<ColoredTooltip></ColoredTooltip>} >
                    <CustomChiled></CustomChiled>
                </Tippy>
            </div>

        </div>
    )
}
