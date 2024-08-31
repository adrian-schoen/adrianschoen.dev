// Function to switch the language of the page
function switchLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        element.textContent = translations[language][key] || element.textContent;
    });
}

// Translations object containing text for different languages
const translations = {
    en: {
        'nav-my-projects': 'My Projects',
        'nav-about-me': 'About Me',
        'nav-cv': 'CV',
        'index-greeting': 'Welcome to my website!',
        'index-greeting-text': 'Thank you for visiting! Here you will find a collection of my projects and insights into my work. My passion is creating and sharing knowledge in the tech community.',
        'index-connect-subtitle': 'Check out my GitHub profile and the repository for this website:',
        'index-github-profile-button': 'GitHub Profile',
        'index-github-repo-button': 'Website Repository',
        'projects-title': 'My Projects',
        'projects-title-1': 'adrianschoen.dev',
        'projects-title-1-text': 'This is the website you are currently on.',
        'projects-title-2': 'CatCompression',
        'projects-title-2-text': 'CatCompression compresses files using Huffman coding and hides the data in PNG images of cats.',
        'about-about-me': 'About Me',
        'about-about-me-text': 'Hello! My name is Adrian Schön, and I am currently in the second semester of my dual study program in computer science. I am studying in collaboration with United Internet AG and DHBW Karlsruhe.',
        'about-about-me-text2': 'Through the combination of theory and practice, I am gaining valuable experience and deepening my knowledge in both academic and real-world projects. My professional focus is on backend development. I work intensively with technologies such as Java and SpringBoot to develop robust and scalable applications. I place particular emphasis on clean code, performance optimization, and the implementation of best practices.',
        'about-about-me-text3': 'In addition to my backend work, I also engage with frontend technologies. I enjoy designing websites and web applications, using HTML, CSS, and JavaScript to create user-friendly and appealing interfaces. This website, which you are currently on, is an example of my work in the frontend area.',
        'linkedin': 'LinkedIn',
        'linkedin-text': 'Visit my LinkedIn profile to learn more about my professional experiences and qualifications.',
        'linkedin-profile-button': 'LinkedIn Profile',
        'contact-me': 'Contact',
        'contact-me-text': 'You can reach me at my email address:',
        'cv-cv': 'CV',
        'cv-workexperience': 'Work Experience',
        'cv-workexperience-position': 'Dual Student Computer Science',
        'cv-workexperience-position-date': 'October 2023 - September 2026',
        'cv-workexperience-position-c1': '1&1 Mail & Media GmbH, Oct. 2023 - Sep. 2024',
        'cv-workexperience-position-c1-1': 'Developed a solid understanding of Java service and repository patterns as well as the Spring and Spring Boot frameworks to create robust backend applications with RESTful services and improve application architecture.',
        'cv-workexperience-position-c1-2': 'Implemented unit tests with JUnit and Mockito in Spring Boot applications to ensure code reliability and functionality, and improve code quality.',
        'cv-workexperience-position-c1-3': 'Reduced technical debt using SonarQube, which improved code maintainability.',
        'cv-workexperience-position-c1-4': 'Researched and implemented a CI/CD pipeline as part of a project to optimize the development process and increase deployment efficiency.',
        'cv-workexperience-position-c1-5': 'Gained practical experience in an agile work environment, including participating in Scrum meetings, sprint planning, and retrospectives, which strengthened my ability to collaborate in a team and adapt to changing requirements.',
        'cv-education': 'Education',
        'cv-education-course': 'B. Sc. Computer Science',
        'cv-education-course-date': 'Oct. 2023 - Sep. 2026',
        'cv-education-university': 'Duale Hochschule Baden-Württemberg Karlsruhe',
        'cv-projects': 'Projects',
        'cv-projects-1-name': 'Personal Website',
        'cv-projects-1-desc': 'This website, which you are currently on. Here are all my other projects listed.',
        'cv-skills': 'Skills',
        'cv-skills-programminglanguages': 'Programming Languages',
        'cv-skills-programminglanguages-list': 'Java, Python, JavaScript, HTML/CSS',
        'cv-skills-frameworks': 'Frameworks',
        'cv-skills-frameworks-list': 'Spring Boot, Spring MVC, Thymeleaf',
        'cv-skills-codequality': 'Code Quality & Testing',
        'cv-skills-codequality-list': 'Lombok, SonarQube, JUnit, Mockito',
        'cv-skills-othertools': 'Other Tools',
        'cv-skills-othertools-list': 'Maven, Git, GitLab CI/CD, Docker',
        'cv-skills-ides': 'IDEs',
        'cv-skills-ides-list': 'IntelliJ, PyCharm, VS Code',
        'cv-skills-languageskills': 'Language Skills',
        'cv-skills-languageskills-list': 'German (native), English (fluent)'
    },
    de: {
        'nav-my-projects': 'Meine Projekte',
        'nav-about-me': 'Über Mich',
        'nav-cv': 'Lebenslauf',
        'index-greeting': 'Wilkommen auf meiner Website!',
        'index-greeting-text': 'Vielen Dank für Ihren Besuch! Hier finden Sie eine Sammlung meiner Projekte und Einblicke in meine Arbeit. Meine Leidenschaft gilt der Schaffung und dem Austausch von Wissen in der Tech-Community.',
        'index-connect-subtitle': 'Schauen Sie sich mein GitHub-Profil und das Repository für diese Website an:',
        'index-github-profile-button': 'GitHub Profil',
        'index-github-repo-button': 'Website Repository',
        'projects-title': 'Meine Projekte',
        'projects-title-1': 'adrianschoen.dev',
        'projects-title-1-text': 'Auf dieser Website befinden Sie sich gerade.',
        'projects-title-2': 'CatCompression',
        'projects-title-2-text': 'CatCompression komprimiert Dateien mithilfe der Huffman-Kodierung und versteckt die Daten in PNG-Bildern von Katzen.',
        'about-about-me': 'Über Mich',
        'about-about-me-text': 'Hallo! Mein Name ist Adrian Schön, und ich befinde mich aktuell im zweiten Semester meines dualen Studiums der Informatik. Ich studiere in Zusammenarbeit mit der United Internet AG und der DHBW Karlsruhe.',
        'about-about-me-text2': 'Durch die Kombination von Theorie und Praxis sammle ich wertvolle Erfahrungen und vertiefe mein Wissen sowohl im akademischen Bereich als auch in realen Projekten. Der Schwerpunkt meiner beruflichen Tätigkeit liegt in der Backend-Entwicklung. Ich arbeite intensiv mit Technologien wie Java und SpringBoot, um robuste und skalierbare Anwendungen zu entwickeln. Dabei lege ich besonderen Wert auf sauberen Code, Performance-Optimierung und die Implementierung von Best Practices.',
        'about-about-me-text3': 'Neben meiner Backend-Arbeit beschäftige ich mich auch mit Frontend-Technologien. Ich habe Freude daran, Websites und Webanwendungen zu gestalten, und nutze dabei HTML, CSS und JavaScript, um benutzerfreundliche und ansprechende Oberflächen zu entwickeln. Diese Website, auf der Sie sich gerade befinden, ist ein Beispiel für meine Arbeit im Frontend-Bereich.',
        'linkedin': 'LinkedIn',
        'linkedin-text': 'Besuchen Sie mein LinkedIn-Profil, um mehr über meine beruflichen Erfahrungen und Qualifikationen zu erfahren.',
        'linkedin-profile-button': 'LinkedIn Profil',
        'contact-me': 'Kontakt',
        'contact-me-text': 'Sie können mich unter meiner E-Mail-Adresse erreichen:',
        'cv-cv': 'Lebenslauf',
        'cv-workexperience': 'Berufserfahrung',
        'cv-workexperience-position': 'Dualer Student Informatik',
        'cv-workexperience-position-date': 'Oktober 2023 - September 2026',
        'cv-workexperience-position-c1': '1&1 Mail & Media GmbH, Okt. 2023 - Sep. 2024',
        'cv-workexperience-position-c1-1': 'Entwickelte ein fundiertes Verständnis der Java Service- und Repository-Pattern sowie der Frameworks Spring und Spring Boot zur Erstellung robuster Backend-Anwendungen mit RESTful Services und zur Verbesserung der Anwendungsarchitektur.',
        'cv-workexperience-position-c1-2': 'Implementierte Unit-Tests mit JUnit und Mockito in Spring Boot-Anwendungen, um die Zuverlässigkeit und Funktionalität des Codes zu gewährleisten und die Codequalität zu steigern.',
        'cv-workexperience-position-c1-3': 'Reduzierte technische Schulden durch den Einsatz von SonarQube, was die Wartbarkeit des Codes verbesserte.',
        'cv-workexperience-position-c1-4': 'Recherchierte und implementierte eine CI/CD-Pipeline im Rahmen einer Projektarbeit, um den Entwicklungsprozess zu optimieren und die Effizienz des Deployments zu steigern.',
        'cv-workexperience-position-c1-5': 'Erwarb praktische Erfahrung in einem agilen Arbeitsumfeld, einschließlich der Teilnahme an Scrum-Meetings Sprint-Planungen und Retrospektiven, was meine Fähigkeit zur Zusammenarbeit im Team und zur Anpassung an sich ändernde Anforderungen stärkte.',
        'cv-education': 'Ausbildung',
        'cv-education-course': 'B. Sc. Informatik',
        'cv-education-course-date': 'Okt. 2023 - Sep. 2026',
        'cv-education-university': 'Duale Hochschule Baden-Württemberg Karlsruhe',
        'cv-projects': 'Projekte',
        'cv-projects-1-name': 'Persönliche Website',
        'cv-projects-1-desc': 'Diese Website, auf der Sie sich gerade befinden. Hier sind alle meine anderen Projekte aufgelistet.',
        'cv-skills': 'Fachkenntnisse',
        'cv-skills-programminglanguages': 'Programmiersprachen',
        'cv-skills-programminglanguages-list': 'Java, Python, JavaScript, HTML/CSS',
        'cv-skills-frameworks': 'Frameworks',
        'cv-skills-frameworks-list': 'Spring Boot, Spring MVC, Thymeleaf',
        'cv-skills-codequality': 'Code Quality & Testing',
        'cv-skills-codequality-list': 'Lombok, SonarQube, JUnit, Mockito',
        'cv-skills-othertools': 'Sonstige Tools',
        'cv-skills-othertools-list': 'Maven, Git, GitLab CI/CD, Docker',
        'cv-skills-ides': 'IDEs',
        'cv-skills-ides-list': 'IntelliJ, PyCharm, VS Code',
        'cv-skills-languageskills': 'Sprachkenntnisse',
        'cv-skills-languageskills-list': 'Deutsch (muttersprachlich), Englisch (verhandlungssicher)'
    }
};

// Event listener for language switcher buttons
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const language = this.getAttribute('onclick').match(/'(\w+)'/)[1];
        switchLanguage(language);
    });
});