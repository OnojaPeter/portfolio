
function About() {
    return (
        <div>
            <div className="px-8 mx-auto mb-[224px] max-w-screen-2xl md:px-12" id="About">
                <h1 className="mb-20 text-3xl font-semibold text-center text-gray-300 uppercase font-poppins">About me</h1>

                <div className="flex flex-col gap-y-10  justify-between  md:flex-row ">
                    <div className="flex justify-center md:items-start w-full mx-auto max-w-[300px] md:w-[40%]">
                        <img className="w-[300px] h-[300px] rounded-xl" loading="lazy" src="/avatar.jpg" alt="Peter" />
                    </div>
                    
                    <div className="flex flex-col  lg:max-w-3xl gap-5  md:w-[55%]">
                        <h1 className="text-lg font-semibold tracking-wide text-left text-gray-200 font-lato">Introduction</h1>
                        <p className="text-lg text-gray-400 font-lato">My name is Onoja Peter, I'm a FullStack Developer based in Nigeria. I spend most of my time coding up things for the web, bringing designs to life and learning algorithms.</p>

                        <p className="text-lg text-gray-400 font-lato">My goal is to deliver, through code, unique and innovative solutions to complex problems. If my portfolio interests you, or you need an enthusiastic developer on your team, <a href="mailto:onojapeter90@gmail.com" className="text-indigo-500 hover:border-b-2 hover:border-indigo-500">I am available for hire</a></p>

                        <div className="flex flex-col md:justify-between gap-4 md:flex-row md:gap-4">
                            <div className="mb-4">
                            <h2 className="mb-6 text-lg tracking-wide text-left text-gray-200 font-lato">Languages and Technologies</h2>
                            <ul className="space-y-2 text-gray-400 font-lato">
                                <li>NodeJs</li>
                                <li>JavaScript</li>
                                <li>Jquery</li>
                                <li>MongoDB</li>
                                <li>EJS</li>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>TailwindCss</li>
                            </ul>
                           </div>

                            <div>
                            <h2 className="mb-6 text-lg tracking-wide text-left text-gray-200 font-lato">Tools & Methods</h2>
                            <ul className="space-y-2 text-gray-400 font-lato">
                                <li>Git & Github</li>
                                <li>Figma</li>
                                <li>Vercel</li>
                                <li>Responsive Development</li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default About
