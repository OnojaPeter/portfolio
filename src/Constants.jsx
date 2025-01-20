import { SiMongodb } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import { SiEjs } from "react-icons/si"
import { SiJavascript } from "react-icons/si"


export const HeroContent1 = 'I am a passionate full stack Developer. I spend most of my time coding up things for the web, bringing designs to life, and learning algorithms.'
export const HeroContent3 = "I am a highly motivated and detail-oriented Full Stack Developer with a passion for creating innovative and visually appealing websites. Possesses a solid understanding of frontend technologies, such as React, CSS, and JavaScript for building dynamic user interfaces. Experienced in utilizing Node.js frameworks such as Express.js to develop RESTful APIs and integrate with databases like MongoDB and PostgreSql. Demonstrates a strong problem-solving mindset with the ability to debug and troubleshoot code efficiently. "
export const HeroContent2 = 'My goal is to deliver unique and innovative solutions to complex problems. If my portfolio interests you, or you need an enthusiastic developer on your team. '
export const logos = [
    { image: RiReactjsLine , bgColor: 'text-blue-400' },
    { image: FaNodeJs, bgColor: 'text-green-500' },
    { image: SiJavascript, bgColor: 'text-yellow-500' },
    { image: SiMongodb, bgColor: 'text-green-500' },
    { image: BiLogoPostgresql, bgColor: 'text-sky-700' },
    { image: SiTailwindcss, bgColor: 'text-cyan-500' },          
    // { image: SiEjs, bgColor: 'text-red-600' },
]
export const experiences = [
    {
        year: '2024 - present',
        role: 'fullstack developer/consultant',
        company: 'logdigital',
        description: 'I design and build responsive user interfaces, develop secure server-side logic, and manage databases to deliver scalable, high-performance applications. I collaborate with clients and teams to assess technical needs, recommend suitable solutions, and oversee project execution',
        technologies: ['react', 'Nodejs', 'Mongodb', 'tailwindCss']
    },
    {
        year: 'Jan 2024 - Nov 2024',
        role: 'frontend developer',
        company: 'Style IT',
        description: 'Frontend Developer at StyleIT, transforming innovative designs into seamless, functional code.Redefined the web development process by streamlining the implementation of user-focused interfaces and ensuring optimal performance across platforms.',
        technologies: ['react', 'Framer motion', 'tailwindCss']
    },
    {
        year: 'Dec 2022 - May 2024',
        role: 'fullstack developer',
        company: 'Diadem plc - California',
        description: 'Developed and maintained a bespoke e-commerce platform for Diadem plc, a company specializing inNigerian cuisine, employing React js for frontend and Node.js, Express.js, and MongoDB for backend.Integrated secure payment options, ensuring seamless transactions.',
        technologies: ['Nodejs', 'react', 'Mongodb', 'tailwindCss']
    },
    // {
    //     year: 'Nov 2023 - Jan 2024',
    //     role: 'fullstack developer',
    //     company: 'Drip Kustom',
    //     description: 'Developed a bespoke e-commerce platform for Drip Kustom, a company specializing in custom shoe designs, employing HTML, CSS, JavaScript for frontend and Node.js, Express.js, and MongoDB for backend. Integrated secure payment options, ensuring seamless transactions for custom shoe purchases.',
    //     technologies: ['Nodejs', 'js', 'react']
    // },
    {
        year: 'Aug 2022 - Jul 2023',
        role: 'backend developer',
        company: 'Oden Unlimited - United Kingdom',
        description: "Collaborated with a team to develop Oden unlimited, leveraging Node.js, MongoDB, and EJS. Responsible for translating design concepts into responsive web elements, managing debugging processes, and implementing features such as page rendering and automated reservation confirmation emails.",
        technologies: ['Nodejs', 'Mongodb']
    },
]

