import { motion } from "framer-motion"
import { HeroContent3 } from "../Constants"

const About1 = ()=> {
    return (
        <section className="pb-4">
            <motion.h2 
                whileInView= {{ opacity:1, y: 0 }}
                animate={{ opacity:0 , y: -100 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-4xl my-5 lg:my-20 text-center">
                    About <span className="text-neutral-500">Me</span>
            </motion.h2>

            <div className="flex flex-wrap items-center">
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 1}}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 lg:p-8 hidden lg:block">
                        <div className="flex justify-center items-center">
                            <img className="rounded-2xl h-[250px] w-[80%] object-cover" src="/about-img.webp" alt="" />
                        </div>
                </motion.div>
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100}}
                    transition={{ duration: 1}} 
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl lg:py-6">{HeroContent3}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About1