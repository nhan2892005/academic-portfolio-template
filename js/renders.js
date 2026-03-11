function expandDesc(text, extraClass = '') {
    const moreLabel = currentLang === 'vi' ? 'Xem thêm' : 'Read more';
    const lessLabel = currentLang === 'vi' ? 'Thu gọn'  : 'Collapse';
    return `<div class="text-expandable ${extraClass}">${escapeHTML(text)}</div>` +
           `<button class="read-more-btn" aria-expanded="false"` +
           ` data-more="${escapeHTML(moreLabel)}" data-less="${escapeHTML(lessLabel)}">` +
           `<span class="rmb-label">${escapeHTML(moreLabel)}</span>` +
           `<span class="rmb-chevron">▾</span>` +
           `</button>`;
}

function sectionHead(label, title) {
    return `<div class="acad-section-head">
        <span class="acad-section-label">${label}</span>
        <h2 class="acad-section-title">${title}</h2>
    </div>`;
}

function renderHeader(data) {
    if (!data) return '';

    const shortName = d(data.name).split(' ').pop(); // last name
    document.getElementById('nav-name').innerHTML =
        `<span class="nav-initials">${d(data.name).split(' ').map(w => w[0]).slice(-2).join('')}</span>`;

    document.getElementById('footer-name').innerText = d(data.name);

    document.getElementById('footer-socials').innerHTML = (data.socials || []).map(s =>
        `<a href="${escapeHTML(s.url)}" target="_blank" title="${escapeHTML(s.url)}">
            <i class="${escapeHTML(s.icon)}"></i>
        </a>`).join('');

    const linksHTML = (data.socials || []).map(s =>
        `<a href="${escapeHTML(s.url)}" target="_blank" class="hero-link">
            <i class="${escapeHTML(s.icon)}"></i>
            <span>${escapeHTML(s.label || s.icon.split('fa-').pop())}</span>
        </a>`).join('');

    const interestsHTML = (data.interests || []).map(i =>
        `<span class="interest-tag">${escapeHTML(i)}</span>`).join('');

    return `
    <section id="gioi-thieu" class="scroll-mt">
        <div class="hero-photo-wrap">
            <img src="${escapeHTML(data.picture)}" alt="${escapeHTML(d(data.name))}">
            <span class="hero-photo-badge">${escapeHTML(d(data.role || 'Researcher'))}</span>
        </div>
        <div class="hero-content">
            <h1 class="hero-name">${escapeHTML(d(data.name))}</h1>
            <p class="hero-label">${escapeHTML(d(data.label))}</p>
            ${interestsHTML ? `<div class="hero-interests">${interestsHTML}</div>` : ''}
            <div class="hero-links">${linksHTML}</div>
        </div>
    </section>`;
}

function renderResearchDirections(data) {
    if (!data || data.length === 0) return '';
    addNavLink('research-directions', t('navResearch'), 'fas fa-flask');

    const cardsHTML = data.map(dir => `
        <div class="research-card">
            <div class="research-card-title">${escapeHTML(d(dir.title))}</div>
            ${expandDesc(d(dir.description), 'research-card-desc')}
            <div class="research-tags">
                ${dir.tags.map(tag => `<span class="research-tag">${escapeHTML(tag)}</span>`).join('')}
            </div>
        </div>`).join('');

    return `
    <section id="research-directions" class="mb-14 scroll-mt">
        ${sectionHead('Research', t('research'))}
        <div class="research-row">${cardsHTML}</div>
    </section>`;
}

function renderPublications(data) {
    if (!data || data.length === 0) return '';
    addNavLink('bai-bao', t('navPub'), 'fas fa-book-open');

    const pubHTML = data.map((pub, i) => `
        <div class="pub-entry">
            <div class="pub-num">[${i + 1}]</div>
            ${pub.image ? `
                <img 
                    src="${escapeHTML(pub.image)}" 
                    alt="${escapeHTML(pub.title)}" 
                    class="pub-thumb"
                    onclick="openImageModal('${escapeHTML(pub.image)}')"
                >` : ''
            }
            <div class="pub-body">
                <div class="pub-venue-row">
                    <span class="pub-venue">${escapeHTML(pub.publisher.split(' ')[0])}</span>
                    <span class="pub-date">${escapeHTML(pub.date)}</span>
                </div>
                <div class="pub-title">${escapeHTML(pub.title)}</div>
                <div class="pub-publisher">${escapeHTML(pub.publisher)}</div>
                ${pub.description ? expandDesc(d(pub.description), 'pub-desc') : ''}
                ${pub.tags && pub.tags.length > 0 ? `
                <div class="pub-tags">
                    ${pub.tags.map(tag => `<span class="pub-tag">${escapeHTML(tag)}</span>`).join('')}
                </div>` : ''}
                ${pub.url ? `
                <a href="${escapeHTML(pub.url)}" target="_blank" class="pub-link">
                    <i class="fas fa-file-alt" style="font-size:11px"></i> ${t('readBtn')} →
                </a>` : ''}
            </div>
        </div>`).join('');

    return `
    <section id="bai-bao" class="mb-14 scroll-mt">
        ${sectionHead('Publications', t('publications'))}
        <div class="pub-list">${pubHTML}</div>
    </section>`;
}

