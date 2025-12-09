import researchProjectPng from '@/assets/projects/researchPaperCopilot.png';
import themeProjectPng from '@/assets/projects/theme.png';
import expnesifyProjectPng from '@/assets/projects/expensify.png';
import todoProjectPng from '@/assets/projects/todo.png';

export const PROJECTS = [
    {
        id: 'research-copilot',
        no: '1',
        topicName: 'Research Paper Copilot',
        discription: 'An AI-powered backend system for researchers to discover, analyze, and summarize academic papers. Features multi-agent architecture using Google\'s Gemini AI and arXiv API, streamlining research with intelligent insights and efficient data retrieval.',
        techStack: ['React', 'Figma', 'NodeJs', 'ExpressJs', 'MongoDB', 'Gemini', 'Arxiv'],
        extras: 'Role: Backend Developer, Team Superwiser',
        github: 'https://github.com/kunal-rathore-111/MINOR_PROJECT',
        deployLink: 'https://minor-deploy-64gx.vercel.app',
        readmore: 'will add later',
        image: researchProjectPng,
    },
    {
        no: '2',
        id: 'vscode-theme',
        topicName: 'Dark-Dev-Theme',
        discription: 'A sleek dark theme for Visual Studio Code designed for developers. Provides balanced contrast, vibrant syntax highlighting, and smooth visual flow to maintain focus during extended coding sessions. Ensures consistency and readability across all UI elements.',
        techStack: ['JSON', 'VS', 'Cursor', 'Mdx', 'Git'],
        github: 'https://github.com/kunal-rathore-111/dark-dev-theme.git',
        deployLink: 'https://marketplace.visualstudio.com/items?itemName=KunalRathore.dark-dev-theme',
        readmore: 'will add later',
        image: themeProjectPng,
    },
    {
        no: '3',
        id: 'expensify',
        topicName: 'Expensify - An Expense Tracker',
        discription: 'A robust full-stack expense tracking app to help users manage finances effectively. Includes a powerful backend API and intuitive frontend for organizing and monitoring expenses. Features secure data handling and responsive design for optimal user experience.',
        techStack: ['Npm', 'React', 'NodeJs', 'ExpressJs', 'MongoDB', 'Postman'],
        github: 'https://github.com/kunal-rathore-111/Expensify_Update_Project-2',
        deployLink: 'https://expensify-update-project-2-frontend.vercel.app',
        readmore: 'will add later',
        image: expnesifyProjectPng,
    },
    {
        no: '4',
        id: 'todo-app',
        topicName: 'Todo Web-Application',
        discription: 'A comprehensive full-stack Todo application with secure user authentication and responsive design. Enables seamless task management and daily tracking. Built with modern web technologies for efficient productivity and user-friendly interface across devices.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'ExpressJs', 'MongoDB', 'Postman'],
        extras: 'Demo Creds:\nEmail: kunalx1@gmail.com, Password: Kunal@1234',
        github: 'https://github.com/kunal-rathore-111/Todo_Project',
        deployLink: 'https://todo-project-kohl.vercel.app/',
        readmore: 'will add later',
        image: todoProjectPng,
    },

];
