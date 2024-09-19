"use client"

import { useEffect } from "react"
import { animatePageIn } from "@/animations"
import TransitionCover from "@/components/TransitionCover"
import TextMarquee from "@/components/TextMarquee"
import Cursor from "@/components/Cursor"
import { CursorProvider } from "@/context/CursorContext"
import { HoverProvider } from "@/context/HoverContext"
import Header from "@/components/Header"

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <HoverProvider>
        <CursorProvider>
        <TransitionCover />
        <Header />      
        <TextMarquee />
        <Cursor />
        {children}
        </CursorProvider>
    </HoverProvider>
  )
}