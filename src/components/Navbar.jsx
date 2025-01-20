import { useState } from "react";
import { FaEllipsisVertical, FaMessage, FaGithub, FaLinkedin, FaSquareXTwitter, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import {LuMail} from "react-icons/lu";

function Navbar() {

    return (
        <>
            <nav className="flex items-center justify-between text-gray-300 py-6 mb-12">
                <a href="/" className="cursor-pointer"><img className="h-10 md:h-12 md:w-full" src="/logo1.png"  alt="logo" /></a>

                <div className="flex items-center gap-4 text-2xl">
                    <a href="https://www.github.com/onojapeter" target="_blank">
                        <FaGithub className=" text-gray-100 cursor-pointer hover:text-purple-700" />
                    </a>
                    <a href="https://www.linkedin.com/in/onoja-peter" target="_blank">
                        <FaLinkedin className=" text-gray-100 cursor-pointer hover:text-purple-700" />
                    </a>
                    <a href="https://www.x.com/onojapeter_" target="_blank">
                        <FaSquareXTwitter className=" text-gray-100 cursor-pointer hover:text-purple-700" />
                    </a>
                    <a href="mailto:onojapeter90@gmail.com" target="_blank">
                        <LuMail className=" text-gray-100 cursor-pointer hover:text-purple-700" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar
