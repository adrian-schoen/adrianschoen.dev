// language-switcher.js

const translations = {
    en: {
        navAboutMe: "About Me",
        navMyProjects: "My Projects",
        navContactMe: "Contact Me",
        navCv: "CV",

        indexGreeting: "Welcome on my Website",
        indexGreetingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        indexViewProjectsButton: "View my Projects",
        indexConnect: "Connect with me",
        indexConnectSubtitle: "Feel free to check out my GitHub and the repository for this website:",
        indexGithubProfileButton: "My GitHub Profile",
        indexGithubRepoButton: "Website Repository",
        indexContact: "Contact",
        indexContactText: "If you'd like to get in touch, feel free to reach out on "
    },
    de: {
        navAboutMe: "Über Mich",
        navMyProjects: "Meine Projekte",
        navContactMe: "Kontakt",
        navCv: "Lebenslauf",

        indexGreeting: "Wilkommen auf meiner Website",
        indexGreetingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        indexViewProjectsButton: "Meine Projekte",
        indexConnect: "Verbinden sie sich mit mir",
        indexConnectSubtitle: "Schauen Sie sich mein GitHub Profil und das Repository für diese Website an:",
        indexGithubProfileButton: "Mein GitHub Profil",
        indexGithubRepoButton: "Website Repository",
        indexContact: "Kontakt",
        indexContactText: "Wenn Sie mit uns in Kontakt treten möchten, wenden Sie sich bitte an "
    }
};

function switchLanguage(lang) {
    sessionStorage.setItem('language', lang); // Use sessionStorage instead of localStorage
    document.querySelector('#nav-about-me').textContent = translations[lang].navAboutMe;
    document.querySelector('#nav-my-projects').textContent = translations[lang].navMyProjects;
    document.querySelector('#nav-contact-me').textContent = translations[lang].navContactMe;
    document.querySelector('#nav-cv').textContent = translations[lang].navCv;
    
    document.querySelector('#index-greeting').textContent = translations[lang].indexGreeting;
    document.querySelector('#index-greeting-text').textContent = translations[lang].indexGreetingText;
    document.querySelector('#index-view-projects-button').textContent = translations[lang].indexViewProjectsButton;
    document.querySelector('#index-connect').textContent = translations[lang].indexConnect;
    document.querySelector('#index-connect-subtitle').textContent = translations[lang].indexConnectSubtitle;
    document.querySelector('#index-github-profile-button').textContent = translations[lang].indexGithubProfileButton;
    document.querySelector('#index-github-repo-button').textContent = translations[lang].indexGithubRepoButton;
    document.querySelector('#index-contact').textContent = translations[lang].indexContact;
    document.querySelector('#index-contact-text').textContent = translations[lang].indexContactText;
}

function loadLanguage() {
    const lang = sessionStorage.getItem('language') || 'de'; // Default to German
    switchLanguage(lang);
}

document.addEventListener('DOMContentLoaded', loadLanguage);

document.querySelector('#language-selector').addEventListener('change', (event) => {
    switchLanguage(event.target.value);
});
