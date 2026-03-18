import React from 'react'

const Navbar = ({ items }) => {

    return(
        <nav className="w-full sticky top-0 bg-black/30 backdrop-blur-md text-white py-6">
            <ul className="flex justify-center gap-12 text-xl font-normal">
                {items?.map((item) => (
                    <li key={item.id} className="cursor-pointer hover:text-gray-300">
                        <a href={`#${item.id}`}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
