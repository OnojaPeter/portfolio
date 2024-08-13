import { motion } from "framer-motion"
import { experiences } from "../Constants"

const Experience = () => {
    return (
        <section>
            <div>
                <motion.h2 
                    whileInView={{ y: 0, opacity: 1}}
                    animate={{ y: -100, opacity: 0}}
                    transition={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="text-4xl text-center py-5 lg:py-20">Experience</motion.h2>
                <div>
                    {experiences.map((experience, index) => {
                        return (
                            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1}}
                                    animate={{ x: -100, opacity: 0}}
                                    transition={{duration: 1.5}} 
                                    viewport={{ once: true }}
                                    className="w-full lg:w-1/4">
                                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                                </motion.div>

                                <motion.div
                                    whileInView={{ x: 0, opacity: 1}}
                                    animate={{ x: 100, opacity: 0}}
                                    transition={{duration: 1.5}} 
                                    viewport={{ once: true }}
                                    className="w-full max-w-xl lg:w-3/4">
                                        <h6 className="mb-2 font-semibold">
                                            {experience.role} -{' '}
                                            <span className="text-purple-100 text-sm capitalize">{experience.company}</span>
                                        </h6>

                                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                                        {experience.technologies.map((tech, index) => {
                                            return (
                                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">{tech}</span>
                                            )
                                        })}
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience