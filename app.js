// app.js - Fixed loading screen issue

// Global state
const state = {
    currentTheme: 'light',
    currentLanguage: 'en',
    currentView: 'loading',
    user: {
        name: 'Fares Saber',
        avatar: '👨‍💻',
        progress: 65,
        streak: 7,
        studyTime: '2h 30m',
        completed: 12
    },
    courses: [
        { 
            id: 'html5', 
            name: 'HTML5', 
            icon: 'fab fa-html5',
            color: '#e34f26',
            level: 'beginner',
            description: 'Learn the foundation of web development',
            duration: '2 weeks',
            lessons: 8
        },
        { 
            id: 'css3', 
            name: 'CSS3', 
            icon: 'fab fa-css3-alt',
            color: '#1572b6',
            level: 'beginner',
            description: 'Master styling and layout techniques',
            duration: '3 weeks',
            lessons: 12
        },
        { 
            id: 'js', 
            name: 'JavaScript', 
            icon: 'fab fa-js',
            color: '#f7df1e',
            level: 'intermediate',
            description: 'Add interactivity to your websites',
            duration: '4 weeks',
            lessons: 15
        },
        { 
            id: 'react', 
            name: 'React', 
            icon: 'fab fa-react',
            color: '#61dafb',
            level: 'intermediate',
            description: 'Build modern user interfaces',
            duration: '5 weeks',
            lessons: 18
        },
        { 
            id: 'node', 
            name: 'Node.js', 
            icon: 'fab fa-node-js',
            color: '#339933',
            level: 'advanced',
            description: 'Server-side JavaScript development',
            duration: '4 weeks',
            lessons: 14
        },
        { 
            id: 'laravel', 
            name: 'Laravel', 
            icon: 'fab fa-laravel',
            color: '#ff2d20',
            level: 'advanced',
            description: 'PHP framework for web artisans',
            duration: '6 weeks',
            lessons: 20
        },
        { 
            id: 'php', 
            name: 'PHP', 
            icon: 'fab fa-php',
            color: '#777bb4',
            level: 'intermediate',
            description: 'Server-side scripting language',
            duration: '3 weeks',
            lessons: 10
        },
        { 
            id: 'mysql', 
            name: 'MySQL', 
            icon: 'fas fa-database',
            color: '#4479a1',
            level: 'intermediate',
            description: 'Database management system',
            duration: '2 weeks',
            lessons: 8
        }
    ],
    progress: {
        currentStep: 2,
        completedSteps: [1],
        tasks: {
            1: { 
                completed: true, 
                tasks: ['Create basic HTML structure', 'Add semantic tags', 'Build navigation menu'],
                title: 'HTML Basics'
            },
            2: { 
                completed: false, 
                tasks: ['Style with CSS', 'Add responsive design', 'Implement animations'],
                title: 'CSS Styling'
            },
            3: { 
                completed: false, 
                tasks: ['Add JavaScript functionality', 'Handle user events', 'DOM manipulation'],
                title: 'JavaScript'
            }
        }
    },
    currentFilter: 'all'
};

// DOM Elements
const elements = {
    body: document.body,
    loadingScreen: document.getElementById('loadingScreen'),
    mainContent: document.getElementById('mainContent'),
    navigationCards: document.getElementById('navigationCards'),
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
    userMenu: document.getElementById('userMenu'),
    userModal: document.getElementById('userModal'),
    coursesGrid: document.querySelector('.courses-grid'),
    timeElement: document.getElementById('time'),
    ampmElement: document.getElementById('ampm'),
    dateElement: document.getElementById('date'),
    studyTime: document.getElementById('studyTime'),
    streak: document.getElementById('streak'),
    completed: document.getElementById('completed')
};

