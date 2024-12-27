'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import stasis from '@/components/assets/stasis.jpg'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Brand Logo */}
                <div className="text-teal-800 font-bold text-xl flex items-center gap-2">
                    <Image
                        src={stasis}
                        alt="Stasis Artist"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <Link href="/" className="hover:text-teal-600 transition-colors">
                        Stasis Artis
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6 text-teal-700">
                    <li>
                        <Link href="/#home" className="hover:text-teal-900 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/#about" className="hover:text-teal-900 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link href="/#gallery" className="hover:text-teal-900 transition-colors">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="hover:text-teal-900 transition-colors">Contact</Link>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/stasis_artis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal-900 transition-colors"
                        >
                            Follow Us
                        </a>
                    </li>
                </ul>

                {/* CTA Button for Desktop */}
                <a
                    href="#shop"
                    className="hidden md:inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                    Shop Now
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-teal-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } flex-col items-start bg-white/80 backdrop-blur-md p-4 md:hidden shadow-md`}
            >
                <Link href="/#home" className="block w-full text-teal-700 py-2 hover:text-teal-900 transition-colors">
                    Home
                </Link>
                <Link href="/#about" className="block w-full text-teal-700 py-2 hover:text-teal-900 transition-colors">
                    About
                </Link>
                <Link href="/#gallery" className="block w-full text-teal-700 py-2 hover:text-teal-900 transition-colors">
                    Gallery
                </Link>
                <Link href="/#contact" className="block w-full text-teal-700 py-2 hover:text-teal-900 transition-colors">
                    Contact
                </Link>
                <a
                    href="https://www.instagram.com/stasis_artis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-teal-700 py-2 hover:text-teal-900 transition-colors"
                >
                    Follow Us
                </a>
                <a
                    href="#shop"
                    className="block w-full bg-teal-600 text-white text-center py-2 rounded-lg hover:bg-teal-700 transition-colors mt-4"
                >
                    Shop Now
                </a>
            </div>
        </header>
    )
}

export default Nav