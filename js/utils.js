const app = document.getElementById('main-content');
let navDesktopHTML = '';
let navMobileHTML  = '';

const escapeHTML = (str) => {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
};

function addNavLink(id, label, icon) {
    navDesktopHTML += `
        <a href="#${id}" class="text-gray-500 hover:text-primary text-xs font-medium transition flex items-center gap-1">
            <i class="${icon} text-xs"></i> ${label}
        </a>`;
    navMobileHTML += `
        <a href="#${id}"
           class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
           onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            <i class="${icon} w-4 text-center text-xs"></i> ${label}
        </a>`;
}

function langToggleHTML() {
    const isVi = currentLang === 'vi';
    return `<button onclick="toggleLang()"
        title="${isVi ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}"
        class="flex items-center gap-1 px-2.5 py-1 rounded-full border-2 text-xs font-bold ml-2
               transition-all duration-300 select-none cursor-pointer
               ${isVi ? 'border-red-400 text-red-600 bg-red-50 hover:bg-red-100'
                       : 'border-blue-500 text-blue-600 bg-blue-50 hover:bg-blue-100'}">
        <span>${isVi ? '🇻🇳' : '🇬🇧'}</span>
        <span>${isVi ? 'VI' : 'EN'}</span>
    </button>`;
}
window.toggleLang = function () {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('lang', currentLang);
    buildPortfolio(portfolioData);
};