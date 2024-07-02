import { useState } from "react";
import {projects, getTechColor} from "../projectsData"
import AnotherButton from "./AnotherButton"
import {LiveButton, GithubButton} from "./ProjectButtons"
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function Project() {
    const [projectsToShow, setProjectsToShow] = useState(3);
    const projectsPerPage = 3;

    const handleShowMore = () => {
        if (projectsToShow >= projects.length) {
            setProjectsToShow(3); 
        } else {
            setProjectsToShow(prev => prev + projectsPerPage);
        }
    };

    const handleShowLess = () => {
        if (projectsToShow > 3) {
            setProjectsToShow(prev => prev - projectsPerPage); 
        }
    };

    return (
        <div className="px-8 mx-auto mb-[224px] max-w-screen-2xl md:px-12" id="Project">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold text-center text-gray-200 uppercase font-poppins">Projects</h1>
                <p className="max-w-xl mb-10 text-lg text-center text-gray-400 font-lato">You might want to develop a website, application or discuss anything related. Feel free to leave a message below</p>

                <div className="grid gap-8 px-8 grid md:grid-cols-2 xl:grid-cols-3">

                    {projects.slice(0, projectsToShow).map((project) => (
                        <div key={project.id} className="p-5 text-gray-300 bg-gray-800 rounded-lg h-full md:w-full border-[0.5px] border-gray-600 hover:-translate-y-2 transition-all duration-300">
                        <div>
                            <h1 className="mb-2 text-xl font-bold text-gray-300">{project.name}</h1>

                            <div className="flex flex-wrap gap-2 mb-2 text-sm">
                                {project.technologies.map((tech, index) => (
                                    <p key={index} className={`px-2 py-1 font-semibold tracking-wide rounded-full ${getTechColor(tech)}`}>{tech}</p>
                                ))}
                            </div>

                            <p className="text-gray-300">{project.description}</p>

                            <div className="flex gap-3 mt-3">
                                <LiveButton link={project.liveLink}>View Website <MdArrowOutward className="text-2xl" /></LiveButton>
                                <GithubButton link={project.githubLink}>Github <FaGithub /></GithubButton>
                            </div>
                        </div>
                        </div>
                    ))}
                    
                </div>

                <div className="flex gap-2 justify-center mt-4">
                    {projectsToShow > 3 && (
                        <AnotherButton onClick={handleShowLess}>Show Less</AnotherButton>
                    )}

                    {projectsToShow < projects.length && (
                        <AnotherButton onClick={handleShowMore}>Show More</AnotherButton>
                    )}                  
                </div>
            </div>
        </div>
    )
}

export default Project