// Language translations
const translations = {
    en: {
        // Header
        'Dark Mode': 'Dark Mode',
        'Light Mode': 'Light Mode',
        'Hacker Mode': 'Hacker Mode',
        'العربية': 'العربية',
        'Master Frontend Development': 'Master Frontend Development',
        'Learn modern web technologies with interactive projects and real-world tasks': 'Learn modern web technologies with interactive projects and real-world tasks',
        'Courses': 'Courses',
        'Lessons': 'Lessons',
        'Free': 'Free',
        
        // Navigation
        'Home': 'Home',
        'Courses': 'Courses',
        'Tasks': 'Tasks',
        'Projects': 'Projects',
        'Community': 'Community',
        
        // Welcome Section
        'Welcome to Your Coding Journey!': 'Welcome to Your Coding Journey!',
        'Start your path to becoming a frontend developer with hands-on projects and expert guidance': 'Start your path to becoming a frontend developer with hands-on projects and expert guidance',
        'Interactive Learning': 'Interactive Learning',
        'Learn by doing with real coding exercises': 'Learn by doing with real coding exercises',
        'Real Projects': 'Real Projects',
        'Build portfolio-worthy projects': 'Build portfolio-worthy projects',
        'Expert Support': 'Expert Support',
        'Get help from experienced developers': 'Get help from experienced developers',
        
        // Courses Section
        'Available Courses': 'Available Courses',
        'Choose your learning path and start building amazing websites': 'Choose your learning path and start building amazing websites',
        'All': 'All',
        'Beginner': 'Beginner',
        'Intermediate': 'Intermediate',
        'Advanced': 'Advanced',
        
        // Code Editor
        'Live Code Editor': 'Live Code Editor',
        'Practice coding directly in your browser': 'Practice coding directly in your browser',
        'HTML': 'HTML',
        'CSS': 'CSS',
        'JavaScript': 'JavaScript',
        'Run': 'Run',
        'Preview': 'Preview',
        
        // Progress Section
        'Your Learning Progress': 'Your Learning Progress',
        'Track your journey and complete tasks to unlock new content': 'Track your journey and complete tasks to unlock new content',
        'Complete': 'Complete',
        'Courses Completed': 'Courses Completed',
        'Tasks Done': 'Tasks Done',
        'Current Streak': 'Current Streak',
        'HTML Basics': 'HTML Basics',
        'CSS Styling': 'CSS Styling',
        'JavaScript': 'JavaScript',
        'Completed': 'Completed',
        'In Progress': 'In Progress',
        'Pending': 'Pending',
        'Complete tasks to continue': 'Complete tasks to continue',
        'Complete previous lesson': 'Complete previous lesson',
        'Previous': 'Previous',
        'Next': 'Next',
        
        // Projects Section
        'Featured Projects': 'Featured Projects',
        'Build these real-world projects to practice your skills': 'Build these real-world projects to practice your skills',
        'E-Commerce Website': 'E-Commerce Website',
        'Build a full online store with cart and checkout': 'Build a full online store with cart and checkout',
        'Task Manager App': 'Task Manager App',
        'Create a drag-and-drop task management application': 'Create a drag-and-drop task management application',
        'Weather Dashboard': 'Weather Dashboard',
        'Develop a weather app with real-time data and charts': 'Develop a weather app with real-time data and charts',
        'Start Project': 'Start Project',
        
        // Community Section
        'Join Our Community': 'Join Our Community',
        'Connect with other learners and get help when you need it': 'Connect with other learners and get help when you need it',
        'Active Learners': 'Active Learners',
        'Discussions': 'Discussions',
        'Help Rate': 'Help Rate',
        'Join Discord': 'Join Discord',
        'GitHub Repo': 'GitHub Repo',
        
        // Rating Section
        'Rate Your Experience': 'Rate Your Experience',
        'Help us improve by sharing your feedback': 'Help us improve by sharing your feedback',
        'Share your feedback...': 'Share your feedback...',
        'Submit Feedback': 'Submit Feedback',
        
        // Footer
        'Master frontend development with free, interactive courses and real-world projects.': 'Master frontend development with free, interactive courses and real-world projects.',
        'CONNECT WITH US': 'CONNECT WITH US',
        'All rights reserved.': 'All rights reserved.',
        
        // Navigation Cards
        'Welcome to CodeMaster': 'Welcome to CodeMaster',
        'Choose your starting point': 'Choose your starting point',
        'View Projects': 'View Projects',
        'Start Learning': 'Start Learning',
        'Get Certified': 'Get Certified',
        
        // User Modal
        'Your Profile': 'Your Profile',
        'Frontend Student': 'Frontend Student',
        'Progress': 'Progress',
        'Streak': 'Streak',
        
        // Quick Stats
        'Today': 'Today',
        'Day Streak': 'Day Streak',
        'Completed': 'Completed'
    },
    ar: {
        // Header
        'Dark Mode': 'الوضع الداكن',
        'Light Mode': 'الوضع الفاتح',
        'Hacker Mode': 'وضع الهاكر',
        'العربية': 'English',
        'Master Frontend Development': 'إتقان تطوير الواجهات الأمامية',
        'Learn modern web technologies with interactive projects and real-world tasks': 'تعلم تقنيات الويب الحديثة بمشاريع تفاعلية ومهام واقعية',
        'Courses': 'الدورات',
        'Lessons': 'الدروس',
        'Free': 'مجاني',
        
        // Navigation
        'Home': 'الرئيسية',
        'Courses': 'الدورات',
        'Tasks': 'المهام',
        'Projects': 'المشاريع',
        'Community': 'المجتمع',
        
        // Welcome Section
        'Welcome to Your Coding Journey!': 'مرحباً بك في رحلة البرمجة!',
        'Start your path to becoming a frontend developer with hands-on projects and expert guidance': 'ابدأ رحلتك لتصبح مطور واجهات أمامية بمشاريع عملية وتوجيه الخبراء',
        'Interactive Learning': 'تعلم تفاعلي',
        'Learn by doing with real coding exercises': 'تعلم بالممارسة مع تمارين برمجة حقيقية',
        'Real Projects': 'مشاريع حقيقية',
        'Build portfolio-worthy projects': 'ابنِ مشاريع تستحق أن تكون في ملفك الشخصي',
        'Expert Support': 'دعم الخبراء',
        'Get help from experienced developers': 'احصل على مساعدة من مطورين ذوي خبرة',
        
        // Courses Section
        'Available Courses': 'الدورات المتاحة',
        'Choose your learning path and start building amazing websites': 'اختر مسار التعلم وابدأ في بناء مواقع ويب مذهلة',
        'All': 'الكل',
        'Beginner': 'مبتدئ',
        'Intermediate': 'متوسط',
        'Advanced': 'متقدم',
        
        // Code Editor
        'Live Code Editor': 'محرر الكود المباشر',
        'Practice coding directly in your browser': 'تدرب على البرمجة مباشرة في متصفحك',
        'HTML': 'HTML',
        'CSS': 'CSS',
        'JavaScript': 'جافاسكريبت',
        'Run': 'تشغيل',
        'Preview': 'معاينة',
        
        // Progress Section
        'Your Learning Progress': 'تقدمك في التعلم',
        'Track your journey and complete tasks to unlock new content': 'تابع رحلتك وأكمل المهام لفتح محتوى جديد',
        'Complete': 'مكتمل',
        'Courses Completed': 'الدورات المكتملة',
        'Tasks Done': 'المهام المنتهية',
        'Current Streak': 'التتابع الحالي',
        'HTML Basics': 'أساسيات HTML',
        'CSS Styling': 'تنسيق CSS',
        'JavaScript': 'جافاسكريبت',
        'Completed': 'مكتمل',
        'In Progress': 'قيد التقدم',
        'Pending': 'معلق',
        'Complete tasks to continue': 'أكمل المهام للمتابعة',
        'Complete previous lesson': 'أكمل الدرس السابق',
        'Previous': 'السابق',
        'Next': 'التالي',
        
        // Projects Section
        'Featured Projects': 'المشاريع المميزة',
        'Build these real-world projects to practice your skills': 'ابنِ هذه المشاريع الواقعية لممارسة مهاراتك',
        'E-Commerce Website': 'موقع تجارة إلكترونية',
        'Build a full online store with cart and checkout': 'ابنِ متجرًا إلكترونيًا كاملاً مع سلة تسوق ودفع',
        'Task Manager App': 'تطبيق إدارة المهام',
        'Create a drag-and-drop task management application': 'أنشئ تطبيق إدارة مهام بالسحب والإفلات',
        'Weather Dashboard': 'لوحة تحكم الطقس',
        'Develop a weather app with real-time data and charts': 'طوّر تطبيق طقس ببيانات مباشرة ومخططات',
        'Start Project': 'ابدأ المشروع',
        
        // Community Section
        'Join Our Community': 'انضم إلى مجتمعنا',
        'Connect with other learners and get help when you need it': 'تواصل مع متعلمين آخرين واحصل على المساعدة عندما تحتاجها',
        'Active Learners': 'متعلم نشط',
        'Discussions': 'النقاشات',
        'Help Rate': 'معدل المساعدة',
        'Join Discord': 'انضم لديسكورد',
        'GitHub Repo': 'مستودع جيت هاب',
        
        // Rating Section
        'Rate Your Experience': 'قيم تجربتك',
        'Help us improve by sharing your feedback': 'ساعدنا في التحسن بمشاركة ملاحظاتك',
        'Share your feedback...': 'شارك ملاحظاتك...',
        'Submit Feedback': 'إرسال الملاحظات',
        
        // Footer
        'Master frontend development with free, interactive courses and real-world projects.': 'أتقن تطوير الواجهات الأمامية بدورات مجانية تفاعلية ومشاريع واقعية.',
        'CONNECT WITH US': 'تواصل معنا',
        'All rights reserved.': 'جميع الحقوق محفوظة.',
        
        // Navigation Cards
        'Welcome to CodeMaster': 'مرحباً بك في CodeMaster',
        'Choose your starting point': 'اختر نقطة البداية',
        'View Projects': 'عرض المشاريع',
        'Start Learning': 'ابدأ التعلم',
        'Get Certified': 'احصل على شهادة',
        
        // User Modal
        'Your Profile': 'ملفك الشخصي',
        'Frontend Student': 'طالب واجهات أمامية',
        'Progress': 'التقدم',
        'Streak': 'التتابع',
        
        // Quick Stats
        'Today': 'اليوم',
        'Day Streak': 'تتابع الأيام',
        'Completed': 'مكتمل'
    }
};

