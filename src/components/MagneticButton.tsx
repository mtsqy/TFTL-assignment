'use client'

import { useCursor } from '@/context/CursorContext'
import React, { useRef, useEffect, useState } from 'react'

const Magnetic = ({ children } : { children: React.ReactNode }) => {
  const { x, y } = useCursor()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const [renderedStyles, setRenderedStyles] = useState({
    tx: 0,
    ty: 0,
    strength: 0.3,
  })

  useEffect(() => {
    const el = wrapperRef.current
    const child = childRef.current
    if (el && child) {
      const rect = child.getBoundingClientRect()
      const cX = rect.left + rect.width / 2
      const cY = rect.top + rect.height / 2

      const distX = Math.abs(x - cX)
      const distY = Math.abs(y - cY)

      if (distX < rect.width *.7 && distY < rect.height *.4) {
        const tx = (x - cX) * renderedStyles.strength
        const ty = (y - cY) * renderedStyles.strength

        setRenderedStyles((prev) => ({ ...prev, tx, ty }))
      } else {
        
        setRenderedStyles((prev) => ({ ...prev, tx: 0, ty: 0 }))
      }

      el.style.transform = `translate3d(${renderedStyles.tx}px, ${renderedStyles.ty}px, 0)`
      child.style.transform = `translate3d(${renderedStyles.tx*.5}px, ${renderedStyles.ty*.7}px, 0)`
    }
  }, [x, y, renderedStyles.strength])

  return (
    <>
        <div className="text__wrapper" ref={wrapperRef} style={{ transition: 'transform 0.1s ease-out' }}>
            <h1 className="text__content">
                {children}
            </h1>
        </div>
        <div ref={childRef} className="tamago" style={{ transition: 'transform 0.1s ease-out' }}></div>

    </>
  )
}

export default Magnetic
