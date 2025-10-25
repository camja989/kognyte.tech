// Course Data
const coursesData = [
    // YEAR 1 - SEMESTER 1
    {
        id: 'CS101',
        code: 'CS101',
        name: 'Introduction to Programming with Python',
        year: 1,
        semester: 1,
        weeks: 13,
        objectives: [
            'Master fundamental programming concepts',
            'Understand data structures and algorithms basics',
            'Write clean, maintainable code'
        ],
        weeklyTopics: [
            'Variables, data types, operators, input/output',
            'Control flow (if/else, loops)',
            'Functions and scope',
            'Lists and tuples',
            'Dictionaries and sets',
            'Midterm Project: Build a text-based blackjack game',
            'File I/O and error handling',
            'Object-oriented programming basics (classes)',
            'OOP continued (inheritance, polymorphism)',
            'Modules and packages',
            'Introduction to algorithms (searching, sorting)',
            'Final Project: Poker hand evaluator',
            'Code review and optimization'
        ],
        resources: 'CS50 Python, freeCodeCamp Python course'
    },
    {
        id: 'CS102',
        code: 'CS102',
        name: 'Web Fundamentals (HTML/CSS/JavaScript)',
        year: 1,
        semester: 1,
        weeks: 13,
        objectives: [
            'Build responsive web pages',
            'Understand DOM manipulation',
            'Create interactive user interfaces'
        ],
        weeklyTopics: [
            'HTML basics (structure, semantic HTML)',
            'CSS basics (selectors, box model, flexbox)',
            'CSS Grid and responsive design',
            'Project 1: Build a portfolio website',
            'JavaScript basics (variables, functions, events)',
            'DOM manipulation and event handling',
            'JavaScript objects and arrays',
            'Midterm Project: Interactive card game UI',
            'ES6+ features (arrow functions, destructuring, promises)',
            'Fetch API and asynchronous JavaScript',
            'Local storage and browser APIs',
            'Final Project: Poker table interface (no backend)',
            'Accessibility and best practices'
        ],
        resources: 'freeCodeCamp Responsive Web Design, MDN Web Docs'
    },
    {
        id: 'CS103',
        code: 'CS103',
        name: 'Data Structures and Algorithms',
        year: 1,
        semester: 1,
        weeks: 13,
        objectives: [
            'Implement fundamental data structures',
            'Analyze algorithm complexity',
            'Solve computational problems efficiently'
        ],
        weeklyTopics: [
            'Big O notation and complexity analysis',
            'Arrays and linked lists',
            'Stacks and queues',
            'Hash tables and hash maps',
            'Assignment: Implement custom data structures',
            'Trees (binary trees, BST)',
            'Tree traversals and operations',
            'Midterm Exam: Practical coding test',
            'Sorting algorithms (bubble, merge, quick)',
            'Searching algorithms (binary search, BFS, DFS)',
            'Recursion and dynamic programming',
            'Algorithm optimization techniques',
            'Final Project: Efficient poker hand ranking system'
        ],
        resources: 'MIT OCW 6.006, LeetCode Easy problems'
    },
    {
        id: 'CS104',
        code: 'CS104',
        name: 'Introduction to Databases',
        year: 1,
        semester: 1,
        weeks: 13,
        objectives: [
            'Design relational databases',
            'Write complex SQL queries',
            'Understand database normalization'
        ],
        weeklyTopics: [
            'Database concepts and relational model',
            'SQL basics (SELECT, WHERE, ORDER BY)',
            'Joins and relationships',
            'Aggregations and GROUP BY',
            'Project 1: Design a user database schema',
            'Subqueries and nested queries',
            'Database normalization (1NF, 2NF, 3NF)',
            'Indexes and query optimization',
            'Midterm Project: Build a game statistics database',
            'Transactions and ACID properties',
            'Introduction to NoSQL (MongoDB basics)',
            'Database design patterns',
            'Final Project: Complete poker room database design'
        ],
        resources: 'Stanford DB Course, Mode Analytics SQL Tutorial'
    },
    // YEAR 1 - SEMESTER 2
    {
        id: 'CS201',
        code: 'CS201',
        name: 'Backend Development with Node.js',
        year: 1,
        semester: 2,
        weeks: 13,
        objectives: [
            'Build RESTful APIs',
            'Implement server-side logic',
            'Handle authentication and authorization'
        ],
        weeklyTopics: [
            'Node.js fundamentals and npm',
            'Express.js basics (routing, middleware)',
            'Request/response handling, REST principles',
            'Connecting to databases (PostgreSQL with Node)',
            'Project 1: Build a CRUD API',
            'Authentication (JWT, bcrypt)',
            'Authorization and user roles',
            'Midterm Project: User management API',
            'Error handling and validation',
            'File uploads and processing',
            'API security best practices',
            'Testing APIs (Jest, Supertest)',
            'Final Project: Poker game backend API'
        ],
        resources: 'freeCodeCamp Node.js, Traversy Media Node tutorials'
    },
    {
        id: 'CS202',
        code: 'CS202',
        name: 'Frontend Frameworks (React)',
        year: 1,
        semester: 2,
        weeks: 13,
        objectives: [
            'Build single-page applications',
            'Manage application state',
            'Create reusable components'
        ],
        weeklyTopics: [
            'React fundamentals (components, JSX)',
            'Props and state',
            'Event handling and forms',
            'Project 1: Interactive card display',
            'Lifecycle methods and hooks (useState, useEffect)',
            'Component composition and patterns',
            'React Router for navigation',
            'Midterm Project: Multi-page poker application',
            'State management with Context API',
            'Introduction to Redux',
            'Fetching data and API integration',
            'Performance optimization',
            'Final Project: Complete poker table UI with React'
        ],
        resources: 'React documentation, Scrimba React course, freeCodeCamp React'
    },
    {
        id: 'CS203',
        code: 'CS203',
        name: 'Version Control and Collaboration',
        year: 1,
        semester: 2,
        weeks: 13,
        objectives: [
            'Master Git workflows',
            'Collaborate on code projects',
            'Understand CI/CD basics'
        ],
        weeklyTopics: [
            'Git basics (init, add, commit, push)',
            'Branching and merging strategies',
            'GitHub/GitLab workflows',
            'Project 1: Contribute to open-source project',
            'Resolving merge conflicts',
            'Pull requests and code review',
            'Git best practices and conventions',
            'Midterm: Collaborative coding project',
            'Introduction to CI/CD (GitHub Actions)',
            'Automated testing pipelines',
            'Deployment workflows',
            'Documentation and README best practices',
            'Final Project: Set up complete Git workflow for poker app'
        ],
        resources: 'Git documentation, freeCodeCamp Git course, GitHub Learning Lab'
    },
    // YEAR 2 - SEMESTER 1
    {
        id: 'CS301',
        code: 'CS301',
        name: 'Real-Time Web Applications',
        year: 2,
        semester: 1,
        weeks: 13,
        objectives: [
            'Implement WebSocket communication',
            'Build multiplayer experiences',
            'Manage real-time state synchronization'
        ],
        weeklyTopics: [
            'Introduction to WebSockets vs HTTP',
            'Socket.io basics (client and server)',
            'Emitting and listening to events',
            'Project 1: Real-time chat application',
            'Room/namespace concepts',
            'Broadcasting and private messages',
            'State synchronization strategies',
            'Midterm Project: Multiplayer tic-tac-toe',
            'Handling disconnections and reconnections',
            'Scalability considerations',
            'Security in real-time applications',
            'Performance optimization',
            'Final Project: Real-time poker game (2-6 players)'
        ],
        resources: 'Socket.io documentation, Traversy Media WebSocket tutorials'
    },
    {
        id: 'CS302',
        code: 'CS302',
        name: 'Game Logic and State Machines',
        year: 2,
        semester: 1,
        weeks: 13,
        objectives: [
            'Design complex game logic',
            'Implement finite state machines',
            'Create poker algorithms'
        ],
        weeklyTopics: [
            'State machine concepts and patterns',
            'Poker rules deep dive (Texas Hold\'em)',
            'Hand evaluation algorithms',
            'Project 1: Hand ranking system',
            'Pot calculation and side pots',
            'Betting rounds and action validation',
            'Midterm Project: Complete poker engine',
            'Tournament structures (blinds, payouts)',
            'Cryptographically secure RNG',
            'Card shuffling algorithms',
            'Game state persistence',
            'Player timing and timeouts',
            'Final Project: Full poker game engine with tests'
        ],
        resources: 'Poker algorithm GitHub repos, poker rules documentation'
    },
    {
        id: 'CS303',
        code: 'CS303',
        name: 'Blockchain and Cryptocurrency Fundamentals',
        year: 2,
        semester: 1,
        weeks: 13,
        objectives: [
            'Understand blockchain technology',
            'Implement Bitcoin transactions',
            'Work with cryptocurrency APIs'
        ],
        weeklyTopics: [
            'Blockchain basics and distributed ledgers',
            'Bitcoin protocol overview',
            'Public/private keys and digital signatures',
            'Project 1: Generate Bitcoin addresses',
            'Transaction structure and UTXOs',
            'Bitcoin testnet setup and faucets',
            'Midterm Project: Testnet wallet checker',
            'Bitcoin APIs (Blockchain.com, BlockCypher)',
            'Creating and broadcasting transactions',
            'Confirmation and finality',
            'Lightning Network introduction',
            'Payment processing patterns',
            'Final Project: Deposit/withdrawal system (testnet)'
        ],
        resources: 'MIT Blockchain course, Princeton Cryptocurrency course, Bitcoin.org'
    },
    {
        id: 'CS304',
        code: 'CS304',
        name: 'Database Architecture and Optimization',
        year: 2,
        semester: 1,
        weeks: 13,
        objectives: [
            'Design scalable database systems',
            'Optimize query performance',
            'Implement caching strategies'
        ],
        weeklyTopics: [
            'Advanced SQL queries and window functions',
            'Index strategies and query plans',
            'Database performance tuning',
            'Project 1: Optimize slow queries',
            'Replication and sharding',
            'Caching with Redis',
            'Midterm Project: Implement caching layer',
            'Database security (injection prevention)',
            'Connection pooling and management',
            'NoSQL patterns for gaming applications',
            'Time-series data for game history',
            'Backup and recovery strategies',
            'Final Project: Scalable poker database architecture'
        ],
        resources: 'Hussein Nasser YouTube, PostgreSQL documentation'
    },
    // YEAR 2 - SEMESTER 2
    {
        id: 'CS401',
        code: 'CS401',
        name: 'Application Security',
        year: 2,
        semester: 2,
        weeks: 13,
        objectives: [
            'Identify common vulnerabilities',
            'Implement security best practices',
            'Protect against attacks'
        ],
        weeklyTopics: [
            'OWASP Top 10 overview',
            'SQL injection and prevention',
            'XSS and CSRF attacks',
            'Project 1: Security audit of existing app',
            'Authentication security (hashing, salting)',
            'Session management and JWT security',
            'Midterm Project: Implement secure auth system',
            'Input validation and sanitization',
            'Rate limiting and DDoS protection',
            'HTTPS and SSL/TLS',
            'Secure API design',
            'Security testing and penetration basics',
            'Final Project: Security-hardened poker application'
        ],
        resources: 'OWASP resources, Web Security Academy (PortSwigger)'
    },
    {
        id: 'CS402',
        code: 'CS402',
        name: 'Cloud Deployment and DevOps',
        year: 2,
        semester: 2,
        weeks: 13,
        objectives: [
            'Deploy applications to cloud platforms',
            'Implement CI/CD pipelines',
            'Monitor production systems'
        ],
        weeklyTopics: [
            'Cloud platforms overview (AWS, GCP, Azure)',
            'Virtual machines and containers',
            'Docker basics (images, containers)',
            'Project 1: Dockerize poker application',
            'Docker Compose for multi-container apps',
            'Introduction to Kubernetes (optional)',
            'Midterm Project: Deploy to cloud platform',
            'CI/CD with GitHub Actions',
            'Automated testing in pipelines',
            'Environment variables and secrets management',
            'Monitoring and logging (basics)',
            'Load balancing and scaling',
            'Final Project: Full deployment pipeline'
        ],
        resources: 'TechWorld with Nana, AWS Free Tier, Docker documentation'
    },
    {
        id: 'CS403',
        code: 'CS403',
        name: 'Software Testing and Quality Assurance',
        year: 2,
        semester: 2,
        weeks: 13,
        objectives: [
            'Write comprehensive tests',
            'Implement TDD practices',
            'Ensure code quality'
        ],
        weeklyTopics: [
            'Testing fundamentals (unit, integration, E2E)',
            'Jest for JavaScript testing',
            'Writing testable code',
            'Project 1: Unit tests for poker engine',
            'Test-driven development (TDD)',
            'Mocking and stubbing',
            'Midterm Project: TDD poker feature',
            'Integration testing APIs',
            'E2E testing with Cypress',
            'Testing React components',
            'Code coverage and quality metrics',
            'Performance testing basics',
            'Final Project: Complete test suite for poker app'
        ],
        resources: 'Jest documentation, Cypress documentation, freeCodeCamp testing courses'
    },
    // YEAR 3 - SEMESTER 1
    {
        id: 'CS501',
        code: 'CS501',
        name: 'Advanced Bitcoin Integration',
        year: 3,
        semester: 1,
        weeks: 13,
        objectives: [
            'Implement production-ready Bitcoin features',
            'Handle complex transaction scenarios',
            'Integrate payment processors'
        ],
        weeklyTopics: [
            'Review and mainnet vs testnet',
            'HD wallets and derivation paths',
            'Multi-signature wallets',
            'Project 1: Implement HD wallet system',
            'Transaction fee estimation',
            'Replace-by-fee (RBF) and CPFP',
            'Midterm Project: Dynamic fee system',
            'Lightning Network integration',
            'Payment channels and invoices',
            'Webhook handling for confirmations',
            'Cold storage and hot wallet management',
            'Security auditing crypto code',
            'Final Project: Production-ready Bitcoin integration'
        ],
        resources: 'Bitcoin Developer Guide, BTCPay Server documentation'
    },
    {
        id: 'CS502',
        code: 'CS502',
        name: 'Full-Stack Integration',
        year: 3,
        semester: 1,
        weeks: 13,
        objectives: [
            'Connect all application layers',
            'Implement complete features end-to-end',
            'Optimize full-stack performance'
        ],
        weeklyTopics: [
            'Architecture review and planning',
            'API design for poker features',
            'Frontend-backend integration patterns',
            'Project 1: User registration flow (full-stack)',
            'WebSocket integration with React',
            'Real-time game state management',
            'Midterm Project: Complete game flow',
            'Bitcoin integration with UI',
            'Transaction history and display',
            'Error handling across stack',
            'Performance optimization (caching, lazy loading)',
            'Cross-browser testing',
            'Final Project: Fully integrated poker room'
        ],
        resources: 'Full-stack project tutorials, your accumulated knowledge'
    },
    {
        id: 'CS503',
        code: 'CS503',
        name: 'System Design and Scalability',
        year: 3,
        semester: 1,
        weeks: 13,
        objectives: [
            'Design scalable architectures',
            'Handle high-traffic scenarios',
            'Implement distributed systems concepts'
        ],
        weeklyTopics: [
            'System design fundamentals',
            'Load balancing strategies',
            'Database replication and sharding',
            'Project 1: Design scalable poker system',
            'Caching strategies (CDN, Redis)',
            'Message queues and async processing',
            'Midterm Project: Implement queue system',
            'Microservices vs monolith',
            'Rate limiting and throttling',
            'Session management at scale',
            'Monitoring and observability',
            'Disaster recovery planning',
            'Final Project: Scalability document and implementation'
        ],
        resources: 'System Design YouTube channels (Gaurav Sen, Tech Dummies)'
    },
    {
        id: 'CS504',
        code: 'CS504',
        name: 'User Experience and Interface Design',
        year: 3,
        semester: 1,
        weeks: 13,
        objectives: [
            'Design intuitive interfaces',
            'Implement responsive designs',
            'Optimize user experience'
        ],
        weeklyTopics: [
            'UX fundamentals for gaming',
            'User research and personas',
            'Wireframing and prototyping',
            'Project 1: Poker UI mockups',
            'Visual design principles',
            'Animations and transitions',
            'Midterm Project: Polished poker table',
            'Mobile-responsive design',
            'Accessibility (WCAG guidelines)',
            'Performance optimization (loading, rendering)',
            'User testing and feedback',
            'A/B testing concepts',
            'Final Project: Complete UI/UX overhaul'
        ],
        resources: 'Google UX Design course, Nielsen Norman Group articles'
    },
    // YEAR 3 - SEMESTER 2
    {
        id: 'CS601',
        code: 'CS601',
        name: 'Advanced Game Features',
        year: 3,
        semester: 2,
        weeks: 13,
        objectives: [
            'Implement tournament systems',
            'Add social features',
            'Create admin tools'
        ],
        weeklyTopics: [
            'Tournament structures and scheduling',
            'Blind levels and prize pools',
            'Project 1: Tournament registration system',
            'Player statistics and leaderboards',
            'Achievement and badge systems',
            'Midterm Project: Stats dashboard',
            'Chat and social features',
            'Friend lists and invitations',
            'Admin dashboard for game management',
            'Reporting and moderation tools',
            'Analytics and player insights',
            'Responsible gaming features',
            'Final Project: Complete feature suite'
        ],
        resources: 'Gaming platform best practices, competitor analysis'
    },
    {
        id: 'CS602',
        code: 'CS602',
        name: 'Legal, Compliance, and Business',
        year: 3,
        semester: 2,
        weeks: 13,
        objectives: [
            'Understand gambling regulations',
            'Implement compliance measures',
            'Plan business strategy'
        ],
        weeklyTopics: [
            'Online gambling laws overview',
            'Licensing requirements by jurisdiction',
            'Assignment: Research target market regulations',
            'KYC (Know Your Customer) implementation',
            'AML (Anti-Money Laundering) requirements',
            'Midterm Project: Compliance checklist',
            'Responsible gaming features',
            'Self-exclusion systems',
            'Terms of service and privacy policy',
            'Payment processing regulations',
            'Tax implications and reporting',
            'Business model and monetization',
            'Final Project: Compliance and business plan'
        ],
        resources: 'Gaming commission websites, legal research'
    },
    {
        id: 'CS603',
        code: 'CS603',
        name: 'Capstone Project - Bitcoin Poker Room',
        year: 3,
        semester: 2,
        weeks: 13,
        objectives: [
            'Integrate all learned skills',
            'Build production-ready application',
            'Demonstrate professional competency'
        ],
        weeklyTopics: [
            'Project planning and architecture review',
            'Sprint 1 - Core infrastructure setup',
            'Sprint 2 - User authentication and profiles',
            'Sprint 3 - Poker game engine integration',
            'Sprint 4 - Real-time multiplayer',
            'Sprint 5 - Bitcoin integration (testnet)',
            'Mid-Project Review and Demo',
            'Sprint 6 - UI/UX polish',
            'Sprint 7 - Security hardening',
            'Sprint 8 - Testing and bug fixes',
            'Sprint 9 - Performance optimization',
            'Sprint 10 - Documentation and deployment',
            'Final Presentation and Code Review'
        ],
        resources: 'Your accumulated knowledge and skills'
    }
];

