'use client'
import React, { useContext, useEffect, useRef, useState } from "react"
import gsap from 'gsap'
import { useCursor } from "@/context/CursorContext"
import CircularText from "./CircularText"
import { HoverContext } from "@/context/HoverContext"

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const circularRef = useRef<HTMLDivElement>(null)
  const { isHovered } = useContext<any>(HoverContext)

  const { x, y } = useCursor()

  useEffect(() => {
    if(cursorRef.current && circularRef.current) {
        gsap.to(cursorRef.current, {
            x: x - cursorRef.current.offsetWidth / 2,
            y: y - cursorRef.current.offsetHeight / 2,
            opacity: 1,
            ease: 'Power3.easeOut',
            duration: 0.65,
        })
        gsap.to(circularRef.current, {
            x: x - circularRef.current.offsetWidth / 2,
            y: y - circularRef.current.offsetHeight / 2,
            opacity: 1,
            ease: 'Power4.easeOut',
            duration: 1.8,
        })
    }
  }, [x,y])

  return (
    <>
      <div className="cursor">
        <span className="cursor__el" ref={cursorRef}>
            <svg  width="20" height="20" viewBox="0 0 25 25">
                <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
            </svg>
        </span>
        <span className={isHovered ? 'cursor__el hovered':'cursor__el'}ref={circularRef}>
            <CircularText text="showreel showreel showreel" />
        </span>
      </div>
    </>
  )
}

export default Cursor