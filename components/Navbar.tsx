'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['800'] })

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navClasses = `
        ${poppins.className}
        ${isScrolled ? 'fixed top-0 left-0 right-0' : 'relative'}
        flex justify-center items-center
        bg-white
        transition-all duration-300 z-30
    `
    const headerClasses = `
        ${isScrolled ? 'text-xl' : 'text-6xl'}
        transition-all duration-300
    `

    return (
        <nav className={navClasses}>
            <Link href="/">
                <span className={headerClasses}>TKW®</span>
            </Link>
        </nav>
    )
}

export default Navbar