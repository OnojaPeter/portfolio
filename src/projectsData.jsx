const projects = [
    {
      id: 1,
      name: 'Kreate',
      technologies: [ 'Nodejs','MongoDb', 'javascript', 'CSS', 'tailwindCss', ],
      description: 'Kreate is an innovative platform designed to streamline the job market by connecting employers and job seekers seamlessly. Employers can post job listings with detailed descriptions, requirements, and expectations, while job seekers can browse opportunities, submit applications, and manage their profiles. With a user-friendly interface and advanced search capabilities, Kreate ensures that both parties find the perfect match efficiently.',
      liveLink: 'github',
      githubLink: '#',
    },
    {
      id: 2,
      name: 'Finance',
      technologies: ['html', 'CSS', 'javascript' ],
      description: 'Finance Flow is a sleek, user-friendly frontend platform designed for showcasing cryptocurrency trading and holding capabilities. It features detailed sections about pricing, tokens, about us, home page, accompanied by an insightful blog with the latest market trends and tips.',
      liveLink: '#',
      githubLink: '#', 
    },
    {
      id: 3,
      name: 'Drip Kustom',
      technologies: [ 'Nodejs', 'MongoDb', 'javascript', 'tailwindCss', 'CSS'],
      description: 'Drip Kustom is an e-commerce platform specializing in unique, custom-designed sneakers. Our site offers a wide range of stylish, personalized sneakers that caters to individual tastes and trends. Each pair is crafted with attention to detail, ensuring high quality and originality. Whether youre looking to make a fashion statement or find a one-of-a-kind gift, Drip Kustom has the perfect custom sneakers for you.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      name: 'Finance Trade',
      technologies: [ 'Nodejs', 'MongoDb', 'tailwindCss', 'javascript'],
      description: 'Finance Trade is a broker site created using Node and TailwindCSS, designed to help users invest their money and receive returns after 30 days. Currently, the platform includes signup, login, home, and about pages, with more features in development. This site showcases the initial stages of a robust investment platform, highlighting your frontend skills and ongoing backend development efforts.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      name: 'Backroad',
      technologies: ['html', 'CSS', 'react.js'],
      description: 'Backroad is a sleek single-page website crafted with React, designed for exploring various tours. With an intuitive and engaging interface, users can effortlessly browse through an array of tour options, complete with stunning visuals and detailed descriptions. Whether youre planning your next adventure or simply exploring possibilities, Backroad provides a seamless and enjoyable experience for discovering exciting tours.',
      liveLink: 'https://backroad-app-eight.vercel.app/',
      githubLink: '#',
    },
    {
      id: 6,
      name: 'Portfolio',
      technologies: [ 'react.js','tailwindCss', 'javascript'],
      description: 'Portfolio website built using React and TailwindCSS, designed to showcase my professional skills and completed projects. It highlights my expertise in web development, featuring detailed descriptions and visuals of various projects I have worked on using my knowledge of Backend and Frontend technologies. This portfolio serves as a display of my capabilities, including proficiency in frontend technologies, user interface design, and responsive web development.',
      liveLink: '#',
      githubLink: '#',
    },
];

function getTechColor(tech) {
    switch (tech.toLowerCase()) {
      case 'css':
        return 'bg-yellow-500 text-yellow-100';
      case 'react.js':
        return 'bg-green-700 text-green-300';
      case 'tailwindcss':
        return 'bg-blue-500 text-blue-100';
      case 'html':
        return 'bg-orange-500 text-orange-200';
      case 'javascript':
        return 'bg-pink-500 text-pink-200';
      case 'nodejs':
        return 'bg-green-600 text-green-100';
      case 'mongodb':
        return 'bg-green-900 text-green-100';
      default:
        return 'bg-gray-500 text-gray-300';
    }
}

// export default projects;
export { projects, getTechColor }