function buildPortfolio(data) {
    navDesktopHTML = '';
    navMobileHTML  = '';

    const scrollY = window.scrollY;

    app.innerHTML = [
        renderHeader(data.basics),
        //renderTechStack(data.techStack),
        renderResearchDirections(data.researchDirections),
        renderPublications(data.publications),
        renderExperience(data.experience),
        renderActivities(data.activities),
        renderProjects(data.projects),
        renderAwards(data.awards),
        renderEducation(data.education),
        renderTerminal()
    ].join('');

    const navLinksEl   = document.getElementById('nav-links');
    const mobileMenuEl = document.getElementById('mobile-menu');

    navLinksEl.innerHTML   = navDesktopHTML + langToggleHTML();
    mobileMenuEl.innerHTML = navMobileHTML;
    document.getElementById('current-year').innerText = new Date().getFullYear();
    document.documentElement.lang = currentLang;

    window.scrollTo(0, scrollY);
    initTerminal(data);
}
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
buildPortfolio(portfolioData);