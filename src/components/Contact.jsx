import { MdSend } from "react-icons/md";
import Button from "./Button"


function Contact() {
    return (
        <div className="px-8 mx-auto mb-[224px] max-w-screen-2xl md:px-12" id="Contact">
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-3xl font-semibold text-center text-gray-200 uppercase font-poppins">Contact Me</h1>
                <p className="max-w-xl mb-10 text-lg text-center text-gray-400 font-lato">You might want to develop a website, application or discuss anything related. Feel free to leave a message below</p>
            </div>
            
            <form className="flex flex-col items-center mx-auto space-y-4">
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                    <label className="text-sm text-gray-400" htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" className="px-3 py-3 text-gray-300 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder:text-sm placeholder:text-gray-600" />
                </div>
                
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                <label className="text-sm text-gray-400" htmlFor="name">Email</label>
                <input type="email" id="name" placeholder="Email" className="px-3 py-3 text-gray-300 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder:text-sm placeholder:text-gray-600" />
                </div>
                
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                <label className="text-sm text-gray-400" htmlFor="message">Message</label>
                <textarea rows={4} type="text" name="message" id="message" placeholder="Message" className="px-3 py-3 text-gray-300 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder:text-sm placeholder:text-gray-600"></textarea>
               </div> 
            </form>
            <div className="mt-8 text-center">
                <Button>
                    <div className="flex items-center gap-1">
                        <p className="text-sm font-lato text-[16px]">Send</p>
                        <MdSend className="w-5 h-5" />
                    </div>
                </Button>
            </div>  
        </div>
    )
}

export default Contact
