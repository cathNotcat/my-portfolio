import React from 'react'
import { heroData, contactData } from '../data/hero'
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center text-white">
        <div className="max-w-[75%]">
            <h1 className="text-5xl md:text-8xl font-bold mb-2">
                {heroData.greetings}
            </h1>
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                {heroData.name}
            </h1>

            <h3 className="text-xl md:text-3xl text-white-300 mb-4">
                {heroData.title}
            </h3>

            <p className="text-gray-300 text-xl leading-relaxed">
                {heroData.description}
            </p>

            <div className="flex gap-6 justify-center mt-4">

                <a href="https://instagram.com/catherinerosalind" target="_blank">
                    <FaInstagram className="w-12 h-12 text-white/50 hover:text-pink-500 text-3xl transition" />
                </a>

                <a href="https://linkedin.com/in/catherinerosalind" target="_blank">
                    <FaLinkedin className="w-12 h-12 text-white/50 hover:text-blue-500 text-3xl transition" />
                </a>

                <a href="mailto:your@email.com">
                    <FaEnvelope className="w-12 h-12 text-white/50 hover:text-red-400 text-3xl transition" />
                </a>

                <a href="https://github.com/cathNotcat" target="_blank">
                    <FaGithub className="w-12 h-12 text-white/50 hover:text-white text-3xl transition" />
                </a>

            </div>

            {/* <div className="flex flex-wrap justify-center gap-8"> */}

                {/* {contactData.map((item) => (
                <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={item.icon}
                    alt={item.name}
                    className="w-18 h-10 mb-3 object-contain"
                    />
                </a>
                ))} */}

            {/* </div> */}

        </div>
    </section>
  )
}

export default Hero