// Theme configuration
const themes = {
    light: {
        name: 'Light Mode',
        icon: '🌙',
        next: 'dark'
    },
    dark: {
        name: 'Dark Mode',
        icon: '☀️',
        next: 'hacker'
    },
    hacker: {
        name: 'Hacker Mode',
        icon: '💻',
        next: 'light'
    }
};

// Initialize the application
function init() {
    console.log('Initializing CodeMaster...');
    loadState();
    setupEventListeners();
    initializeComponents();
    startLoadingSequence();
    updateClock();
    setInterval(updateClock, 1000);
    updateUserStats();
}

// Load state from localStorage
function loadState() {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    const savedUser = localStorage.getItem('user');
    
    if (savedTheme) state.currentTheme = savedTheme;
    if (savedLanguage) state.currentLanguage = savedLanguage;
    if (savedUser) state.user = { ...state.user, ...JSON.parse(savedUser) };
    
    applyTheme(state.currentTheme);
    applyLanguage(state.currentLanguage);
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('theme', state.currentTheme);
    localStorage.setItem('language', state.currentLanguage);
    localStorage.setItem('user', JSON.stringify(state.user));
}

// Setup all event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    elements.langToggle.addEventListener('click', toggleLanguage);
    
    // User menu
    elements.userMenu.addEventListener('click', toggleUserModal);
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', toggleUserModal);
    
    // Navigation cards
    document.querySelectorAll('.navigation-cards .glass').forEach(card => {
        card.addEventListener('click', handleNavigationCardClick);
    });
    
    // Star rating
    document.querySelectorAll('.rating input').forEach(star => {
        star.addEventListener('change', handleStarRating);
    });
    
    // Progress navigation
    document.addEventListener('click', function(e) {
        if (e.target.closest('.stepper-button-primary')) {
            goToNextStep();
        } else if (e.target.closest('.stepper-button:not(.stepper-button-primary)')) {
            goToPreviousStep();
        }
    });
    
    // Navigation menu links
    document.querySelectorAll('.menu .link').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // Course filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleCourseFilter);
    });
    
    // Code editor tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', handleCodeTabClick);
    });
    
    // Run code button
    document.querySelector('.run-btn').addEventListener('click', runCode);
    
    // Project buttons
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.addEventListener('click', startProject);
    });
    
    // Community buttons
    document.querySelectorAll('.community-btn').forEach(btn => {
        btn.addEventListener('click', handleCommunityAction);
    });
    
    // Submit feedback
    const submitFeedbackBtn = document.querySelector('.submit-feedback');
    if (submitFeedbackBtn) {
        submitFeedbackBtn.addEventListener('click', submitFeedback);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Close modal on background click
    elements.userModal.addEventListener('click', (e) => {
        if (e.target === elements.userModal) {
            toggleUserModal();
        }
    });
    
    // Force show navigation cards if loading gets stuck
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('force-show')) {
            hideLoadingScreen();
            showNavigationCards();
        }
    });
}