function renderTechStack(data) {
    if (!data || data.length === 0) return '';
    addNavLink('tech-stack', t('navTech'), 'fas fa-layer-group');

    const catsHTML = data.map(cat => `
        <div class="tech-category">
            <div class="tech-cat-label">
                <i class="${escapeHTML(cat.icon)}" style="opacity:.6"></i>
                ${escapeHTML(d(cat.category))}
            </div>
            <div class="tech-skills">
                ${cat.skills.map(s => `<span class="tech-skill">${escapeHTML(s)}</span>`).join('')}
            </div>
        </div>`).join('');

    return `
    <section id="tech-stack" class="mb-14 scroll-mt">
        ${sectionHead('Technical', t('techStack'))}
        <div class="tech-grid">${catsHTML}</div>
    </section>`;
}

function renderExperience(data) {
    if (!data || data.length === 0) return '';
    addNavLink('kinh-nghiem', t('navExp'), 'fas fa-briefcase');

    const expHTML = data.map(job => {
        const endStr = (job.endDate && typeof job.endDate === 'object')
            ? d(job.endDate) : (job.endDate || t('ongoing'));
        return `
        <div class="exp-entry">
            <div class="exp-date">${escapeHTML(job.startDate)} — ${escapeHTML(endStr)}</div>
            <div class="exp-body">
                ${job.logo
                    ? `<img src="${escapeHTML(job.logo)}" alt="${escapeHTML(d(job.company))}" class="exp-logo">`
                    : `<div class="exp-logo-placeholder"><i class="fas fa-building"></i></div>`}
                <div class="exp-role">${escapeHTML(d(job.position))}</div>
                <div class="exp-company">${escapeHTML(d(job.company))}</div>
                ${expandDesc(d(job.description), 'exp-desc')}
                ${job.tags ? `<div class="exp-tags">${job.tags.map(t2 =>
                    `<span class="exp-tag">${escapeHTML(t2)}</span>`).join('')}</div>` : ''}
            </div>
        </div>`;
    }).join('');

    return `
    <section id="kinh-nghiem" class="mb-14 scroll-mt">
        ${sectionHead('Experience', t('experience'))}
        <div class="exp-list">${expHTML}</div>
    </section>`;
}

function renderActivities(data) {
    if (!data || data.length === 0) return '';
    addNavLink('hoat-dong', t('navActivities'), 'fas fa-hands-helping');

    const actHTML = data.map(item => {
        const endStr = (item.endDate && typeof item.endDate === 'object')
            ? d(item.endDate) : (item.endDate || t('ongoing'));
        return `
        <div class="act-card">
            <div class="act-card-header">
                ${item.logo
                    ? `<img src="${escapeHTML(item.logo)}" alt="${escapeHTML(d(item.company))}" class="act-logo">`
                    : `<div class="act-logo-ph"><i class="fas fa-users"></i></div>`}
                <div class="act-title-group">
                    <div class="act-role">${escapeHTML(d(item.position))}</div>
                    <div class="act-org">${escapeHTML(d(item.company))}</div>
                </div>
                <div class="act-date">${escapeHTML(item.startDate)}–${escapeHTML(endStr)}</div>
            </div>
            ${expandDesc(d(item.description), 'act-desc')}
            ${item.tags ? `<div class="act-tags">${item.tags.map(t2 =>
                `<span class="act-tag">${escapeHTML(t2)}</span>`).join('')}</div>` : ''}
        </div>`;
    }).join('');

    return `
    <section id="hoat-dong" class="mb-14 scroll-mt">
        ${sectionHead('Activities', t('activities'))}
        <div class="act-row">${actHTML}</div>
    </section>`;
}

