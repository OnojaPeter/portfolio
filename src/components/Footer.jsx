import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Footer() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <footer className="bg-indigo-600">
            <div className="flex flex-col md:flex-row justify-between px-10 py-12 gap-y-12">

                <div className="flex flex-row md:flex-col justify-between gap-8">
                    <a href="/" className="cursor-pointer"><img className="h-12 w-12" src="/logo.png" alt="logo" /></a>

                    <div className="flex flex-row md:flex-col  gap-3 ">
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <FaGithub className="text-4xl " />
                            <p className="hover:border-b-2 hidden md:block">Github</p>
                        </a>
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <LuMail className="text-4xl " />
                            <p className="hover:border-b-2 hidden md:block">Gmail</p>
                        </a>
                        <a href="" className="flex items-center gap-2 text-gray-300 cursor-pointer hover:text-gray-100">
                            <FaLinkedin className="text-4xl " />
                            <p className="hover:border-b-2 hidden md:block">LinkedIn</p>
                        </a>
                    </div>

                </div>

                <div className="flex flex-col items-center md:items-end justify-between gap-5">
                    {/* <div className="flex items-center gap-2 border px-1 h-12 rounded-full">
                        <button className={`flex justify-center items-center h-10 w-10 rounded-full transition-all duration-300 ${activeButton === 'moon' ? 'bg-indigo-900 opacity-100 text-white' : 'text-gray-300 opacity-50' }`}
                            onClick={() => handleButtonClick('moon')}>
                            <FaRegMoon className="text-2xl" />
                        </button>

                        <button className={`flex justify-center items-center h-10 w-10 rounded-full transition-all duration-300 ${activeButton === 'sun' ? 'bg-indigo-900 opacity-100 text-white' : 'text-gray-300 opacity-50' }`}
                            onClick={() => handleButtonClick('sun')} >
                            <MdSunny className="text-2xl" />
                        </button>
                    </div> */}
                    <div className="text-gray-300 text-xl">Built by <a href="https://github.com/onojapeter" className="text-white">Onoja Peter</a></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;