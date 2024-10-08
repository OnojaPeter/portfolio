const projects = [
    {
      id: 1,
      name: 'Log Digital',
      image: 'logdigital.webp',
      technologies: [ 'React', 'tailwindCss'],
      description: 'LogDigital is a comprehensive marketing site offering a wide range of services including social media management, web development, and digital marketing. Our expert team delivers tailored strategies to enhance your online presence, drive traffic, and boost engagement. From creating compelling websites to managing impactful social media campaigns, LogDigital provides the tools and expertise needed to elevate your brand in the digital landscape.',
      liveLink: 'https://logdigital.vercel.app',
      githubLink: 'https://github.com/OnojaPeter/logdigital',
    },
    {
      id: 2,
      name: 'Kreate',
      image: 'kreate.webp',
      technologies: [ 'Nodejs','MongoDb','CSS' ],
      description: 'Kreate is an innovative platform designed to streamline the job market by connecting employers and job seekers seamlessly. Employers can post job listings with detailed descriptions, requirements, and expectations, while job seekers can browse opportunities, submit applications, and manage their profiles. With a user-friendly interface and advanced search capabilities, Kreate ensures that both parties find the perfect match efficiently.',
      liveLink: 'https://kreate.onrender.com',
      githubLink: 'https://github.com/OnojaPeter/kreate/',
    },
    {
      id: 3,
      name: 'Finance',
      image: 'finance.webp',
      technologies: ['CSS', 'javascript' ],
      description: 'Finance Flow is a sleek, user-friendly frontend platform designed for showcasing cryptocurrency trading and holding capabilities. It features detailed sections about pricing, tokens, about us, home page, accompanied by an insightful blog with the latest market trends and tips.',
      liveLink: 'https://onojapeter.github.io/Finance-Flow/home.html',
      githubLink: 'https://github.com/OnojaPeter/Finance-Flow', 
    },
    {
      id: 4,
      name: 'Drip Kustom',
      image: 'drip-kustom.webp',
      technologies: [ 'Nodejs', 'MongoDb','CSS'],
      description: 'Drip Kustom is an e-commerce platform specializing in unique, custom-designed sneakers. Our site offers a wide range of stylish, personalized sneakers that caters to individual tastes and trends. Each pair is crafted with attention to detail, ensuring high quality and originality. Whether youre looking to make a fashion statement or find a one-of-a-kind gift, Drip Kustom has the perfect custom sneakers for you.',
      liveLink: 'https://dripkustom.onrender.com',
      githubLink: 'https://github.com/OnojaPeter/dripkustom',
    },
    {
      id: 5,
      name: 'Tech care',
      image: 'tech-care.webp',
      technologies: ['tailwindCss', 'javascript'],
      description: 'LogDigital is a comprehensive marketing site offering a wide range of services including social media management, web development, and digital marketing. Our expert team delivers tailored strategies to enhance your online presence, drive traffic, and boost engagement. From creating compelling websites to managing impactful social media campaigns, LogDigital provides the tools and expertise needed to elevate your brand in the digital landscape.',
      liveLink: 'https://',
      githubLink: '',
    },
    {
      id: 6,
      name: 'Finance Trade',
      image: 'finance2.webp',
      technologies: [ 'Nodejs', 'MongoDb'],
      description: 'Finance Trade is a broker site created using Node and TailwindCSS, designed to help users invest their money and receive returns after 30 days. Currently, the platform includes signup, login, home, and about pages, with more features in development. This site showcases the initial stages of a robust investment platform, highlighting your frontend skills and ongoing backend development efforts.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 7,
      name: 'Backroad',
      image: 'backroads.webp',
      technologies: [ 'react.js', 'CSS'],
      description: 'Backroad is a sleek single-page website crafted with React, designed for exploring various tours. With an intuitive and engaging interface, users can effortlessly browse through an array of tour options, complete with stunning visuals and detailed descriptions. Whether youre planning your next adventure or simply exploring possibilities, Backroad provides a seamless and enjoyable experience for discovering exciting tours.',
      liveLink: 'https://backroad-app-eight.vercel.app/',
      githubLink: 'https://github.com/OnojaPeter/backroad-app',
    },
    {
      id: 8,
      name: 'Portfolio',
      image: '.webp',
      technologies: [ 'react.js','tailwindCss'],
      description: 'Portfolio website built using React and TailwindCSS, designed to showcase my professional skills and completed projects. It highlights my expertise in web development, featuring detailed descriptions and visuals of various projects I have worked on using my knowledge of Backend and Frontend technologies. This portfolio serves as a display of my capabilities, including proficiency in frontend technologies, user interface design, and responsive web development.',
      liveLink: 'https://onoja-peter.vercel.app',
      githubLink: 'https://github.com/OnojaPeter/portfolio',
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