function renderProjects(data) {
    if (!data || data.length === 0) return '';
    addNavLink('du-an', t('navProjects'), 'fas fa-laptop-code');

    const projHTML = data.map(proj => `
        <div class="proj-card">
            <img src="${escapeHTML(proj.image)}" alt="${escapeHTML(proj.name)}" class="proj-thumb">
            <div class="proj-body">
                <div class="proj-name">${escapeHTML(proj.name)}</div>
                ${expandDesc(d(proj.description), 'proj-desc')}
                <div class="proj-techs">
                    ${proj.technologies.map(t2 => `<span class="proj-tech">${escapeHTML(t2)}</span>`).join('')}
                </div>
                <div class="proj-links">
                    ${proj.github && proj.github !== '#' ? `
                    <a href="${escapeHTML(proj.github)}" target="_blank" class="proj-link">
                        <i class="fab fa-github"></i> ${t('codeBtn')}
                    </a>` : ''}
                    ${proj.url && proj.url !== '#' ? `
                    <a href="${escapeHTML(proj.url)}" target="_blank" class="proj-link">
                        <i class="fas fa-external-link-alt" style="font-size:10px"></i> ${t('demoBtn')}
                    </a>` : ''}
                </div>
            </div>
        </div>`).join('');

    return `
    <section id="du-an" class="mb-14 scroll-mt">
        ${sectionHead('Projects', t('projects'))}
        <div class="proj-grid">${projHTML}</div>
    </section>`;
}

function renderAwards(data) {
    if (!data || data.length === 0) return '';
    addNavLink('giai-thuong', t('navCerts'), 'fas fa-medal');

    const awardsHTML = data.map(award => `
        <div class="award-entry">
            <div class="award-icon"><i class="${escapeHTML(award.icon)}"></i></div>
            <div class="award-body">
                <div class="award-title">${escapeHTML(d(award.title))}</div>
                <div class="award-meta">${escapeHTML(d(award.issuer))} · ${escapeHTML(award.date)}</div>
                <div class="award-desc">${escapeHTML(d(award.description))}</div>
            </div>
        </div>`).join('');

    return `
    <section id="giai-thuong" class="mb-14 scroll-mt">
        ${sectionHead('Honors', t('certificates'))}
        <div class="awards-list">${awardsHTML}</div>
    </section>`;
}

function renderEducation(data) {
    if (!data || data.length === 0) return '';
    addNavLink('hoc-van', t('navEdu'), 'fas fa-graduation-cap');

    const eduHTML = data.map(edu => `
        <div class="edu-entry">
            ${edu.logo
                ? `<img src="${escapeHTML(edu.logo)}" alt="${escapeHTML(d(edu.institution))}" class="edu-logo">`
                : `<div class="edu-logo-ph"><i class="fas fa-university"></i></div>`}
            <div class="edu-body">
                <div class="edu-inst">${escapeHTML(d(edu.institution))}</div>
                <div class="edu-degree">${escapeHTML(d(edu.degree))} in ${escapeHTML(d(edu.area))}</div>
                <div class="edu-footer">
                    <span class="edu-gpa">${escapeHTML(d(edu.gpa))}</span>
                    <span class="edu-dates">${escapeHTML(edu.startDate)} – ${escapeHTML(edu.endDate)}</span>
                    ${edu.transcriptUrl ? `
                    <a href="${escapeHTML(edu.transcriptUrl)}" class="edu-transcript">
                        <i class="fas fa-chart-line" style="font-size:10px"></i> ${t('viewBtn')}
                    </a>` : ''}
                </div>
            </div>
        </div>`).join('');

    return `
    <section id="hoc-van" class="mb-14 scroll-mt">
        ${sectionHead('Education', t('education'))}
        <div class="edu-list">${eduHTML}</div>
    </section>`;
}

function renderTerminal() {
    addNavLink('terminal-section', t('navTerminal'), 'fas fa-terminal');
    return `
    <section id="terminal-section" class="mb-14 scroll-mt">
        ${sectionHead('Interactive', t('terminal'))}
        <div class="terminal-wrap" onclick="document.getElementById('terminal-input').focus()">
            <div class="terminal-bar">
                <div class="terminal-dots">
                    <div class="terminal-dot terminal-dot-r"></div>
                    <div class="terminal-dot terminal-dot-y"></div>
                    <div class="terminal-dot terminal-dot-g"></div>
                </div>
                <div class="terminal-label">researcher@portfolio:~</div>
            </div>
            <div class="terminal-body">
                <div id="terminal-output">
                    <div><span style="color:#79c0ff">System:</span> ${t('terminalInit')} <span style="color:#e3b341;background:rgba(227,179,65,.1);padding:1px 6px;border-radius:3px">help</span> ${t('terminalHint')}</div>
                </div>
                <div class="terminal-input-row">
                    <span class="terminal-prompt">guest@portfolio:~$</span>
                    <input type="text" id="terminal-input"
                           autocomplete="off" spellcheck="false"
                           placeholder="${t('terminalPlaceholder')}">
                </div>
            </div>
        </div>
    </section>`;
}