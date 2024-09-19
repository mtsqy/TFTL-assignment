'use client'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import TransitionLink from './TransitionLink'

const ListMenu: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (windowWidth > 400) {
            setIsMenuVisible(true)
        } else {
            setIsMenuVisible(false)
        }
    }, [windowWidth])

    const toggleMenu = () => {
        setIsMenuVisible(prevState => !prevState)
    }

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
