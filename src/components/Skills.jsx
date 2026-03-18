import React from 'react'
import { skillsData } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center text-center text-white">
        <div className="max-w-[75%]">
            <div className="mb-12">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    {skillsData.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    {skillsData.subtitle}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {skillsData.skills.map((skill) => (
                <div
                    key={skill}
                    className="flex items-center justify-center p-8
                                rounded-xl border border-purple-400
                                bg-white/5 backdrop-blur-md
                                text-white
                                shadow-[0_0_15px_rgba(168,85,247,0.7)]
                                hover:scale-105 transition-all duration-300"
                >
                    <div className="flex flex-col items-center text-center">

                        <img src={skill.image} 
                        alt={skill.name} 
                        className="w-16 h-16 object-contain mb-4 " />

                        <span className="text-2xl font-medium">
                            {skill.name}
                        </span>
                        <p>
                            {skill.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default Skills