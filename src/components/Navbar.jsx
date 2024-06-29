import { useState } from "react";
import { FaEllipsisVertical, FaMessage, FaGithub, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import {LuMail} from "react-icons/lu";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(isOpen => !isOpen)
    };

    const navLinks = [
        { link: 'Home', path: '#Home' },
        { link: 'About', path: '#About' },
        { link: 'Project', path: '#Project' },
        { link: 'Contact Me', path: '#Contact' },
    ];

    return (
        <>
            <nav className="flex items-center justify-between px-10 text-gray-300 pt-14 max-w-screen-2xl mx-auto">
                <a href="/" className="cursor-pointer"><img className="h-10 w-10 md:h-12 md:w-12" src="/logo.png"  alt="logo" /></a>

                <ul className="items-center hidden px-6 py-3 mr-4 space-x-10 text-sm bg-indigo-700 rounded-xl md:flex">
                    {navLinks.map(({ link, path }) => <a key={link} href={path} className="text-gray-300 uppercase hover:text-white">{link}</a>)}

                    <FaEllipsisVertical />
                
                    <div className="flex items-center space-x-6">
                        <a href="https://github.com/onojapeter" target="_blank">
                            <FaGithub className="text-2xl text-gray-400 cursor-pointer hover:text-gray-100" />
                        </a>
                        <a href="mailto:onojapeter90@gmail.com">
                            <LuMail className="text-2xl text-gray-400 cursor-pointer hover:text-gray-100" />
                        </a>
                    </div>
                </ul>

                {/* Menu for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={handleClick}>{isOpen ? <FaXmark className="fixed z-50 w-8 h-8 top-14 right-10" /> : <FaBarsStaggered className="w-8 h-8 text-gray-300" />}
                    </button>
                </div>
            </nav>

            {/* Mobile navlinks */}
            <div>
                <div className={`flex flex-col space-y-8 pt-24 p-8 px-20 bg-indigo-700 md:hidden ${isOpen ? 'block fixed top-0 right-0 left-0 m-6 rounded-xl z-20' : 'hidden'}`}>
                    {navLinks.map(({ link, path }) => <a key={link} href={path} className="text-gray-300 uppercase hover:text-white">{link}</a>)}

                    <div className="absolute flex justify-end gap-4 bottom-7 right-6">
                        <a href="https://github.com/onojapeter" target="_blank">
                            <FaGithub className="text-gray-400 cursor-pointer hover:text-gray-100 h-7 w-7 text-grey-400" />
                        </a>

                        <a href="mailto:onojapeter90@gmail.com">
                            <LuMail className="text-gray-400 cursor-pointer hover:text-gray-100 h-7 w-7 text-grey-400" />
                        </a>
                    </div>
                </div>

            </div>
            
        </>
    );
};

export default Navbar