export const projects = [
    {
        title: 'Log Digital',
        image: 'logdigital.webp',
        description: 'LogDigital is a comprehensive marketing site offering a wide range of services including social media management, web development, and digital marketing. The expert team delivers tailored strategies to enhance your online presence, drive traffic, and boost engagement. ',
        technologies: ['Nodejs', 'react', 'js', 'tailwindCss'],
        liveLink: 'https://www.logdigitalltd.com',
        // githubLink: 'https://github.com/OnojaPeter/logdigital',
    },
    {
        title: 'Kreate',
        image: 'kreate.webp',
        description: 'Kreate is an innovative platform designed to streamline the job market by connecting employers and job seekers seamlessly. Employers can post job listings with detailed descriptions, requirements, and expectations, while job seekers can browse opportunities, submit applications, and manage their profiles. ',
        technologies: ['Nodejs','mongodb', 'js', 'tailwindCss'],
        liveLink: 'https://kreate.onrender.com',
        githubLink: 'https://github.com/OnojaPeter/kreate/',
    },
    {
        title: 'Monogram',
        image: 'monogram.webp',
        description: 'Monogram e-commerce website clone with the functionality of "Add to cart" made with react js',
        technologies: ['react', 'tailwindCss'],
        liveLink: 'https://monogram-five.vercel.app',
        githubLink: 'https://github.com/OnojaPeter/monogram-mock/',
    },
    {
        title: 'Finance Flow',
        image: 'finance.webp',
        description: 'Finance Flow is a sleek, user-friendly frontend platform designed for showcasing cryptocurrency trading and holding capabilities. It features detailed sections about pricing, tokens, about us, home page, accompanied by an insightful blog with the latest market trends and tips.',
        technologies: ['js', 'css'],
        liveLink: 'https://onojapeter.github.io/Finance-Flow/home.html',
        githubLink: 'https://github.com/OnojaPeter/Finance-Flow', 
    },
    // {
    //     title: 'Drip Kustom',
    //     image: 'drip-kustom.webp',
    //     description: 'Drip Kustom is an e-commerce platform specializing in unique, custom-designed sneakers. The site offers a wide range of stylish, personalized sneakers that caters to individual tastes and trends. ',
    //     technologies: ['Nodejs', 'js', 'tailwindCss'],
    //     liveLink: 'https://dripkustom.onrender.com',
    //     githubLink: 'https://github.com/OnojaPeter/dripkustom',
    // },
    // {
    //     title: 'Tech care',
    //     image: 'tech-care.webp',
    //     description: 'A sleek visually appealing website used to display hospital patients details like Name, Age, Gender, Bp and other things made accessible by their doctors',
    //     technologies: ['Api','Graph', 'tailwindCss'],
    //     liveLink: 'https://',
    //     githubLink: '',
    // },
    // {
    //     title: 'Finance Trade',
    //     image: 'finance2.webp',
    //     description: 'Finance Trade is a broker site created using Node and TailwindCSS, designed to help users invest their money and receive returns after 30 days. Currently, the platform includes signup, login, home, and about pages, with more features in development. This site showcases the initial stages of a robust investment platform, highlighting your frontend skills and ongoing backend development efforts.',
    //     technologies: ['Nodejs','js', 'react', 'tailwindCss'],
    //     liveLink: 'https://',
    //     githubLink: '',
    // },
    // {
    //     title: 'Backroad',
    //     image: 'backroads.webp',
    //     description: 'Backroad is a sleek single-page website crafted with React, designed for exploring various tours. With an intuitive and engaging interface, users can effortlessly browse through an array of tour options, complete with stunning visuals and detailed descriptions. Whether youre planning your next adventure or simply exploring possibilities, Backroad provides a seamless and enjoyable experience for discovering exciting tours.',
    //     technologies: ['react', 'css'],
    //     liveLink: 'https://backroad-app-eight.vercel.app/',
    //     githubLink: 'https://github.com/OnojaPeter/backroad-app',
    // },
    // {
    //     title: 'Portfolio',
    //     image: '', 
    //     description: 'Portfolio website built using React and TailwindCSS, designed to showcase my professional skills and completed projects. It highlights my expertise in web development, featuring detailed descriptions and visuals of various projects I have worked on using my knowledge of Backend and Frontend technologies. This portfolio serves as a display of my capabilities, including proficiency in frontend technologies, user interface design, and responsive web development.',
    //     technologies: ['react', 'taildwindCss'],
    //     liveLink: 'https://onoja-peter.vercel.app',
    //     githubLink: 'https://github.com/OnojaPeter/portfolio',
    // }
]