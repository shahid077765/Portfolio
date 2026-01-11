
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'The very website you are looking at now! Built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/portfolio/800/600',
    link: '#project-portfolio'
  },
  {
    id: '2',
    title: 'Tic-Tac-Toe Game',
    description: 'A classic Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS. A fun project to practice fundamental logic.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    image: 'https://picsum.photos/seed/tictactoe/800/600',
    link: '#project-tic-tac-toe'
  },
  {
    id: '3',
    title: 'Simple Weather App',
    description: 'A web app that fetches and displays current weather data for a city using a public weather API to practice asynchronous JavaScript.',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    image: 'https://picsum.photos/seed/weather/800/600',
    link: '#project-weather-app'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Started my B.Tech Journey',
    company: 'RJIT, Gwalior',
    period: '2025 - Present',
    description: [
      'Began my formal education in Computer Science, diving deep into foundational concepts.',
      'Joined the college coding club to collaborate with peers and participate in hackathons.',
      'Eager to apply classroom knowledge to real-world projects.'
    ]
  },
  {
    id: 'e2',
    role: 'Self-Taught Developer',
    company: 'Online Learning Platforms',
    period: '2023 - 2024',
    description: [
      'Kicked off my web development journey with HTML, CSS, and JavaScript.',
      'Completed several online courses on platforms like Coursera and freeCodeCamp.',
      'Built my first few projects, including small games and utility apps.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 40, category: 'Frontend' },
  { name: 'TypeScript', level: 35, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 40, category: 'Frontend' },
  { name: 'Gemini API / AI', level: 30, category: 'Backend' },
  { name: 'Node.js', level: 30, category: 'Backend' },
  { name: 'Framer Motion', level: 30, category: 'Design' },
  { name: 'UI/UX Design', level: 35, category: 'Design' },
];

export const EDUCATION = {
  college: 'RJIT (Rustamji Institute of Technology)',
  location: 'Tekanpur, Gwalior',
  degree: 'B.Tech in Computer Science (First Year)',
  period: '2025 - 2029'
};