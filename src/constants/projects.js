import researchProjectPng from '@/assets/projects/researchPaperCopilot.png';
import themeProjectPng from '@/assets/projects/theme.png';
import expnesifyProjectPng from '@/assets/projects/expensify.png';
import todoProjectPng from '@/assets/projects/todo.png';

export const PROJECTS = [
    {
        id: 'research-copilot',
        topicName: 'Research Paper Copilot (Minor Project)',
        discription: 'A powerful AI-driven backend system that helps researchers discover, analyze, and summarize academic papers using a multi-agent architecture powered by Google\'s Gemini AI and arXiv API.',
        techStack: ['React', 'Figma', 'NodeJs', 'ExpressJs', 'MongoDB', 'Gemini', 'Arxiv'],
        extras: '\n                Role: Backend Developer',
        github: 'https://github.com/kunal-rathore-111/MINOR_PROJECT',
        deployLink: 'https://minor-deploy-64gx.vercel.app',
        readmore: 'will add later',
        image: researchProjectPng,
    },
    {
        id: 'vscode-theme',
        topicName: 'VSCode Dark Theme',
        discription: 'A modern dark theme for Visual Studio Code built with developers in mind. It offers balanced contrast, vibrant syntax colors, and smooth visual flow to keep focus during long coding hours. Designed for consistency across UI elements and readability in any environment.',
        techStack: ['JSON', 'VS', 'Cursor', 'Mdx', 'Git'],
        github: 'https://github.com/kunal-rathore-111/dark-dev-theme.git',
        deployLink: 'https://marketplace.visualstudio.com/items?itemName=KunalRathore.kunal-dark-dev-theme',
        readmore: 'will add later',
        image: themeProjectPng,
    },
    {
        id: 'todo-app',
        topicName: 'Todo Web-Application',
        discription: 'A full-stack Todo application featuring secure user authentication, and a responsive design for seamless task management. Track their daily tasks efficiently.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'ExpressJs', 'MongoDB', 'Postman'],
        extras: '\n        Demo Creds,\n        Email- kunalx1@gmail.com,\n                 Password- Kunal@1234',
        github: 'https://github.com/kunal-rathore-111/Todo_Project',
        deployLink: 'https://todo-project-kohl.vercel.app/',
        readmore: 'will add later',
        image: todoProjectPng,
    },
    {
        id: 'expensify',
        topicName: 'Expensify - Expense Tracker Application',
        discription: 'A comprehensive full-stack expense tracking application designed to help users manage their finances effectively. Featured with a robust backend API and an intuitive frontend interface to help users organize and monitor their expenses efficiently.',
        techStack: ['Npm', 'React', 'NodeJs', 'ExpressJs', 'MongoDB', 'Postman'],
        github: 'https://github.com/kunal-rathore-111/Expensify_Update_Project-2',
        deployLink: 'https://expensify-update-project-2-frontend.vercel.app',
        readmore: 'will add later',
        image: expnesifyProjectPng,
    },
];
