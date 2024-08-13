import { useState } from 'react';
import { motion } from "framer-motion"
import axios from 'axios';
import { MdSend } from "react-icons/md";
// import Button from "./Button"


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // return alert('clicked')
            const res = await axios.post('https://onoja-peter-back.vercel.app/send-email', { name, email, message });
            setTimeout(() => {
                setResponse({ type: 'success', message: res.data });
                setName('');
                setEmail('');
                setMessage('');
            }, 1000);
        } catch (error) {
            setResponse({ type: 'error', message: 'Failed to send message. Please try again later.' });
            // console.log(response)
        } finally{
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            
            setTimeout(() => {
                setResponse(null);
            }, 7000);
        }
    };

    return (
        <section className=" mx-auto mb-[50px] md:mb-[80px] " id="Contact">
            <div className="flex flex-col items-center gap-6">
                <motion.h1 
                    whileInView={{ y: 0, opacity: 1}}
                    animate={{ y: -100, opacity: 0}}
                    transition={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="text-4xl text-center mt-5 lg:mt-20">
                        Contact Me
                </motion.h1>

                <motion.p 
                    whileInView={{ y: 0, opacity: 1}}
                    animate={{ y: 50, opacity: 0}}
                    transition={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="max-w-lg mb-10 text-center text-neutral-400">
                        You might want to develop a website, application or discuss anything related. Feel free to leave a message below
                </motion.p>
            </div>
            
            {response && (
                <div className={`fixed top-0 left-0 w-full ${response.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white py-3 text-center`}>
                    <p>{response.message}</p>
                </div>)
            }

            <form  onSubmit={handleSubmit} className="flex flex-col items-center mx-auto space-y-4">
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                    <label className="text-sm text-neutral-200" htmlFor="name">Name :</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required  type="text" id="name" name='name' placeholder="Name" className="px-3 py-3 text-gray-100 bg-transparent border border-neutral-400 shadow-2xl rounded-lg focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-gray-400" />
                </div>
                
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                <label className="text-sm text-neutral-200" htmlFor="email">Email :</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required  type="email" id="email" name='email' placeholder="Email" className="px-3 py-3 text-gray-100 bg-transparent border border-neutral-400 shadow-2xl rounded-lg focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-gray-400" />
                </div>
                
                <div className="flex flex-col w-full max-w-lg gap-2 mb-2">
                <label className="text-sm text-neutral-200" htmlFor="message">Message :</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required  rows={4} type="text" name="message" id="message" placeholder="Message" className="px-3 py-3 text-gray-100 bg-transparent border border-neutral-400 shadow-2xl rounded-lg focus:outline-none focus:ring-0 placeholder:text-sm placeholder:text-gray-400"></textarea>
               </div> 

               <motion.div 
                    whileInView={{ x: 0, opacity: 1}}
                    animate={{ x: -100, opacity: 0}}
                    transition={{duration: 1.5}}
                    viewport={{ once: true }}
                    className="text-center">
                        <button className='bg-neutral-200 transition-all duration-300 px-6 text-purple-700 rounded-full hover:bg-purple-800 hover:text-neutral-200'>
                            <div className="flex items-center gap-1">
                                
                                    {!loading ? 
                                        <div className='flex gap-2 items-center'><p className="text-sm font-lato text-[16px] px-3 py-3">Send</p> <MdSend className="w-5 h-5" /></div>
                                        : 
                                        (<div className='flex gap-2 py-3 cursor-not-allowed'>
                                            <p className="text-sm font-lato text-[16px]">Sending...</p>
                                            <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014.01 4.01h-.011M20 12c0-4.418-3.582-8-8-8v4c2.764 0 5.1 1.432 6.491 3.603M4.01 19.99A8.004 8.004 0 0112.001 20v4c4.418 0 8-3.582 8-8h-4z"></path>
                                            </svg>
                                        </div>) 
                                    }
                                
                            </div>
                        </button>
                </motion.div>
            </form>
              
        </section>
    )
}

export default Contact
