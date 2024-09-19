'use client'

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import TransitionLink from './TransitionLink'

const ListMenu: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState)
  }

  useEffect(() => {
    if (window.innerWidth > 400 ) setIsMenuVisible(true)
  }, [window.innerWidth])

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuVisible) {
        gsap.to(menuRef.current, { opacity: 1, y: 0, duration: 0.3,})
      } else {
        gsap.to(menuRef.current, { opacity: 0, y: 20, duration: 0.3 })
      }
    }
  }, [isMenuVisible])

  return (
    <div className="link__menu">
      <div className="link__icon" onClick={toggleMenu}>

      </div>
      <div className="link__wrapper" ref={menuRef}>
        <TransitionLink href="/where" label="where?" />
        <TransitionLink href="/who" label="who?" />
        <TransitionLink href="/what" label="what?" />
      </div>
    </div>

    
  )
}

export default ListMenu
