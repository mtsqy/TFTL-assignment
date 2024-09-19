import { createContext, useState, useContext, ReactNode } from 'react'

interface HoverContextType {
  isHovered: boolean
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export const HoverContext = createContext<HoverContextType | undefined>(undefined)

interface HoverProviderProps {
  children: ReactNode
}

export const HoverProvider = ({ children }: HoverProviderProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <HoverContext.Provider value={{ isHovered, handleMouseEnter, handleMouseLeave }}>
      {children}
    </HoverContext.Provider>
  )
}

export const useHoverContext = (): HoverContextType => {
  const context = useContext(HoverContext)
  if (!context) {
    throw new Error('useHoverContext must be used within a HoverProvider')
  }
  return context
}
