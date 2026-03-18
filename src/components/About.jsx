import React from 'react'
import { aboutData } from '../data/about'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center text-center text-white">
        <div className="max-w-[75%]">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {aboutData.title}
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {aboutData.description}
            </h3>

        </div>
    </section>
  )
}

export default About