// Initialize components
function initializeComponents() {
    console.log('Initializing components...');
    generateCourseCards();
    createMatrixBackground();
    updateProgressStepper();
    updateCodeEditor();
}

// Loading sequence - FIXED VERSION
function startLoadingSequence() {
    console.log('Starting loading sequence...');
    
    // Show loading screen for 3 seconds, then transition
    setTimeout(() => {
        hideLoadingScreen();
        setTimeout(() => {
            showNavigationCards();
        }, 500);
    }, 3000);
}

function hideLoadingScreen() {
    console.log('Hiding loading screen...');
    const loadingScreen = elements.loadingScreen;
    
    // Add fade-out animation
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease';
    
    // Remove from DOM after animation
    setTimeout(() => {
        loadingScreen.classList.remove('active');
        loadingScreen.classList.add('hidden');
        loadingScreen.style.opacity = '1'; // Reset for future use
        console.log('Loading screen hidden');
    }, 500);
}

function showNavigationCards() {
    console.log('Showing navigation cards...');
    const navigationCards = elements.navigationCards;
    
    navigationCards.classList.remove('hidden');
    navigationCards.style.opacity = '0';
    navigationCards.style.transition = 'opacity 0.5s ease';
    
    // Trigger reflow
    navigationCards.offsetHeight;
    
    navigationCards.style.opacity = '1';
    state.currentView = 'navigation';
    console.log('Navigation cards shown');
}

