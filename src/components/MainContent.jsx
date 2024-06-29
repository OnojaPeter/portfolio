import {GoDownload} from "react-icons/go";

import AnotherButton from "./AnotherButton"
import Button from "./Button"

function MainContent() {
    return (
        <div className="px-8 mx-auto mb-24 max-w-screen-2xl md:px-12" id="Home">
            <div className="flex flex-col items-center justify-center text-center py-[192px]">
                <div className="flex gap-2">
                    <p className=" text-xl font-semibold  text-white">I<span className="mx-1 text-indigo-500">'</span>m</p>
                    <h1 className="mb-4 text-5xl font-bold leading-tight text-gray-200 uppercase md:text-7xl font-poppins">Onoja Peter</h1>
                </div>

                <p className="mb-12 text-base text-gray-500 uppercase font-lato">I embrace the digital realm</p>
                <p className="max-w-3xl mb-10 text-lg text-center text-gray-400 font-lato">I can assist in creating a product, feature, or website. Take a look at my work and experience! If you're interested, I'm available for hire.</p>

                <div className="flex max-w-2xl gap-6">
                    <a href="#Project">
                        <Button>Check out my work</Button>
                    </a>

                    <a href="/ONOJA PETER cv.pdf" download>
                        <AnotherButton >
                            <div className="flex items-center gap-2">
                                <p className="font-lato">Resume</p>
                                <GoDownload className="w-5 h-5"/>
                            </div>
                        </AnotherButton> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainContent
