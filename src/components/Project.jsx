import { useState } from "react";
import { projects, getTechColor } from "../projectsData";
// import AnotherButton from "./AnotherButton";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const [projectsToShow, setProjectsToShow] = useState(4);
  const projectsPerPage = 4;

  const handleShowMore = () => {
    if (projectsToShow >= projects.length) {
      setProjectsToShow(4);
    } else {
      setProjectsToShow((prev) => prev + projectsPerPage);
    }
  };

  const handleShowLess = () => {
    if (projectsToShow > 4) {
      setProjectsToShow((prev) => prev - projectsPerPage);
    }
  };

  return (
    <div
      className="px-8 mx-auto mb-[80px] md:mb-[224px] max-w-screen-2xl md:px-12"
      id="Project"
    >
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-semibold text-center text-gray-200 uppercase font-poppins">
          Projects
        </h1>

        <div className="grid gap-8 md:px-8 grid md:grid-cols-2 xl:grid-cols-2">
          {projects.slice(0, projectsToShow).map((project) => (
            <article key={project.id} className="article-wrapper">
              <div className="rounded-lg container-project">
                <img
                  className="object-cover object-left h-full w-full rounded-t-lg"
                  src={`/${project.image}`}
                />
              </div>
              <div className="project-info">
                <div>
                  <div className="flex-pr">
                    <a className="text-gray-100 hover:bg-white hover:text-[#7851a9] rounded-full" href={project.githubLink}>
                        <FaGithub className="w-8 h-8 " />
                    </a>

                    <div className="project-hover bg-gray-100">
                        <a className="flex h-full items-center justify-center hover:bg-[#7851a9] rounded-full" href={project.liveLink}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.7em"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                                className="text-black hover:text-gray-100"
                                // style={{ color: "black" }}
                            >
                                <line y2="12" x2="19" y1="12" x1="5"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="project-title text-gray-300 text-center text-nowrap">{project.name}</div>
                    <div className="types">
                    {project.technologies.map((tech, index)=> (
                        <span key={index} className="bg-gray-300 uppercase text-xs font-medium rounded-full py-1 px-2 text-[#1c0025]">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            // <div key={project.id} className="p-5 text-gray-300 bg-gray-800 rounded-lg h-full md:w-full border-[0.5px] border-gray-600 hover:-translate-y-2 transition-all duration-300">
            // <div>
            //     <h1 className="mb-2 text-xl font-bold text-gray-300">{project.name}</h1>

            //     <div className="flex flex-wrap gap-2 mb-2 text-sm">
            //         {project.technologies.map((tech, index) => (
            //             <p key={index} className={`px-2 py-1 font-semibold tracking-wide rounded-full ${getTechColor(tech)}`}>{tech}</p>
            //         ))}
            //     </div>

            //     <p className="text-gray-300">{project.description}</p>

            //     <div className="flex gap-3 mt-3">
            //         <LiveButton link={project.liveLink}>View Website <MdArrowOutward className="text-2xl" /></LiveButton>
            //         <GithubButton link={project.githubLink}>Github <FaGithub /></GithubButton>
            //     </div>
            // </div>
            // </div>
          ))}
        </div>

        {/* <div className="flex gap-2 justify-center mt-4">
          {projectsToShow > 4 && (
            <button onClick={handleShowLess}>Show Less</button>
          )}

          {projectsToShow < projects.length && (
            <button onClick={handleShowMore}>Show More</button>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Project;