function hideNavigationCards() {
    console.log('Hiding navigation cards...');
    const navigationCards = elements.navigationCards;
    const mainContent = elements.mainContent;
    
    navigationCards.style.opacity = '0';
    
    setTimeout(() => {
        navigationCards.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        // Trigger reflow
        mainContent.offsetHeight;
        
        mainContent.style.opacity = '1';
        state.currentView = 'main';
        console.log('Main content shown');
    }, 500);
}

// Theme functionality
function toggleTheme() {
    const currentThemeConfig = themes[state.currentTheme];
    state.currentTheme = currentThemeConfig.next;
    applyTheme(state.currentTheme);
    saveState();
}

function applyTheme(theme) {
    // Remove all theme classes
    elements.body.classList.remove('light-theme', 'dark-theme', 'hacker-theme');
    
    // Add current theme class
    elements.body.classList.add(`${theme}-theme`);
    
    // Update theme toggle
    const themeConfig = themes[theme];
    elements.themeToggle.querySelector('.theme-icon').textContent = themeConfig.icon;
    elements.themeToggle.querySelector('.theme-text').textContent = themeConfig.name;
    
    // Update translations for theme text
    updateElementText(elements.themeToggle.querySelector('.theme-text'), themeConfig.name);
}

// Language functionality
function toggleLanguage() {
    state.currentLanguage = state.currentLanguage === 'en' ? 'ar' : 'en';
    applyLanguage(state.currentLanguage);
    saveState();
}

function applyLanguage(language) {
    // Update body direction
    elements.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update language toggle text
    const langText = language === 'en' ? 'العربية' : 'English';
    elements.langToggle.querySelector('.lang-text').textContent = langText;
    
    // Update all translatable elements
    updateAllTextContent(language);
    
    // Update placeholder texts
    updatePlaceholderTexts(language);
}

function updateAllTextContent(language) {
    const translatableElements = document.querySelectorAll('[data-en], [data-ar]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-en') || element.textContent.trim();
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

function updatePlaceholderTexts(language) {
    const textareas = document.querySelectorAll('textarea[data-en-placeholder]');
    textareas.forEach(textarea => {
        const key = textarea.getAttribute('data-en-placeholder');
        if (translations[language][key]) {
            textarea.placeholder = translations[language][key];
        }
    });
}

function updateElementText(element, text) {
    if (element.hasAttribute('data-en') || element.hasAttribute('data-ar')) {
        const key = element.getAttribute('data-en') || element.textContent.trim();
        element.textContent = translations[state.currentLanguage][key] || text;
    } else {
        element.textContent = text;
    }
}

// Course cards generation
function generateCourseCards() {
    const coursesGrid = elements.coursesGrid;
    if (!coursesGrid) {
        console.error('Courses grid not found');
        return;
    }
    
    coursesGrid.innerHTML = '';
    
    const filteredCourses = state.currentFilter === 'all' 
        ? state.courses 
        : state.courses.filter(course => course.level === state.currentFilter);
    
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card`;
        courseCard.innerHTML = `
            <div class="course-icon" style="--course-color: ${course.color}">
                <i class="${course.icon}"></i>
            </div>
            <h3 data-en="${course.name}">${course.name}</h3>
            <p data-en="${course.description}">${course.description}</p>
            <div class="course-meta">
                <span class="course-duration">
                    <i class="fas fa-clock"></i>
                    ${course.duration}
                </span>
                <span class="course-level level-${course.level}" data-en="${course.level.charAt(0).toUpperCase() + course.level.slice(1)}">
                    ${course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
            </div>
            <div class="course-meta">
                <span class="course-lessons">
                    <i class="fas fa-book"></i>
                    ${course.lessons} lessons
                </span>
                <span class="course-progress">
                    <i class="fas fa-chart-line"></i>
                    ${Math.random() > 0.5 ? 'In Progress' : 'Start Now'}
                </span>
            </div>
            <a href="courses.html" class="link">
            start
            </a>
   
            <button class="course-btn" data-en="Start Course" data-ar="ابدأ الدورة">
                Start Course
            </button>
        `;
        
        const courseBtn = courseCard.querySelector('.course-btn');
        if (courseBtn) {
            courseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openCourse(course);
            });
        }
        
        coursesGrid.appendChild(courseCard);
    });
}

function handleCourseFilter(e) {
    const filter = e.target.dataset.filter;
    state.currentFilter = filter;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    generateCourseCards();
}

// Matrix background
function createMatrixBackground() {
    const matrixContainer = document.querySelector('.matrix-container');
    if (!matrixContainer) return;
    
    matrixContainer.innerHTML = '';
    
    // Create multiple pattern layers for depth
    for (let i = 0; i < 5; i++) {
        const pattern = document.createElement('div');
        pattern.className = 'matrix-pattern';
        pattern.style.transform = `translateX(${i * 200}px)`;
        
        for (let j = 0; j < 40; j++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${j * 25}px`;
            column.style.animationDelay = `-${Math.random() * 5}s`;
            column.style.animationDuration = `${2 + Math.random() * 3}s`;
            pattern.appendChild(column);
        }
        
        matrixContainer.appendChild(pattern);
    }
}

