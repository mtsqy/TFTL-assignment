import React from 'react'

const CircularText = ({ text }: { text: string }) => {
    const length = text.length
    const letters = Array.from(text).map((letter, i) => {
        const r = (360 / length) * i
        const x = parseFloat((Math.PI / text.length).toFixed(0)) * i
        const y = parseFloat((Math.PI / text.length).toFixed(0)) * i
        const transform = `rotateZ(${r}deg) translate3d(${x}px, ${y}px, 0)`
        
        return (
            <span
                key={i}
                style={{
                    transform,
                    position: 'absolute',
                }}
            >
                {letter}
            </span>
        )
    })

    return (
        <div className="cursor__text" style={{ 
            position: 'relative' }}>
            {letters}
        </div>
    )
}

export default CircularText
