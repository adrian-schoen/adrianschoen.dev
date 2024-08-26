const translations = {
    en: {
        // Navbar
        navAboutMe: "About Me",        navContactMe: "Contact Me",
        navCv: "CV",

        // index.html
        indexGreeting: "Welcome on my Website",
        indexGreetingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        indexConnectSubtitle: "Feel free to check out my GitHub and the repository for this website:",
        indexGithubProfileButton: "My GitHub Profile",
        indexGithubRepoButton: "Website Repository",

        projectsTitle: "My Projects",
        projectsTitle1: "adrianschoen.dev",
        projectsTitle1Text: "This very website you are on.",
        projectsTitle2: "Project 2",
        projectsTitle2Text: "Description of project 2.",
        projectsTitle3: "Project 3",
        projectsTitle3Text: "Description of project 3.",
        projectsTitle4: "Project 4",
        projectsTitle4Text: "Description of project 4.",
        projectsTitle5: "Project 5",
        projectsTitle6Text: "Description of project 5.",
        projectsTitle6: "Project 6",
        projectsTitle6Text: "Description of project 6.",
        projectsTitle1ModalTitle1: "Project 1",
        projectsTitle1ModalTitle1Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle1ModalTitle1Button: "View on Github",
        projectsTitle2ModalTitle2: "Project 2",
        projectsTitle2ModalTitle2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle2ModalTitle2Button: "View on Github",
        projectsTitle3ModalTitle3: "Project 3",
        projectsTitle3ModalTitle3Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle3ModalTitle3Button: "View on Github",
        projectsTitle4ModalTitle4: "Project 4",
        projectsTitle4ModalTitle4Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle4ModalTitle4Button: "View on Github",
        projectsTitle5ModalTitle5: "Project 5",
        projectsTitle5ModalTitle5Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle5ModalTitle5Button: "View on Github",
        projectsTitle6ModalTitle6: "Project 6",
        projectsTitle6ModalTitle6Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle6ModalTitle6Button: "View on Github",

        // about.html
        aboutAboutMe: "About Me",
        aboutAboutMeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        aboutBackButton: "Back to Home",

        // contact.html
        contactContactMe: "Contact Me",
        contactContactMeText: "If you'd like to get in touch, feel free to reach out on ",
        contactBackButton: "Back to Home",

        // cv.html
        cvCv: "Curriculum Vitae",
        cvCvText: "(I don't have a professional picture yet)",
        cvWorkexperience: "Work Experience",
        cvWorkexperiencePosition: "Dual Student Computer Science",
        cvWorkexperiencePositionDate: "October 2023 - September 2026",
        cvWorkexperiencePositionC1: "IONOS SE, Oct. 2025 - Sep. 2026",
        cvWorkexperiencePositionC11: "Did cool stuff",
        cvWorkexperiencePositionC12: "And so on",
        cvWorkexperiencePositionC2: "1&1 Telecommunications SE, Oct. 2024 - Sep. 2025",
        cvWorkexperiencePositionC21: "Marcel D'avis",
        cvWorkexperiencePositionC22: "1&1 for 16 years",
        cvWorkexperiencePositionC3: "1&1 Mail & Media GmbH, Oct. 2023 - Sep. 2024",
        cvWorkexperiencePositionC31: "Developed a solid understanding of Java service and repository patterns as well as the frameworks Spring and Spring Boot frameworks to build robust backend applications with RESTful services and to improve the application architecture.",
        cvWorkexperiencePositionC32: "Implemented unit tests with JUnit and Mockito in Spring Boot applications in order to ensure the reliability andreliability and functionality of the code and increase code quality.",
        cvWorkexperiencePositionC33: "Reduced technical debt through the use of SonarQube, which improves the maintainability of the code.",
        cvWorkexperiencePositionC34: "Researched and implemented a CI/CD pipeline as part of a project to optimise the development process and increase deployment efficiency.",
        cvWorkexperiencePositionC35: "Gained hands-on experience in an agile work environment, including attending scrum meetings, sprint planning and retrospectives, which strengthened my ability to collaborate in a team and adapt to changing requirements. changing requirements.",
        cvEducation: "Education",
        cvEducationCourse: "B. Sc. in Computer Science",
        cvEducationCourseDate: "Oct. 2023 - Sep. 2026",
        cvEducationUniversity: "Duale Hochschule Baden-Württemberg Karlsruhe",
        cvProjects: "Projects",
        cvProjects1Name: "Personal Website",
        cvProjects1Desc: "This website you are currently on. Lists all of my other projects.",
        cvSkills: "Skills",
        cvSkillsProgramminglanguages: "Programming Languages",
        cvSkillsProgramminglanguagesList: "Java, Python, JavaScript, HTML/CSS",
        cvSkillsFrameworks: "Frameworks",
        cvSkillsFrameworksList: "Spring Boot, Spring MVC, Thymeleaf",
        cvSkillsCodequality: "Code Quality & Testing",
        cvSkillsCodequalityList: "Lombok, SonarQube, JUnit, Mockito",
        cvSkillsOthertools: "Other Tools",
        cvSkillsOthertoolsList: "Maven, Git, GitLab CI/CD, Docker",
        cvSkillsIdes: "IDEs",
        cvSkillsIdesList: "IntelliJ, PyCharm, VS Code",
        cvSkillsLanguageskills: "Language Skills",
        cvSkillsLanguageskillsList: "German (native speaker), English (business fluent)",
        cvBackButton: "Back to Home"
    },
    de: {
        // navbar
        navAboutMe: "Über Mich",
        navContactMe: "Kontakt",
        navCv: "Lebenslauf",

        // index.html
        indexGreeting: "Wilkommen auf meiner Website",
        indexGreetingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        indexConnectSubtitle: "Schauen Sie sich mein GitHub Profil und das Repository für diese Website an:",
        indexGithubProfileButton: "Mein GitHub Profil",
        indexGithubRepoButton: "Website Repository",

        projectsTitle: "Meine Projekte",
        projectsTitle1: "adrianschoen.dev",
        projectsTitle1Text: "Auf dieser Website befinden Sie sich gerade.",
        projectsTitle2: "Projekt 2",
        projectsTitle2Text: "Beschreibung von Projekt 2.",
        projectsTitle3: "Projekt 3",
        projectsTitle3Text: "Beschreibung von Projekt 3.",
        projectsTitle4: "Projekt 4",
        projectsTitle4Text: "Beschreibung von Projekt 4.",
        projectsTitle5: "Projekt 5",
        projectsTitle5Text: "Beschreibung von Projekt 5.",
        projectsTitle6: "Projekt 6",
        projectsTitle6Text: "Beschreibung von Projekt 6.",

        projectsTitle1ModalTitle1: "adrianschoen.dev",
        projectsTitle1ModalTitle1Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle1ModalTitle1Button: "Zur GitHub Repo",
        projectsTitle2ModalTitle2: "Projekt 2",
        projectsTitle2ModalTitle2Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle2ModalTitle2Button: "Zur GitHub Repo",
        projectsTitle3ModalTitle3: "Projekt 3",
        projectsTitle3ModalTitle3Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle3ModalTitle3Button: "Zur GitHub Repo",
        projectsTitle4ModalTitle4: "Projekt 4",
        projectsTitle4ModalTitle4Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle4ModalTitle4Button: "Zur GitHub Repo",
        projectsTitle5ModalTitle5: "Projekt 5",
        projectsTitle5ModalTitle5Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle5ModalTitle5Button: "Zur GitHub Repo",
        projectsTitle6ModalTitle6: "Projekt 6",
        projectsTitle6ModalTitle6Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor venenatis nulla at porta. Quisque pharetra elementum viverra. Maecenas sit amet tellus diam. Integer porttitor dictum pellentesque. Morbi sed lacus ac sapien placerat mollis. Etiam ultricies eleifend ex, ac commodo est dignissim non.",
        projectsTitle6ModalTitle6Button: "Zur GitHub Repo",

        // about.html
        aboutAboutMe: "Über Mich",
        aboutAboutMeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        aboutBackButton: "Zurück zur Startseite",

        // contact.html
        contactContactMe: "Kontakt",
        contactContactMeText: "Wenn Sie mit uns in Kontakt treten möchten, wenden Sie sich bitte an ",
        contactBackButton: "Zurück zur Startseite",

        // cv.html
        cvCv: "Lebenslauf",
        cvCvText: "(Ich habe noch kein professionelles Bild)",
        cvWorkexperience: "Berufserfahrung",
        cvWorkexperiencePosition: "Dualer Student Informatik",
        cvWorkexperiencePositionDate: "Oktober 2023 - September 2026",
        cvWorkexperiencePositionC1: "IONOS SE, Okt. 2025 - Sep. 2026",
        cvWorkexperiencePositionC11: "Habe cooles gemacht",
        cvWorkexperiencePositionC12: "Und so zeugs",
        cvWorkexperiencePositionC2: "1&1 Telecommunications SE, Okt. 2024 - Sep. 2025",
        cvWorkexperiencePositionC21: "Marcel D'avis",
        cvWorkexperiencePositionC22: "Seit 16 Jahren 1&1",
        cvWorkexperiencePositionC3: "1&1 Mail & Media GmbH, Okt. 2023 - Sep. 2024",
        cvWorkexperiencePositionC31: "Entwickelte ein fundiertes Verständnis der Java Service- und Repository-Pattern sowie der Frameworks Spring und Spring Boot zur Erstellung robuster Backend-Anwendungen mit RESTful Services und zur Verbesserung der Anwendungsarchitektur.",
        cvWorkexperiencePositionC32: "Implementierte Unit-Tests mit JUnit und Mockito in Spring Boot-Anwendungen, um die Zuverlässigkeit und Funktionalität des Codes zu gewährleisten und die Codequalität zu steigern.",
        cvWorkexperiencePositionC33: "Reduzierte technische Schulden durch den Einsatz von SonarQube, was die Wartbarkeit des Codes verbesserte.",
        cvWorkexperiencePositionC34: "Recherchierte und implementierte eine CI/CD-Pipeline im Rahmen einer Projektarbeit, um den Entwicklungsprozess zu optimieren und die Effizienz des Deployments zu steigern.",
        cvWorkexperiencePositionC35: "Erwarb praktische Erfahrung in einem agilen Arbeitsumfeld, einschließlich der Teilnahme an Scrum-Meetings Sprint-Planungen und Retrospektiven, was meine Fähigkeit zur Zusammenarbeit im Team und zur Anpassung an sich ändernde Anforderungen stärkte.",
        cvEducation: "Ausbildung",
        cvEducationCourse: "B. Sc. Informatik",
        cvEducationCourseDate: "Okt. 2023 - Sep. 2026",
        cvEducationUniversity: "Duale Hochschule Baden-Württemberg Karlsruhe",
        cvProjects: "Projekte",
        cvProjects1Name: "Persönliche Website",
        cvProjects1Desc: "Diese Website, auf der Sie sich gerade befinden. Hier sind alle meine anderen Projekte aufgelistet.",
        cvSkills: "Fachkenntnisse",
        cvSkillsProgramminglanguages: "Programmiersprachen",
        cvSkillsProgramminglanguagesList: "Java, Python, JavaScript, HTML/CSS",
        cvSkillsFrameworks: "Frameworks",
        cvSkillsFrameworksList: "Spring Boot, Spring MVC, Thymeleaf",
        cvSkillsCodequality: "Code Quality & Testing",
        cvSkillsCodequalityList: "Lombok, SonarQube, JUnit, Mockito",
        cvSkillsOthertools: "Sonstige Tools",
        cvSkillsOthertoolsList: "Maven, Git, GitLab CI/CD, Docker",
        cvSkillsIdes: "IDEs",
        cvSkillsIdesList: "IntelliJ, PyCharm, VS Code",
        cvSkillsLanguageskills: "Sprachkenntnisse",
        cvSkillsLanguageskillsList: "Deutsch (muttersprachlich), Englisch (verhandlungssicher)",
        cvBackButton: "Zurück zur Startseite"
    }
};

