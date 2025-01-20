import { motion } from "framer-motion";
import { HeroContent1, HeroContent2 } from "../Constants";

const containerVariant = (delay) => ({
    hidden: {opacity: 0, x: -100},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})
const Hero = () => {
     return (
        <section className="pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            initial='hidden'
                            animate='visible'
                            variants={containerVariant(0.2)}
                            className="font-thin tracking-tight pb-5 lg:pb-16 lg:mt-16 text-6xl font-lato">
                                Onoja Peter
                        </motion.h1>
                        <motion.span 
                            initial='hidden'
                            animate='visible'
                            variants={containerVariant(0.5)}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl">
                                Full Stack Developer
                        </motion.span>

                        <div className="max-w-xl space-y-3 py-4 font-light">
                            <motion.p 
                                initial='hidden'
                                animate='visible'
                                variants={containerVariant(1)}
                                className="my-2">
                                    {HeroContent1}
                            </motion.p>

                            <motion.p 
                                initial='hidden'
                                animate='visible'
                                variants={containerVariant(1.2)}>
                                    {HeroContent2}
                            </motion.p>
                        </div>

                        <motion.div
                            initial='hidden'
                            animate='visible'
                            variants={containerVariant(1.4)}
                        >
                            <a href="#Contact" className='hero-btn bg-neutral-200 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-all duration-300 px-5 py-1 rounded-full text-gray-200 flex items-center gap-2 relative hover:text-white'>
                                <span className="absolute inset-0 bg-black opacity-0 hover:opacity-50 rounded-full transition-all duration-300 z-0"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    contact me
                                    <div className="transition duration-200 hero-arrow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <line y2="12" x2="19" y1="12" x1="5"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-8 ">
                    <div className="flex justify-center items-center h-full ">
                        <motion.img
                            initial={{ x: 100, opacity: 0}}
                            animate={{ x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1}}
                            src="/hero_img2.JPG" alt="" 
                            className="h-[350px] md:w-[60%] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
     )
}
export default Hero;