import { useState, useEffect } from "react"
import LoadingWrapper from "./components/LoadingWrapper"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About1 from "./components/About1"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Project1 from "./components/Project1"

function App() {

  // Loading spinner component
  // const Spinner = () => (
  //   <div className="flex justify-center items-center min-h-screen">
  //     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
  //   </div>
  // );

  return (
    <div className="overflow-hidden text-neutral-100">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About1 />
        <Technologies />
        <Experience />
        <Project1 />
        {/* <About /> */}
        <Contact />
      </div>
      
    </div>
  )
}

export default App
