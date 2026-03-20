import React from 'react'
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className="w-full sticky top-0 bg-black/30 backdrop-blur-md text-white py-6 px-6">
            <div className="flex items-center justify-between md:justify-center">
                {/* Desktop Nav */}
                <ul className="hidden md:flex justify-cente gap-10 text-lg">
                    {items?.map((item) => (
                        <li key={item.id} className="cursor-pointer hover:text-gray-300">
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center gap-6 text-xl font-normal mt-4">
                    {items?.map((item) => (
                        <li key={item.id} className="cursor-pointer hover:text-gray-300">
                            <a href={`#${item.id}`} onClick={() => setIsOpen(false)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar
