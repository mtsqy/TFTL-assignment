"use client"

import { useRouter } from "next/navigation"
import { animatePageOut } from "@/animations"
import { useContext } from "react"
import { HoverContext } from "@/context/HoverContext"

export default function TransitionLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const router = useRouter()
  const hoverContext = useContext(HoverContext)
  if (!hoverContext) throw new Error('HoverContext must be used within HoverProvider')

  const { handleMouseEnter, handleMouseLeave, isHovered } = hoverContext

  const handleClick = () => {
    animatePageOut(href, router)
  }

  return (
    <button
      className="link"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  )
}