// Clock functionality
function updateClock() {
    const now = new Date();
    
    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    if (elements.timeElement) elements.timeElement.textContent = `${hours}:${minutes}`;
    if (elements.ampmElement) elements.ampmElement.textContent = ampm;
    
    // Date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString(state.currentLanguage === 'ar' ? 'ar-SA' : 'en-US', options);
    if (elements.dateElement) elements.dateElement.textContent = dateString;
}

// User stats
function updateUserStats() {
    if (elements.studyTime) elements.studyTime.textContent = state.user.studyTime;
    if (elements.streak) elements.streak.textContent = state.user.streak;
    if (elements.completed) elements.completed.textContent = state.user.completed;
}

// Navigation cards handler
function handleNavigationCardClick(e) {
    const card = e.currentTarget;
    const action = card.getAttribute('data-text').toLowerCase();
    
    switch (action) {
        case 'github':
            window.open('https://github.com/fares-saber', '_blank');
            break;
        case 'earn':
            window.open('https://dev-fares.netlify.app/', '_blank');
            break;
        case 'code':
            hideNavigationCards();
            break;
    }
}

// User modal
function toggleUserModal() {
    elements.userModal.classList.toggle('hidden');
    
    if (!elements.userModal.classList.contains('hidden')) {
        // Update modal content
        const userName = document.querySelector('.user-details h4');
        const userAvatar = document.querySelector('.user-avatar');
        const progressValue = document.querySelector('.user-stat:nth-child(1) .stat-value');
        const streakValue = document.querySelector('.user-stat:nth-child(2) .stat-value');
        
        if (userName) userName.textContent = state.user.name;
        if (userAvatar) userAvatar.innerHTML = state.user.avatar;
        if (progressValue) progressValue.textContent = `${state.user.progress}%`;
        if (streakValue) streakValue.textContent = state.user.streak;
    }
}

// Star rating handler
function handleStarRating(e) {
    const rating = e.target.value;
    console.log(`User rated: ${rating} stars`);
    
    // Show feedback form for ratings 3 or below
    const feedbackForm = document.getElementById('feedbackForm');
    if (rating <= 3 && feedbackForm) {
        feedbackForm.classList.remove('hidden');
    } else {
        if (feedbackForm) feedbackForm.classList.add('hidden');
        showRatingFeedback(rating);
    }
}

function showRatingFeedback(rating) {
    const messages = {
        1: 'Thanks for your feedback! We will work to improve.',
        2: 'We appreciate your rating! We are constantly improving.',
        3: 'Thank you for the rating!',
        4: 'Great! Thanks for the rating!',
        5: 'Excellent! Thank you so much!'
    };
    
    // Show toast notification
    showToast(messages[rating]);
}

function submitFeedback() {
    const feedbackTextarea = document.querySelector('.feedback-form textarea');
    if (!feedbackTextarea) return;
    
    const feedback = feedbackTextarea.value;
    if (feedback.trim()) {
        console.log('Feedback submitted:', feedback);
        showToast('Thank you for your feedback!');
        feedbackTextarea.value = '';
        
        const feedbackForm = document.getElementById('feedbackForm');
        if (feedbackForm) feedbackForm.classList.add('hidden');
        
        // Reset stars
        document.querySelectorAll('.rating input').forEach(star => {
            star.checked = false;
        });
    }
}