function switchLanguage(lang) {
    sessionStorage.setItem('language', lang);
    const currentPage = window.location.href.split('/').pop();

    // navbar
    document.querySelector('#nav-about-me').textContent = translations[lang].navAboutMe;
    document.querySelector('#nav-contact-me').textContent = translations[lang].navContactMe;
    document.querySelector('#nav-cv').textContent = translations[lang].navCv;

    // index.html
    if (currentPage === '' || currentPage ==='index.html') {
        document.querySelector('#index-greeting').textContent = translations[lang].indexGreeting;
        document.querySelector('#index-greeting-text').textContent = translations[lang].indexGreetingText;
        document.querySelector('#index-connect-subtitle').textContent = translations[lang].indexConnectSubtitle;
        document.querySelector('#index-github-profile-button').textContent = translations[lang].indexGithubProfileButton;
        document.querySelector('#index-github-repo-button').textContent = translations[lang].indexGithubRepoButton;
        document.querySelector('#projects-title').textContent = translations[lang].projectsTitle;

        document.querySelector('#projects-title-1').textContent = translations[lang].projectsTitle1;
        document.querySelector('#projects-title-1-text').textContent = translations[lang].projectsTitle1Text;
        document.querySelector('#projects-title-2').textContent = translations[lang].projectsTitle2;
        document.querySelector('#projects-title-2-text').textContent = translations[lang].projectsTitle2Text;
        document.querySelector('#projects-title-3').textContent = translations[lang].projectsTitle3;
        document.querySelector('#projects-title-3-text').textContent = translations[lang].projectsTitle3Text;
        document.querySelector('#projects-title-4').textContent = translations[lang].projectsTitle4;
        document.querySelector('#projects-title-4-text').textContent = translations[lang].projectsTitle4Text;
        document.querySelector('#projects-title-5').textContent = translations[lang].projectsTitle5;
        document.querySelector('#projects-title-5-text').textContent = translations[lang].projectsTitle5Text;
        document.querySelector('#projects-title-6').textContent = translations[lang].projectsTitle6;
        document.querySelector('#projects-title-6-text').textContent = translations[lang].projectsTitle6Text;

        document.querySelector('#projects-title-1-modal-title-1').textContent = translations[lang].projectsTitle1ModalTitle1;
        document.querySelector('#projects-title-1-modal-title-1-text').textContent = translations[lang].projectsTitle1ModalTitle1Text;
        document.querySelector('#projects-title-1-modal-title-1-button').textContent = translations[lang].projectsTitle1ModalTitle1Button;
        document.querySelector('#projects-title-2-modal-title-2').textContent = translations[lang].projectsTitle2ModalTitle2;
        document.querySelector('#projects-title-2-modal-title-2-text').textContent = translations[lang].projectsTitle2ModalTitle2Text;
        document.querySelector('#projects-title-2-modal-title-2-button').textContent = translations[lang].projectsTitle2ModalTitle2Button;
        document.querySelector('#projects-title-3-modal-title-3').textContent = translations[lang].projectsTitle3ModalTitle3;
        document.querySelector('#projects-title-3-modal-title-3-text').textContent = translations[lang].projectsTitle3ModalTitle3Text;
        document.querySelector('#projects-title-3-modal-title-3-button').textContent = translations[lang].projectsTitle3ModalTitle3Button;
        document.querySelector('#projects-title-4-modal-title-4').textContent = translations[lang].projectsTitle4ModalTitle4;
        document.querySelector('#projects-title-4-modal-title-4-text').textContent = translations[lang].projectsTitle4ModalTitle4Text;
        document.querySelector('#projects-title-4-modal-title-4-button').textContent = translations[lang].projectsTitle4ModalTitle4Button;
        document.querySelector('#projects-title-5-modal-title-5').textContent = translations[lang].projectsTitle5ModalTitle5;
        document.querySelector('#projects-title-5-modal-title-5-text').textContent = translations[lang].projectsTitle5ModalTitle5Text;
        document.querySelector('#projects-title-5-modal-title-5-button').textContent = translations[lang].projectsTitle5ModalTitle5Button;
        document.querySelector('#projects-title-6-modal-title-6').textContent = translations[lang].projectsTitle6ModalTitle6;
        document.querySelector('#projects-title-6-modal-title-6-text').textContent = translations[lang].projectsTitle6ModalTitle6Text;
        document.querySelector('#projects-title-6-modal-title-6-button').textContent = translations[lang].projectsTitle6ModalTitle6Button;
    }

    // about.html
    if (currentPage === 'about' || currentPage === 'about.html') {
        document.querySelector('#about-about-me').textContent = translations[lang].aboutAboutMe;
        document.querySelector('#about-about-me-text').textContent = translations[lang].aboutAboutMeText;
        document.querySelector('#about-back-button').textContent = translations[lang].aboutBackButton;
    }

    // contact.html
    if (currentPage === 'contact' || currentPage === 'contact.html') {
        document.querySelector('#contact-contact-me').textContent = translations[lang].contactContactMe;
        document.querySelector('#contact-contact-me-text').textContent = translations[lang].contactContactMeText;
        document.querySelector('#contact-back-button').textContent = translations[lang].contactBackButton;
    }

    // cv.html
    if (currentPage === 'cv' || currentPage === 'cv.html') {
        document.querySelector('#cv-cv').textContent = translations[lang].cvCv;
        document.querySelector('#cv-cv-text').textContent = translations[lang].cvCvText;
        document.querySelector('#cv-workexperience').textContent = translations[lang].cvWorkexperience;
        document.querySelector('#cv-workexperience-position').textContent = translations[lang].cvWorkexperiencePosition;
        document.querySelector('#cv-workexperience-position-date').textContent = translations[lang].cvWorkexperiencePositionDate;
        document.querySelector('#cv-workexperience-position-c1').textContent = translations[lang].cvWorkexperiencePositionC1;
        document.querySelector('#cv-workexperience-position-c1-1').textContent = translations[lang].cvWorkexperiencePositionC11;
        document.querySelector('#cv-workexperience-position-c1-2').textContent = translations[lang].cvWorkexperiencePositionC12;
        document.querySelector('#cv-workexperience-position-c2').textContent = translations[lang].cvWorkexperiencePositionC2;
        document.querySelector('#cv-workexperience-position-c2-1').textContent = translations[lang].cvWorkexperiencePositionC21;
        document.querySelector('#cv-workexperience-position-c2-2').textContent = translations[lang].cvWorkexperiencePositionC22;
        document.querySelector('#cv-workexperience-position-c3').textContent = translations[lang].cvWorkexperiencePositionC3;
        document.querySelector('#cv-workexperience-position-c3-1').textContent = translations[lang].cvWorkexperiencePositionC31;
        document.querySelector('#cv-workexperience-position-c3-2').textContent = translations[lang].cvWorkexperiencePositionC32;
        document.querySelector('#cv-workexperience-position-c3-3').textContent = translations[lang].cvWorkexperiencePositionC33;
        document.querySelector('#cv-workexperience-position-c3-4').textContent = translations[lang].cvWorkexperiencePositionC34;
        document.querySelector('#cv-workexperience-position-c3-5').textContent = translations[lang].cvWorkexperiencePositionC35;
        document.querySelector('#cv-education').textContent = translations[lang].cvEducation;
        document.querySelector('#cv-education-course').textContent = translations[lang].cvEducationCourse;
        document.querySelector('#cv-education-course-date').textContent = translations[lang].cvEducationCourseDate;
        document.querySelector('#cv-education-university').textContent = translations[lang].cvEducationUniversity;
        document.querySelector('#cv-projects').textContent = translations[lang].cvProjects;
        document.querySelector('#cv-projects-1-name').textContent = translations[lang].cvProjects1Name;
        document.querySelector('#cv-projects-1-desc').textContent = translations[lang].cvProjects1Desc;
        document.querySelector('#cv-skills').textContent = translations[lang].cvSkills;
        document.querySelector('#cv-skills-programminglanguages').textContent = translations[lang].cvSkillsProgramminglanguages;
        document.querySelector('#cv-skills-programminglanguages-list').textContent = translations[lang].cvSkillsProgramminglanguagesList;
        document.querySelector('#cv-skills-frameworks').textContent = translations[lang].cvSkillsFrameworks;
        document.querySelector('#cv-skills-frameworks-list').textContent = translations[lang].cvSkillsFrameworksList;
        document.querySelector('#cv-skills-codequality').textContent = translations[lang].cvSkillsCodequality;
        document.querySelector('#cv-skills-codequality-list').textContent = translations[lang].cvSkillsCodequalityList;
        document.querySelector('#cv-skills-othertools').textContent = translations[lang].cvSkillsOthertools;
        document.querySelector('#cv-skills-othertools-list').textContent = translations[lang].cvSkillsOthertoolsList;
        document.querySelector('#cv-skills-ides').textContent = translations[lang].cvSkillsIdes;
        document.querySelector('#cv-skills-ides-list').textContent = translations[lang].cvSkillsIdesList;
        document.querySelector('#cv-skills-languageskills').textContent = translations[lang].cvSkillsLanguageskills;
        document.querySelector('#cv-skills-languageskills-list').textContent = translations[lang].cvSkillsLanguageskillsList;
        document.querySelector('#cv-back-button').textContent = translations[lang].cvBackButton;
    }
}

function loadLanguage() {
    const lang = sessionStorage.getItem('language') || 'de'; // Default to German
    switchLanguage(lang);
    console.log('yeeeet');
}

document.addEventListener('DOMContentLoaded', loadLanguage);
document.querySelector('#language-selector').addEventListener('change', (event) => {
    switchLanguage(event.target.value);
});

window.addEventListener('hashchange', () => {
    // You can call a function here if you need to handle something when the hash changes
    // For example, you might want to load a specific section based on the new hash
    loadLanguage(); // If you want to re-load the language when the hash changes
});
