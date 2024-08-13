// import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGit, FaGithub, FaFigma, FaDatabase } from 'react-icons/fa';
// import { SiJquery, SiMongodb, SiEjs, SiTailwindcss, SiVercel } from 'react-icons/si';
import ScrollAnimation from '../hooks/ScrollAnimation';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const transition = { duration: 0.5, ease: "easeInOut" };

function About() {
    const textAnimation = ScrollAnimation()

    const variant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 10,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 500,
    };

    const iconVariants = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    })
    
    const logos = [
        { image: 'html.png', bgColor: 'bg-black' },
        { image: 'css.png', bgColor: 'bg-[#0f0f62]' },
        { image: 'tailwindcss.png', bgColor: 'bg-white' },
        { image: 'javascript.png', bgColor: 'bg-black' },       
        { image: 'jquery.png', bgColor: 'bg-white' },
        { image: 'react.png', bgColor: 'bg-blue-600' },
        { image: 'nodejs.webp', bgColor: 'bg-white' },
        { image: 'mongodb.svg', bgColor: 'bg-white' },
        { image: 'ejs.svg', bgColor: 'bg-white' },
        // { image: 'figma.png', bgColor: 'bg-black' },
        { image: 'git.png', bgColor: 'bg-black' },
        // { image: 'vercel.svg', bgColor: 'bg-white' },
    ]
     const getRandomDuration = (min, max) => {
        return Math.random() * (max-min) + min
     }
    return (
        <motion.div className="text-gray-100 py-16" id="About"
            initial="hidden"
            ref={textAnimation.ref}
            animate={textAnimation.controls}
            variants={variant}
            transition={transition}
        >
            <div className="px-8 mx-auto mb-10 md:mb-20 max-w-screen-2xl md:px-12">
                <motion.h1 
                    initial="hidden"
                    variants={variant}
                    ref={textAnimation.ref}
                    animate={textAnimation.controls}
                    transition={{ ...transition, delay: 0.2 }} 
                    className="mb-10 md:mb-20 text-4xl font-bold text-center uppercase font-poppins">
                        About Me
                </motion.h1>

                <div className="flex flex-col gap-y-10 justify-between md:flex-row">
                    <div className="flex justify-center md:items-start w-full mx-auto max-w-[300px] md:w-[40%]">
                        <img className="h-[300px] rounded-xl object-contain shadow-lg" loading="lazy" src="" alt="Peter" /> {/*/download.png*/}
                    </div>

                    <div className="flex flex-col lg:max-w-3xl gap-8 md:w-[55%]">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-wide text-left font-lato">Introduction</h2>
                            <p className="mt-2 text-lg text-gray-100 font-lato">
                                My name is Onoja Peter, I'm a FullStack Developer based in Nigeria. I spend most of my time coding up things for the web, bringing designs to life, and learning algorithms.
                            </p>
                            <p className="mt-2 text-lg text-gray-100 font-lato">
                                My goal is to deliver unique and innovative solutions to complex problems. If my portfolio interests you, or you need an enthusiastic developer on your team, 
                                <a href="mailto:onojapeter90@gmail.com" className="text-[#1c0025] font-semibold hover:border-b-2 hover:border-[#1c0025] ml-1">I am available for hire</a>
                            </p>
                        </div>

                        {/* <div className="flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/2">
                                <h3 className="mb-4 text-xl tracking-wide text-left font-lato">Languages and Technologies</h3>
                                <ul className="space-y-2 text-gray-100 font-lato">
                                    <li className="flex items-center"><FaNodeJs className="mr-2" /> NodeJs</li>
                                    <li className="flex items-center"><FaReact className="mr-2" /> React</li>
                                    <li className="flex items-center"><FaJs className="mr-2" /> JavaScript</li>
                                    <li className="flex items-center"><SiJquery className="mr-2" /> Jquery</li>
                                    <li className="flex items-center"><SiMongodb className="mr-2" /> MongoDB</li>
                                    <li className="flex items-center"><SiEjs className="mr-2" /> EJS</li>
                                    <li className="flex items-center"><FaHtml5 className="mr-2" /> HTML</li>
                                    <li className="flex items-center"><FaCss3Alt className="mr-2" /> CSS</li>
                                    <li className="flex items-center"><SiTailwindcss className="mr-2" /> TailwindCss</li>
                                </ul>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="mb-4 text-xl tracking-wide text-left font-lato">Tools & Methods</h3>
                                <ul className="space-y-2 text-gray-100 font-lato">
                                    <li className="flex items-center"><FaGit className="mr-2" /> Git</li>
                                    <li className="flex items-center"><FaGithub className="mr-2" /> Github</li>
                                    <li className="flex items-center"><FaFigma className="mr-2" /> Figma</li>
                                    <li className="flex items-center"><SiVercel className="mr-2" /> Vercel</li>
                                    <li className="flex items-center"><FaDatabase className="mr-2" /> MongoDB</li>
                                    <li className="flex items-center"><FaHtml5 className="mr-2" /> Responsive Development</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div>
                    <motion.h2 
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: -100}}
                        transition ={{duration: 1.5}}
                        className='text-center my-10 text-2xl'>
                            Technologies
                    </motion.h2>

                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition ={{duration: 1.5}}
                        className='flex gap-6 justify-center'>
                            {logos.map((logo, index) => {
                                const duration = getRandomDuration(2, 7)
                                return (
                                    <motion.div
                                    variants={iconVariants(duration)}
                                    animate='animate'
                                    initial='initial'
                                    key={index} 
                                    className={`flex items-center justify-center w-[60px] h-[60px] rounded-full ${logo.bgColor}`}>
                                        <img className='w-[40px] h-[40px]' src={logo.image} alt={`logo ${logo.image}`} />
                                    </motion.div>
                                )
                            })}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;

