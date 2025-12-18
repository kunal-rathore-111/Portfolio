import researchProjectPng from '@/assets/projects/researchPaperCopilot.png';
import themeProjectPng from '@/assets/projects/theme.png';
import expnesifyProjectPng from '@/assets/projects/expensify.png';
import todoProjectPng from '@/assets/projects/todo.png';

export const PROJECTS_INFO = {
    'research-copilot': {
        id: 'research-copilot',
        title: 'Research Paper Copilot',
        tagline: 'Your AI-powered task assistant.',
        role: 'Backend Developer, Team Supervisor',
        github: 'https://github.com/kunal-rathore-111/MINOR_PROJECT',
        deployLink: 'https://minor-deploy-64gx.vercel.app',
        image: researchProjectPng,
        description: 'Research Paper Copilot is an intelligent backend system designed to revolutionize how researchers interact with academic literature. Built with cutting-edge AI technology, it serves as your personal research assistant.',
        keyFeatures: [
            {
                title: 'Multi-Agent Architecture',
                description: "Leverages Google's Gemini AI to power multiple specialized agents that work together seamlessly. Each agent handles specific tasks like paper discovery, analysis, and summarization."
            },
            {
                title: 'arXiv Integration',
                description: 'Direct integration with arXiv API provides access to millions of research papers across various scientific disciplines. Find exactly what you need, when you need it.'
            },
            {
                title: 'Intelligent Summarization',
                description: 'Advanced natural language processing transforms lengthy academic papers into concise, actionable insights without losing critical information.'
            },
            {
                title: 'Efficient Data Retrieval',
                description: 'Optimized backend architecture ensures fast, reliable access to research data, making your workflow smoother and more productive.'
            }
        ],
        roleDetails: 'As Backend Developer and Team Supervisor, I architected the entire backend infrastructure, designed the multi-agent system, and led a team of developers to bring this vision to life. I was responsible for API integrations, database design, and ensuring the system\'s scalability and performance.',
        technicalHighlights: 'The system employs a microservices architecture with dedicated services for paper retrieval, AI processing, and data management. We utilized modern backend technologies and best practices to ensure maintainability and extensibility.',
        impact: 'Research Paper Copilot has helped researchers save countless hours in literature review, enabling them to focus on what matters most—their research. The intelligent summarization feature alone has reduced paper review time by up to 70%.'
    },
    'vscode-theme': {
        id: 'vscode-theme',
        title: 'Dark-Dev-Theme',
        tagline: 'Focus-centric coding environment.',
        role: 'UI/UX Designer, Lead Developer',
        github: 'https://github.com/kunal-rathore-111/dark-dev-theme.git',
        deployLink: 'https://marketplace.visualstudio.com/items?itemName=KunalRathore.dark-dev-theme',
        image: themeProjectPng,
        description: 'A sleek dark theme for Visual Studio Code designed for developers. Provides balanced contrast, vibrant syntax highlighting, and smooth visual flow to maintain focus during extended coding sessions.',
        keyFeatures: [
            {
                title: 'Optimized Contrast',
                description: 'Carefully selected color palette that reduces eye strain while maintaining clear distinction between different code elements.'
            },
            {
                title: 'Vibrant Syntax Highlighting',
                description: 'Semantic highlighting for multiple programming languages including JavaScript, Python, C++, and more, making code structures easily digestible.'
            },
            {
                title: 'UI Consistency',
                description: 'Unified appearance across all VS Code UI components, including the sidebar, terminal, and activity bar, for a seamless developer experience.'
            }
        ],
        roleDetails: 'I designed the color palette from scratch, focusing on color theory for long-term coding comfort. I also handled the theme JSON configuration and published it to the VS Code Marketplace.',
        technicalHighlights: 'Built using the VS Code Extension API. Utilizes modern JSON-based theme configuration and semantic token mapping for precise color control.',
        impact: 'Downloaded by hundreds of developers on the marketplace, providing a focused and aesthetic environment for various development workflows.'
    },
    'expensify': {
        id: 'expensify',
        title: 'Expensify - An Expense Tracker',
        tagline: 'Master your personal finances.',
        role: 'Full Stack Developer',
        github: 'https://github.com/kunal-rathore-111/Expensify_Update_Project-2',
        deployLink: 'https://expensify-update-project-2-frontend.vercel.app',
        image: expnesifyProjectPng,
        description: 'A robust full-stack expense tracking app to help users manage finances effectively. Includes a powerful backend API and intuitive frontend for organizing and monitoring expenses.',
        keyFeatures: [
            {
                title: 'Real-time Tracking',
                description: 'Log and categorize expenses instantly with an intuitive interface and real-time dashboard updates.'
            },
            {
                title: 'Advanced Filtering',
                description: 'Filter and search through historical data by date, category, or amount to get clear insights into spending habits.'
            },
            {
                title: 'Secure Authentication',
                description: 'User accounts protected by JWT-based authentication and secure password hashing for data privacy.'
            }
        ],
        roleDetails: 'I built both the React frontend and the Node.js/Express backend. I designed the MongoDB schema for efficient expense storage and implemented the RESTful API endpoints.',
        technicalHighlights: 'Features a MERN stack architecture. Implements state management for responsive UI and uses Chart.js for visual data representation.',
        impact: 'Enables users to gain better control over their finances, reducing financial stress through organized tracking and clear visualization of spending.'
    },
    'todo-app': {
        id: 'todo-app',
        title: 'Todo Web-Application',
        tagline: 'Simplify your daily productivity.',
        role: 'Full Stack Developer',
        github: 'https://github.com/kunal-rathore-111/Todo_Project',
        deployLink: 'https://todo-project-kohl.vercel.app/',
        image: todoProjectPng,
        description: 'A comprehensive full-stack Todo application with secure user authentication and responsive design. Enables seamless task management and daily tracking.',
        keyFeatures: [
            {
                title: 'Task Categorization',
                description: 'Organize tasks into different categories or projects for better structure and priority management.'
            },
            {
                title: 'User Profiles',
                description: 'Personalized experience with user-specific task lists and settings, secured by robust authentication.'
            },
            {
                title: 'Cross-device Sync',
                description: 'Access and manage your tasks from any device with a responsive UI that adapts to different screen sizes.'
            }
        ],
        roleDetails: 'Responsible for end-to-end development. I implemented the frontend using React and the backend with Express.js and MongoDB. I also integrated demo credentials for easy onboarding.',
        technicalHighlights: 'Utilizes MongoDB for persistent storage, Express for the backend server, and React for a dynamic, reactive user interface. Incorporates JWT for secure session management.',
        impact: 'Helps users stay organized and productive by providing a reliable and easy-to-use platform for task management.'
    }
};
