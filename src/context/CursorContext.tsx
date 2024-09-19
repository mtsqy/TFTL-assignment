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

    const updateCursorPosition = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => setCursorPosition({ x, y }))
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
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