// Storage functions
function saveProgress(progress) {
    localStorage.setItem('uuProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('uuProgress');
    if (saved) {
        return JSON.parse(saved);
    }
    // Initialize default progress
    const defaultProgress = {
        startDate: null,
        studentName: '',
        completedWeeks: {},
        courseGrades: {}
    };
    coursesData.forEach(course => {
        defaultProgress.completedWeeks[course.id] = Array(course.weeks).fill(false);
        defaultProgress.courseGrades[course.id] = 0;
    });
    return defaultProgress;
}

function saveSettings(settings) {
    localStorage.setItem('uuSettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('uuSettings');
    return saved ? JSON.parse(saved) : { startDate: null, studentName: '' };
}

// Date calculation functions
function getWeekDeadline(startDate, courseIndex, weekNumber) {
    if (!startDate) return null;
    const start = new Date(startDate);
    const weeksFromStart = (courseIndex * 13) + weekNumber;
    const deadline = new Date(start);
    deadline.setDate(deadline.getDate() + (weeksFromStart * 7));
    return deadline;
}

function formatDate(date) {
    if (!date) return 'Not set';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getCourseIndex(courseId) {
    return coursesData.findIndex(c => c.id === courseId);
}

// Progress calculation
function calculateOverallProgress() {
    const progress = loadProgress();
    let totalWeeks = 0;
    let completedWeeks = 0;
    
    coursesData.forEach(course => {
        totalWeeks += course.weeks;
        const completed = progress.completedWeeks[course.id] || [];
        completedWeeks += completed.filter(w => w).length;
    });
    
    return {
        completedWeeks,
        totalWeeks,
        percentage: totalWeeks > 0 ? Math.round((completedWeeks / totalWeeks) * 100) : 0
    };
}

function calculateCourseProgress(courseId) {
    const progress = loadProgress();
    const completed = progress.completedWeeks[courseId] || [];
    const total = completed.length;
    const done = completed.filter(w => w).length;
    return {
        completed: done,
        total: total,
        percentage: total > 0 ? Math.round((done / total) * 100) : 0
    };
}

// Export for use in HTML pages
window.UU = {
    coursesData,
    saveProgress,
    loadProgress,
    saveSettings,
    loadSettings,
    getWeekDeadline,
    formatDate,
    getCourseIndex,
    calculateOverallProgress,
    calculateCourseProgress
};
