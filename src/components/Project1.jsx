import { motion } from "framer-motion"
import { projects } from "../Constants"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Project1 = () => {
    return (
        <section className="pb-4">
            <motion.h2 
                whileInView={{ y: 0, opacity: 1}}
                animate={{ y: -100, opacity: 0}}
                transition={{duration: 1.5}}
                viewport={{ once: true }}
                className="py-5 lg:my-20 text-4xl text-center">Projects</motion.h2>
            <div>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                whileInView={{ x: 0, opacity: 1}}
                                animate={{ x: -100, opacity: 0}}
                                transition={{duration: 1.5}}  
                                viewport={{ once: true }}
                                className="w-full lg:w-1/4 flex flex-row lg:flex-col">
                                    <img 
                                        className="mb-3 rounded " 
                                        width={200} 
                                        height={200} 
                                        src={project.image} 
                                        alt={project.title} 
                                    />
                                    <div className="flex flex-col lg:flex-row gap-4 pb-3 ml-5 lg:ml-0 lg:pb-0 w-[200px]">
                                        <a href={project.githubLink} target="_blank" ><FaGithub className="cursor-pointer hover:text-purple-700" /></a>
                                        <a href={project.liveLink} target="_blank" ><FaExternalLinkAlt className="cursor-pointer hover:text-purple-700" /></a>
                                    </div>
                                    
                            </motion.div>
                            <motion.div
                                whileInView={{ x: 0, opacity: 1}}
                                animate={{ x: 100, opacity: 0}}
                                transition={{duration: 1.5}}  
                                viewport={{ once: true }}
                                className="w-full max-w-xl lg:w-3/4">
                                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                                    <p className="mb-4 text-neutral-400">{project.description}</p>
                                    {project.technologies.map((tech, index) => {
                                        return (
                                            <span 
                                                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700" 
                                                key={index}>
                                                    {tech}
                                            </span>
                                        )
                                    })}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Project1