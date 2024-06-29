const projects = [
    {
      id: 1,
      name: 'Eat-n-Split',
      technologies: ['CSS', 'react.js'],
      description: 'This application allows you to split the bills with your friends when you go out eating.',
      liveLink: 'github',
      githubLink: '#',
    },
    {
      id: 2,
      name: 'WorldWise',
      technologies: ['html', 'CSS', 'react.js'],
      description: 'A travel app for locking in all the cities and countries you have visited and your travel experience.',
      liveLink: '#',
      githubLink: '#', 
    },
    {
      id: 3,
      name: 'Fast Pizza',
      technologies: ['tailwindCss', 'react.js', 'redux'],
      description: 'Order Pizza of different variety from the comfort of you home and get it delivered to you in your preferred location.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      name: 'Atomic Blog',
      technologies: ['CSS', 'react.js'],
      description: 'A blog that talks about everything, from entertainment to fashion to sport and lifestyle.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      name: 'Bankist',
      technologies: ['html', 'CSS', 'javascript'],
      description: 'A virtual bank for carrying out your financial transactions. From saving, to withdrawal to taking loan.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      name: 'Forkify',
      technologies: ['html', 'CSS', 'javascript'],
      description: 'A virtual bank for carrying out your financial transactions. From saving, to withdrawal to taking loan.',
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
      case 'redux':
        return 'bg-purple-500 text-purple-200';
      case 'html':
        return 'bg-orange-500 text-orange-200';
      case 'javascript':
        return 'bg-pink-500 text-pink-200';
      default:
        return 'bg-gray-500 text-gray-300';
    }
}

// export default projects;
export { projects, getTechColor }