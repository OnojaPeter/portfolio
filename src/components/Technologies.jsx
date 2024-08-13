import { motion } from "framer-motion"
import { logos } from "../Constants"

const Technologies = () => {
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

    const getRandomDuration = (min, max) => {
        return Math.random() * (max-min) + min
    }

    return (
        <section className="pb-5 lg:pb-24">
            <div>
                <motion.h2 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition ={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="py-5 lg:my-20 text-center text-4xl">
                        Technologies
                </motion.h2>

                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition ={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-4">
                        {logos.map((logo, index) => {
                            const duration = getRandomDuration(2, 7)

                            return (
                                <motion.div 
                                    variants={iconVariants(duration)}
                                    animate='animate'
                                    initial='initial'
                                    key={index} 
                                    className="rounded-2xl border-4 border-neutral-800 p-4">
                                        <logo.image className={`text-7xl ${logo.bgColor}`} />
                                </motion.div>
                            )
                        })}
                    {/* </div> */}
                </motion.div>
            </div>
        </section>
    )
}

export default Technologies