// Progress stepper functionality
function updateProgressStepper() {
    const stepperBox = document.querySelector('.stepper-box');
    if (!stepperBox) return;
    
    stepperBox.innerHTML = '';
    
    Object.entries(state.progress.tasks).forEach(([stepNumber, stepData], index) => {
        const stepElement = document.createElement('div');
        stepElement.className = `stepper-step ${stepData.completed ? 'stepper-completed' : 
            parseInt(stepNumber) === state.progress.currentStep ? 'stepper-active' : 'stepper-pending'}`;
        
        stepElement.innerHTML = `
            <div class="stepper-circle">
                ${stepData.completed ? '<i class="fas fa-check"></i>' : stepNumber}
            </div>
            ${index < Object.keys(state.progress.tasks).length - 1 ? '<div class="stepper-line"></div>' : ''}
            <div class="stepper-content">
                <div class="stepper-title" data-en="${stepData.title}">${stepData.title}</div>
                <div class="stepper-status" data-en="${stepData.completed ? 'Completed' : 
                    parseInt(stepNumber) === state.progress.currentStep ? 'In Progress' : 'Pending'}">
                    ${stepData.completed ? 'Completed' : 
                    parseInt(stepNumber) === state.progress.currentStep ? 'In Progress' : 'Pending'}
                </div>
                <div class="stepper-time" data-en="${stepData.completed ? 'Completed' : 
                    parseInt(stepNumber) === state.progress.currentStep ? 'Complete tasks to continue' : 'Complete previous lesson'}">
                    ${stepData.completed ? 'Completed' : 
                    parseInt(stepNumber) === state.progress.currentStep ? 'Complete tasks to continue' : 'Complete previous lesson'}
                </div>
                ${parseInt(stepNumber) === state.progress.currentStep ? `
                    <div class="stepper-tasks">
                        ${stepData.tasks.map(task => `
                            <div class="task-item">
                                <input type="checkbox" id="task-${stepNumber}-${task.replace(/\s+/g, '-')}">
                                <label for="task-${stepNumber}-${task.replace(/\s+/g, '-')}" data-en="${task}">${task}</label>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        
        stepperBox.appendChild(stepElement);
    });
    
    // Add navigation controls
    const controlsElement = document.createElement('div');
    controlsElement.className = 'stepper-controls';
    controlsElement.innerHTML = `
        <button class="stepper-button">
            <i class="fas fa-arrow-left"></i>
            <span data-en="Previous" data-ar="السابق">Previous</span>
        </button>
        <button class="stepper-button stepper-button-primary">
            <span data-en="Next" data-ar="التالي">Next</span>
            <i class="fas fa-arrow-right"></i>
        </button>
    `;
    
    stepperBox.appendChild(controlsElement);
    
    // Add task completion listeners
    document.querySelectorAll('.stepper-tasks input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleTaskCompletion);
    });
}

function handleTaskCompletion(e) {
    const taskId = e.target.id;
    const isCompleted = e.target.checked;
    
    // In a real app, you would save this to your backend
    console.log(`Task ${taskId} ${isCompleted ? 'completed' : 'unchecked'}`);
    
    // Check if all tasks are completed
    const currentStepTasks = document.querySelectorAll('.stepper-tasks input[type="checkbox"]');
    const allCompleted = Array.from(currentStepTasks).every(task => task.checked);
    
    if (allCompleted) {
        showToast('All tasks completed! You can now proceed to the next lesson.');
    }
}

function goToNextStep() {
    if (state.progress.currentStep < Object.keys(state.progress.tasks).length) {
        // Check if current step tasks are completed
        const currentTasks = state.progress.tasks[state.progress.currentStep];
        if (currentTasks && !currentTasks.completed) {
            const message = state.currentLanguage === 'ar' 
                ? 'يرجى إكمال جميع المهام الحالية أولاً' 
                : 'Please complete all current tasks first';
            showToast(message);
            return;
        }
        
        state.progress.currentStep++;
        if (!state.progress.completedSteps.includes(state.progress.currentStep - 1)) {
            state.progress.completedSteps.push(state.progress.currentStep - 1);
        }
        updateProgressStepper();
        
        // Update user progress
        state.user.progress = Math.min(100, state.user.progress + 12);
        updateUserStats();
        saveState();
    }
}

function goToPreviousStep() {
    if (state.progress.currentStep > 1) {
        state.progress.currentStep--;
        updateProgressStepper();
    }
}

// Code editor functionality
function handleCodeTabClick(e) {
    const tab = e.target;
    const tabName = tab.dataset.tab;
    
    // Update active tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Show corresponding editor
    document.querySelectorAll('.code-editor').forEach(editor => {
        editor.classList.remove('active');
    });
    const activeEditor = document.querySelector(`.code-editor[data-tab="${tabName}"]`);
    if (activeEditor) {
        activeEditor.classList.add('active');
    }
}

function updateCodeEditor() {
    // Initialize the code editor with basic content
    const htmlCode = `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my website</p>
</body>
</html>`;
    
    const cssCode = `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    line-height: 1.6;
}`;
    
    const jsCode = `// Welcome message
function showWelcome() {
    const name = prompt('What is your name?');
    if (name) {
        alert(\`Hello, \${name}! Welcome to CodeMaster.\`);
    }
}

// Call the function
showWelcome();`;
    
    const htmlEditor = document.querySelector('.code-editor[data-tab="html"] code');
    const cssEditor = document.querySelector('.code-editor[data-tab="css"] code');
    const jsEditor = document.querySelector('.code-editor[data-tab="js"] code');
    
    if (htmlEditor) htmlEditor.textContent = htmlCode;
    if (cssEditor) cssEditor.textContent = cssCode;
    if (jsEditor) jsEditor.textContent = jsCode;
}

function runCode() {
    const htmlEditor = document.querySelector('.code-editor[data-tab="html"] code');
    const cssEditor = document.querySelector('.code-editor[data-tab="css"] code');
    const jsEditor = document.querySelector('.code-editor[data-tab="js"] code');
    
    if (!htmlEditor || !cssEditor || !jsEditor) return;
    
    const htmlCode = htmlEditor.textContent;
    const cssCode = cssEditor.textContent;
    const jsCode = jsEditor.textContent;
    
    const previewFrame = document.getElementById('previewFrame');
    if (!previewFrame) return;
    
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    
    previewDocument.open();
    previewDocument.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    previewDocument.close();
    
    showToast('Code executed successfully!');
}

// Navigation menu handler
function handleNavLinkClick(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const targetId = link.getAttribute('href').substring(1);
    
    // Update active link
    document.querySelectorAll('.menu .link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Scroll to section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Project functionality
function startProject(e) {
    const projectCard = e.target.closest('.project-card');
    if (!projectCard) return;
    
    const projectName = projectCard.querySelector('h3').textContent;
    
    const message = state.currentLanguage === 'ar'
        ? `بدء مشروع "${projectName}"...\n\nسيتم توجيهك إلى تعليمات المشروع.`
        : `Starting project "${projectName}"...\n\nYou will be redirected to project instructions.`;
    
    showToast(message);
    
    // In a real application, you would redirect to the project page
    // window.location.href = `/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}`;
}

// Community actions
function handleCommunityAction(e) {
    const button = e.target.closest('.community-btn');
    if (!button) return;
    
    const actionText = button.querySelector('span');
    if (!actionText) return;
    
    const action = actionText.textContent;
    
    switch (action) {
        case 'Join Discord':
        case 'انضم لديسكورد':
            window.open('https://discord.gg/example', '_blank');
            break;
        case 'GitHub Repo':
        case 'مستودع جيت هاب':
            window.open('https://github.com/fares-saber/codemaster', '_blank');
            break;
    }
}

// Course opening handler
function openCourse(course) {
    const message = state.currentLanguage === 'ar'
        ? `فتح دورة "${course.name}"...\n\nسيتم توجيهك إلى مواد الدورة.`
        : `Opening "${course.name}" course...\n\nYou will be redirected to course materials.`;
    
    showToast(message);
    
    // Update user stats
    state.user.completed++;
    updateUserStats();
    saveState();
    
    // In a real application, you would redirect to the actual course page
    // window.location.href = `/courses/${course.id}`;
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + T to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Ctrl/Cmd + L to toggle language
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
    }
    
    // Escape to go back to navigation cards from main content
    if (e.key === 'Escape' && state.currentView === 'main') {
        elements.mainContent.classList.add('hidden');
        elements.navigationCards.classList.remove('hidden');
        state.currentView = 'navigation';
    }
    
    // Escape to close modals
    if (e.key === 'Escape' && !elements.userModal.classList.contains('hidden')) {
        toggleUserModal();
    }
    
    // Force skip loading (for debugging)
    if (e.key === 'F12' && e.shiftKey) {
        hideLoadingScreen();
        showNavigationCards();
    }
}

// Utility function to show toast messages
function showToast(message, duration = 3000) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, duration);
}

// Add emergency skip button for loading screen
function addEmergencySkipButton() {
    const skipButton = document.createElement('button');
    skipButton.textContent = 'Skip Loading';
    skipButton.className = 'force-show';
    skipButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10001;
        font-size: 12px;
    `;
    document.body.appendChild(skipButton);
}

// Add toast styles to the document
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        font-family: inherit;
        font-weight: 500;
    }
    
    body.dark-theme .toast {
        background: var(--accent-color-dark) !important;
    }
    
    body.hacker-theme .toast {
        background: var(--accent-color-hacker) !important;
        color: #000 !important;
    }
`;
document.head.appendChild(toastStyles);

// Export functions for global access
window.app = {
    state,
    toggleTheme,
    toggleLanguage,
    updateProgress: updateProgressStepper,
    runCode,
    showToast,
    hideLoadingScreen,
    showNavigationCards,
    hideNavigationCards
};

// Add emergency skip button
addEmergencySkipButton();

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing app...');
    init();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}