function initTerminal(data) {
    const input  = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    if (!input || !output) return;

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    };

    const commands = {
        'help':       t('helpText'),
        'about':      () => {
            scrollTo('gioi-thieu');
            return `<span class="text-gray-400 italic">${t('scrollAbout')}</span>\n\n${d(data.basics.summary)}`;
        },
        'skills':     () => {
            scrollTo('tech-stack');
            const list = data.techStack
                .map(tc => `<span class="text-blue-300 font-bold">${d(tc.category)}:</span> ${tc.skills.join(', ')}`)
                .join('\n');
            return `<span class="text-gray-400 italic">${t('scrollSkills')}</span>\n\n${list}`;
        },
        'experience': () => {
            scrollTo('kinh-nghiem');
            return `<span class="text-gray-400 italic">${t('scrollExp')}</span>`;
        },
        'projects':   () => {
            scrollTo('du-an');
            const list = data.projects
                .map(p => `- <span class="font-bold text-green-300">${p.name}</span>: ${d(p.description)}`)
                .join('\n');
            return `<span class="text-gray-400 italic">${t('scrollProjects')}</span>\n\n${list}`;
        },
        'awards':     () => {
            scrollTo('giai-thuong');
            return `<span class="text-gray-400 italic">${t('scrollAwards')}</span>`;
        },
        'education':  () => {
            scrollTo('hoc-van');
            return `<span class="text-gray-400 italic">${t('scrollEdu')}</span>`;
        },
        'lang':       () => {
            toggleLang();
            return currentLang === 'en'
                ? '<span class="text-yellow-300">✅ Switched to English 🇬🇧 — page reloading...</span>'
                : '<span class="text-yellow-300">✅ Đã chuyển sang Tiếng Việt 🇻🇳 — đang tải lại...</span>';
        },
        'clear':      () => { output.innerHTML = ''; return ''; },
    };

    input.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        const val = this.value.trim().toLowerCase();
        this.value = '';

        const cmdLine = document.createElement('div');
        cmdLine.innerHTML = `<span class="text-blue-400 font-bold">guest@nhan:~$</span> <span class="text-white">${escapeHTML(val)}</span>`;
        output.appendChild(cmdLine);

        if (val) {
            let resp = commands[val] !== undefined
                ? (typeof commands[val] === 'function' ? commands[val]() : commands[val])
                : `bash: ${escapeHTML(val)}: ${t('notFound')}`;

            if (resp) {
                const resLine = document.createElement('div');
                resLine.className = 'text-gray-300 mb-3 mt-1';
                resLine.innerHTML = resp;
                output.appendChild(resLine);
            }
        }
        output.scrollTop = output.scrollHeight;
    });
}