import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react'

interface CursorPosition {
  x: number
  y: number
}

const CursorContext = createContext<CursorPosition | undefined>(undefined)

interface CursorProviderProps {
  children: ReactNode
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId: number

    const updateCursorPosition = (event: MouseEvent | TouchEvent) => {
      let x: number, y: number

      if (event.type.startsWith('touch')) {
        const touch = (event as TouchEvent).touches[0]
        x = touch.clientX
        y = touch.clientY
      } else {
        const { clientX, clientY } = event as MouseEvent
        x = clientX
        y = clientY
      }

      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => setCursorPosition({ x, y }))
    }

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('touchmove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('touchmove', updateCursorPosition)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <CursorContext.Provider value={cursorPosition}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = (): CursorPosition => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}
