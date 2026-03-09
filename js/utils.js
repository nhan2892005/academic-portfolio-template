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

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.read-more-btn');
    if (!btn) return;

    const textEl = btn.previousElementSibling;
    if (!textEl || !textEl.classList.contains('text-expandable')) return;

    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        textEl.style.maxHeight = '';
        textEl.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.rmb-label').textContent = btn.dataset.more;
    } else {
        textEl.style.maxHeight = textEl.scrollHeight + 'px';
        textEl.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('.rmb-label').textContent = btn.dataset.less;
    }
});

function initExpandables() {
    document.querySelectorAll('.text-expandable').forEach(el => {
        const btn = el.nextElementSibling;
        if (!btn || !btn.classList.contains('read-more-btn')) return;

        el.classList.remove('is-expanded');
        el.style.maxHeight = '';
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.rmb-label').textContent = btn.dataset.more;

        const isShort = el.scrollHeight <= el.offsetHeight + 2; // +2px tolerance
        btn.dataset.short = isShort ? 'true' : 'false';
    });
}

function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("modalImg");

    img.src = src;
    modal.style.display = "flex";
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}