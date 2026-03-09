const SLIDES = [

  // ── 0. TITLE ──────────────────────────────────────────────────────────────
  {
    id: 'title',
    html: `
      <div class="title-slide">
        <div class="title-bg-grid"></div>

        <header class="title-header">
          <div class="logo-row">
            <img src="images/logo/hcmut.png"     alt="HCMUT"     class="logo-img" onerror="this.replaceWith(makeFallback('HCMUT'))"/>
            <div class="logo-sep"></div>
            <img src="images/logo/hpcc.png"      alt="HPCC Lab"  class="logo-img" onerror="this.replaceWith(makeFallback('HPCC'))"/>
            <div class="logo-sep"></div>
            <img src="images/logo/synergia.png"  alt="Synergia"  class="logo-img" onerror="this.replaceWith(makeFallback('Synergia'))"/>
          </div>
          <div class="workshop-badge">
            <span class="badge-dot"></span>
            Academic Web Workshop · Series 01
          </div>
        </header>

        <div class="title-body">
          <p class="title-kicker">Xây dựng sự hiện diện học thuật trên Web</p>
          <h1 class="title-main">
            Scholar Profile<br>
            <span class="title-accent">&amp; Academic Website</span>
          </h1>
          <p class="title-desc">
            Từ Google Scholar đến trang web cá nhân — tất cả những gì<br>
            một researcher cần biết để build sự hiện diện chuyên nghiệp.
          </p>
        </div>

        <footer class="title-footer">
          <div class="tf-item"><span class="tf-num">4</span><span class="tf-label">Phần chính</span></div>
          <div class="tf-div"></div>
          <div class="tf-item"><span class="tf-num">~</span><span class="tf-label">60 phút lý thuyết</span></div>
          <div class="tf-div"></div>
          <div class="tf-item"><span class="tf-num">🖥️</span><span class="tf-label">Hands-on Lab</span></div>
          <div class="tf-div"></div>
          <div class="tf-item"><span class="tf-num">🚀</span><span class="tf-label">Deploy thật sự</span></div>
        </footer>
      </div>
    `
  },

  // ── 1. AGENDA ─────────────────────────────────────────────────────────────
  {
    id: 'agenda',
    tag: 'Overview',
    title: 'Agenda hôm nay',
    html: `
      <div class="agenda-cards">

        <div class="ac-card ac-1">
          <div class="ac-num">01</div>
          <div class="ac-content">
            <div class="ac-title">Scholar Profile là gì?</div>
            <div class="ac-sub">Google Scholar · ORCID · ResearchGate · vai trò của từng platform</div>
          </div>
          <div class="ac-icon">📚</div>
        </div>

        <div class="ac-card ac-2">
          <div class="ac-num">02</div>
          <div class="ac-content">
            <div class="ac-title">Cấu trúc Academic Website</div>
            <div class="ac-sub">Các section cần có · thông tin nên trình bày · best practices</div>
          </div>
          <div class="ac-icon">🏗️</div>
        </div>

        <div class="ac-card ac-3">
          <div class="ac-num">03</div>
          <div class="ac-content">
            <div class="ac-title">Affiliation Domain vs Personal Web</div>
            <div class="ac-sub">Official vs cá nhân · khi nào dùng cái nào · kết hợp ra sao</div>
          </div>
          <div class="ac-icon">🔀</div>
        </div>

        <div class="ac-card ac-4">
          <div class="ac-num">04</div>
          <div class="ac-content">
            <div class="ac-title">Hands-on Lab 🛠️</div>
            <div class="ac-sub">Modify template → push GitHub → deploy <code class="ic">ist.hcmut.edu.vn/~&lt;name&gt;</code></div>
          </div>
          <div class="ac-icon">🚀</div>
        </div>

      </div>
    `
  },

  // ── 2. SCHOLAR PROFILE — WHAT ─────────────────────────────────────────────
  {
    id: 'scholar-what',
    tag: 'Phần 01 · Scholar Profile',
    title: 'Scholar Profile là gì?',
    html: `
      <div class="platforms-layout">
        <div class="platforms-intro">
          <p class="pi-text">Scholar Profile là <strong>trang hồ sơ công khai trên các nền tảng học thuật</strong>,
          tổng hợp tất cả công trình nghiên cứu, chỉ số trích dẫn và danh tính
          khoa học của bạn tại một nơi duy nhất.</p>
        </div>
        <div class="platforms-grid">
          <div class="pf-card">
            <div class="pf-header">
              <div class="pf-logo pf-gs">G</div>
              <div>
                <div class="pf-name">Google Scholar</div>
                <div class="pf-type">Citation tracking</div>
              </div>
            </div>
            <ul class="pf-list">
              <li>Miễn phí, Google tự crawl publications</li>
              <li>Hiển thị h-index, i10-index, citation count</li>
              <li>Dễ setup — cần Gmail</li>
              <li>⭐ Được dùng nhiều nhất trong academia</li>
            </ul>
          </div>
          <div class="pf-card">
            <div class="pf-header">
              <div class="pf-logo pf-orcid">iD</div>
              <div>
                <div class="pf-name">ORCID</div>
                <div class="pf-type">Unique researcher ID</div>
              </div>
            </div>
            <ul class="pf-list">
              <li>Định danh duy nhất cho researcher (0000-XXXX)</li>
              <li>Tích hợp với hầu hết journal submission</li>
              <li>Xác thực danh tính, tránh nhầm tên tác giả</li>
              <li>⭐ Bắt buộc tại nhiều tạp chí quốc tế</li>
            </ul>
          </div>
          <div class="pf-card">
            <div class="pf-header">
              <div class="pf-logo pf-rg">RG</div>
              <div>
                <div class="pf-name">ResearchGate</div>
                <div class="pf-type">Academic social network</div>
              </div>
            </div>
            <ul class="pf-list">
              <li>Mạng xã hội dành riêng cho researcher</li>
              <li>Upload full-text, Q&A, theo dõi tác giả</li>
              <li>RG Score, reads & recommendations</li>
              <li>⭐ Tốt cho networking & visibility</li>
            </ul>
          </div>
          <div class="pf-card">
            <div class="pf-header">
              <div class="pf-logo pf-ss">S2</div>
              <div>
                <div class="pf-name">Semantic Scholar</div>
                <div class="pf-type">AI-powered discovery</div>
              </div>
            </div>
            <ul class="pf-list">
              <li>AI tự động nhận diện tác giả & paper</li>
              <li>Phân tích citation graph, influence score</li>
              <li>Tốt cho tìm kiếm liên quan đến NLP/AI</li>
              <li>⭐ Ngày càng phổ biến trong CS research</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  // ── 3. SCHOLAR PROFILE — ROLE ─────────────────────────────────────────────
  {
    id: 'scholar-role',
    tag: 'Phần 01 · Scholar Profile',
    title: 'Vai trò của Scholar Profile với Researcher',
    html: `
      <div class="role-layout">
        <div class="role-main">
          <div class="role-card role-visibility">
            <div class="role-icon">🔍</div>
            <div class="role-content">
              <div class="role-title">Visibility — Người ta tìm thấy bạn</div>
              <p>Khi reviewer, collaborator hoặc hiring committee search tên bạn,
              Scholar Profile xuất hiện đầu tiên. Không có profile = không tồn tại
              trong mắt cộng đồng học thuật.</p>
            </div>
          </div>
          <div class="role-card role-credibility">
            <div class="role-icon">🏅</div>
            <div class="role-content">
              <div class="role-title">Credibility — Chứng minh năng lực</div>
              <p>h-index, citation count, publication list là các chỉ số khách quan
              chứng minh impact của nghiên cứu. Đây là "CV tự cập nhật" quan trọng
              nhất của bạn.</p>
            </div>
          </div>
          <div class="role-card role-network">
            <div class="role-icon">🤝</div>
            <div class="role-content">
              <div class="role-title">Networking — Kết nối cộng đồng</div>
              <p>Follow tác giả cùng lĩnh vực, nhận thông báo paper mới, được
              invite collaborate. Scholar Profile là cầu nối đến cộng đồng
              researcher toàn cầu.</p>
            </div>
          </div>
          <div class="role-card role-track">
            <div class="role-icon">📈</div>
            <div class="role-content">
              <div class="role-title">Track Impact — Theo dõi tác động</div>
              <p>Biết ai đang cite paper của mình, paper nào được đọc nhiều, lĩnh
              vực nào đang quan tâm đến nghiên cứu của bạn → điều chỉnh hướng
              nghiên cứu chiến lược hơn.</p>
            </div>
          </div>
        </div>
        <div class="role-tip-col">
          <div class="role-tip-box">
            <div class="rtb-title">💡 Nên làm ngay hôm nay</div>
            <div class="rtb-item">
              <span class="rtb-check">✅</span>
              Tạo <strong>Google Scholar</strong> profile với email trường
            </div>
            <div class="rtb-item">
              <span class="rtb-check">✅</span>
              Đăng ký <strong>ORCID iD</strong> — miễn phí, cần cho submission
            </div>
            <div class="rtb-item">
              <span class="rtb-check">✅</span>
              Verify publications — đừng để Google nhầm tác giả
            </div>
            <div class="rtb-item">
              <span class="rtb-check">✅</span>
              Đặt ảnh đại diện chuyên nghiệp + bio ngắn
            </div>
            <div class="rtb-item">
              <span class="rtb-check">✅</span>
              Link Scholar profile vào email signature & website
            </div>
          </div>
          <div class="metrics-box">
            <div class="mb-title">Chỉ số cần biết</div>
            <div class="mb-row">
              <span class="mb-metric">h-index</span>
              <span class="mb-desc">h papers với ≥h citations mỗi cái</span>
            </div>
            <div class="mb-row">
              <span class="mb-metric">i10-index</span>
              <span class="mb-desc">Số paper có ≥10 citations</span>
            </div>
            <div class="mb-row">
              <span class="mb-metric">Citations</span>
              <span class="mb-desc">Tổng số lần được trích dẫn</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ── 4. ACADEMIC WEBSITE STRUCTURE ─────────────────────────────────────────
  {
    id: 'web-structure',
    tag: 'Phần 02 · Academic Website',
    title: 'Cấu trúc chuẩn của một Academic Personal Website',
    html: `
      <div class="webstruct-layout">
        <div class="ws-browser">
          <div class="ws-browser-bar">
            <div class="ws-dots">
              <span class="ws-dot ws-red"></span>
              <span class="ws-dot ws-yellow"></span>
              <span class="ws-dot ws-green"></span>
            </div>
            <div class="ws-url">yourname.github.io</div>
          </div>
          <div class="ws-page">
            <div class="ws-nav">
              <span class="ws-logo-ph"></span>
              <div class="ws-nav-links">
                <span class="ws-nl ws-nl-active">Home</span>
                <span class="ws-nl">Research</span>
                <span class="ws-nl">Publications</span>
                <span class="ws-nl">CV</span>
                <span class="ws-nl">Contact</span>
              </div>
            </div>
            <div class="ws-hero">
              <div class="ws-avatar">👤</div>
              <div class="ws-hero-text">
                <div class="ws-name">Your Name</div>
                <div class="ws-role">PhD Student / Researcher</div>
                <div class="ws-affil">University · Lab Name</div>
              </div>
            </div>
            <div class="ws-sections-mini">
              <div class="wsm wsm-bio">About</div>
              <div class="wsm wsm-pub">Publications</div>
              <div class="wsm wsm-proj">Projects</div>
              <div class="wsm wsm-news">News</div>
            </div>
          </div>
        </div>
        <div class="ws-checklist">
          <div class="wsc-group">
            <div class="wsc-title wsc-must">✅ Bắt buộc phải có</div>
            <div class="wsc-item"><span>🧑</span> <div><strong>Bio / About</strong> — 3–5 câu về bạn, hướng nghiên cứu, affiliations hiện tại</div></div>
            <div class="wsc-item"><span>📄</span> <div><strong>Publications list</strong> — đầy đủ, link PDF / DOI / Scholar</div></div>
            <div class="wsc-item"><span>📋</span> <div><strong>CV / Resume</strong> — link download PDF cập nhật</div></div>
            <div class="wsc-item"><span>✉️</span> <div><strong>Contact</strong> — email rõ ràng, dễ tìm</div></div>
          </div>
          <div class="wsc-group">
            <div class="wsc-title wsc-good">👍 Nên có</div>
            <div class="wsc-item"><span>🔬</span> <div><strong>Research interests</strong> — 3–5 từ khóa / hướng nghiên cứu</div></div>
            <div class="wsc-item"><span>🏆</span> <div><strong>Awards & Grants</strong> — học bổng, giải thưởng, tài trợ</div></div>
            <div class="wsc-item"><span>📰</span> <div><strong>News / Updates</strong> — paper mới, talk sắp tới, position opening</div></div>
            <div class="wsc-item"><span>🔗</span> <div><strong>Scholar links</strong> — Google Scholar, ORCID, GitHub, LinkedIn</div></div>
          </div>
          <div class="wsc-group">
            <div class="wsc-title wsc-opt">💡 Tùy chọn</div>
            <div class="wsc-item"><span>🗒️</span> <div><strong>Blog / Notes</strong> — chia sẻ suy nghĩ, tutorial, reading notes</div></div>
            <div class="wsc-item"><span>🎤</span> <div><strong>Talks & Slides</strong> — presentation tại conference, seminar</div></div>
          </div>
        </div>
      </div>
    `
  },

  // ── 5. WHAT INFO TO PUT ────────────────────────────────────────────────────
  {
    id: 'web-content',
    tag: 'Phần 02 · Academic Website',
    title: 'Cách viết nội dung hiệu quả',
    html: `
      <div class="content-tips-layout">
        <div class="ct-col">
          <div class="ct-section">
            <div class="ct-section-title">🧑 Bio — 30-second pitch</div>
            <div class="ct-example good">
              <div class="ex-label ex-good">✅ Tốt</div>
              <p>I am a second-year PhD student at HCMUT, advised by Prof. X.
              My research focuses on <strong>efficient LLM inference</strong> for
              resource-constrained devices. I am broadly interested in
              systems ML and edge AI.</p>
            </div>
            <div class="ct-example bad">
              <div class="ex-label ex-bad">❌ Tránh</div>
              <p>I am a hardworking student who is very passionate about
              technology and loves learning new things every day...</p>
            </div>
          </div>
          <div class="ct-section">
            <div class="ct-section-title">📄 Publications — đừng chỉ liệt kê</div>
            <div class="ct-pub-item">
              <div class="pub-venue">NeurIPS 2024</div>
              <div class="pub-title">FlashDecode: Fast LLM Inference on Edge Devices</div>
              <div class="pub-authors">Your Name, Co-author A, Prof. Advisor</div>
              <div class="pub-links">
                <span class="pub-btn">📄 PDF</span>
                <span class="pub-btn">💻 Code</span>
                <span class="pub-btn">🎤 Talk</span>
                <span class="pub-btn">📊 Poster</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ct-col">
          <div class="ct-principles">
            <div class="ct-p-title">📐 Nguyên tắc viết nội dung</div>
            <div class="ct-p-item">
              <div class="ctp-num">1</div>
              <div><strong>Specificity over generality</strong><br>
              <span>"Efficient LLM inference"</span> tốt hơn <span>"machine learning"</span></div>
            </div>
            <div class="ct-p-item">
              <div class="ctp-num">2</div>
              <div><strong>Third person cho bio</strong><br>
              <span>Dùng "I am..." hoặc "Name is..." — nhất quán</span></div>
            </div>
            <div class="ct-p-item">
              <div class="ctp-num">3</div>
              <div><strong>Show, don't tell</strong><br>
              <span>Link demo/code/paper quan trọng hơn mô tả dài</span></div>
            </div>
            <div class="ct-p-item">
              <div class="ctp-num">4</div>
              <div><strong>Cập nhật thường xuyên</strong><br>
              <span>Outdated info = unprofessional. Đặt reminder mỗi 3 tháng</span></div>
            </div>
            <div class="ct-p-item">
              <div class="ctp-num">5</div>
              <div><strong>Viết bằng tiếng Anh</strong><br>
              <span>Academic audience là toàn cầu — EN là default</span></div>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ── 6. AFFILIATION vs PERSONAL ────────────────────────────────────────────
  {
    id: 'two-sites',
    tag: 'Phần 03 · Two-site Strategy',
    title: 'Tại sao nhiều researcher có 2 trang web?',
    html: `
      <div class="twosite-layout">
        <div class="ts-card ts-affil">
          <div class="ts-header">
            <div class="ts-icon">🏛️</div>
            <div>
              <div class="ts-name">Trang Affiliation</div>
              <div class="ts-url">hcmut.edu.vn/~yourname</div>
            </div>
            <div class="ts-badge ts-badge-official">Official</div>
          </div>
          <div class="ts-body">
            <div class="ts-trait-row">
              <span class="trait-icon">🎯</span>
              <span><strong>Mục đích:</strong> CV học thuật chính thức, đại diện cho tổ chức</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">✍️</span>
              <span><strong>Nội dung:</strong> Publication list, research projects, office hours, teaching</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">🎨</span>
              <span><strong>Tone:</strong> Formal, theo template/brand của trường</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">🔐</span>
              <span><strong>Kiểm soát:</strong> IT dept quản lý, có thể bị giới hạn tính năng</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">👁️</span>
              <span><strong>Audience:</strong> Committees, reviewers, collaborators tìm thông tin công việc</span>
            </div>
          </div>
        </div>

        <div class="ts-middle">
          <div class="ts-vs">+</div>
          <div class="ts-link-desc">Hai trang <strong>cross-link</strong> nhau<br>để tối đa visibility</div>
        </div>

        <div class="ts-card ts-personal">
          <div class="ts-header">
            <div class="ts-icon">🧑‍💻</div>
            <div>
              <div class="ts-name">Trang Cá Nhân</div>
              <div class="ts-url">yourname.github.io</div>
            </div>
            <div class="ts-badge ts-badge-personal">Personal</div>
          </div>
          <div class="ts-body">
            <div class="ts-trait-row">
              <span class="trait-icon">🎯</span>
              <span><strong>Mục đích:</strong> Brand cá nhân, thể hiện cá tính, portfolio đầy đủ</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">✍️</span>
              <span><strong>Nội dung:</strong> Projects, blog, side projects, hobbies, storytelling</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">🎨</span>
              <span><strong>Tone:</strong> Thoải mái, tự do design, phản ánh cá nhân bạn</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">🔧</span>
              <span><strong>Kiểm soát:</strong> 100% của bạn — thoải mái tech stack & content</span>
            </div>
            <div class="ts-trait-row">
              <span class="trait-icon">👁️</span>
              <span><strong>Audience:</strong> Mọi người, tech community, future employers, students</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // ── 7. KHEN NAO DUNG LOAI NAO ─────────────────────────────────────────────
  {
    id: 'when-which',
    tag: 'Phần 03 · Two-site Strategy',
    title: 'Khi nào dùng loại nào?',
    html: `
      <div class="when-layout">
        <div class="scenario-grid">
          <div class="sc-card">
            <div class="sc-situation">📧 Gửi email xin review paper</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-affil">Dùng Affiliation URL<br><small>Credibility từ institution</small></div>
          </div>
          <div class="sc-card">
            <div class="sc-situation">💼 Apply PhD / PostDoc</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-both">Cả hai<br><small>Affiliation = credibility · Personal = personality</small></div>
          </div>
          <div class="sc-card">
            <div class="sc-situation">🗣️ Conference networking</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-personal">Personal site<br><small>Dễ nhớ, đầy đủ projects & demo</small></div>
          </div>
          <div class="sc-card">
            <div class="sc-situation">📰 Paper acknowledgement</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-affil">Affiliation URL<br><small>Stable, không thay đổi khi bạn chuyển host</small></div>
          </div>
          <div class="sc-card">
            <div class="sc-situation">👨‍🏫 Students tìm advisor</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-affil">Affiliation page<br><small>Office hours, research openings rõ ràng</small></div>
          </div>
          <div class="sc-card">
            <div class="sc-situation">🐙 Open source / community</div>
            <div class="sc-arrow">→</div>
            <div class="sc-answer sc-personal">Personal site<br><small>GitHub, projects, blog — thoải mái hơn</small></div>
          </div>
        </div>
        <div class="when-tip">
          <div class="wt-icon">💡</div>
          <div class="wt-text">
            <strong>Best practice:</strong> Đặt link cross-reference ở cả hai trang.
            Trang affiliation link đến personal site như "Full portfolio →",
            personal site link đến affiliation như "Official profile at HCMUT →".
            Người xem sẽ tìm được thông tin họ cần ở cả hai nơi.
          </div>
        </div>
      </div>
    `
  },

  // ── 8. HANDS-ON LAB INTRO ─────────────────────────────────────────────────
  {
    id: 'lab-intro',
    tag: 'Phần 04 · Hands-on Lab',
    title: 'Hands-on Lab — Mục tiêu',
    html: `
      <div class="lab-intro-layout">
        <div class="lab-goal-banner">
          <div class="lgb-icon">🎯</div>
          <div class="lgb-text">
            <div class="lgb-title">Kết thúc buổi hôm nay, bạn sẽ có trang web cá nhân thật sự trên Internet</div>
            <div class="lgb-url">https://ist.hcmut.edu.vn/~<em>yourname</em></div>
          </div>
        </div>
        <div class="lab-steps-overview">
          <div class="lso-step">
            <div class="lso-num">1</div>
            <div class="lso-icon">📦</div>
            <div class="lso-title">Clone Template</div>
            <div class="lso-desc">Fork/clone repository template đã chuẩn bị sẵn</div>
          </div>
          <div class="lso-arrow">→</div>
          <div class="lso-step">
            <div class="lso-num">2</div>
            <div class="lso-icon">✏️</div>
            <div class="lso-title">Điền nội dung</div>
            <div class="lso-desc">Chỉnh <code class="ic">data.js</code> — tên, bio, links, publications</div>
          </div>
          <div class="lso-arrow">→</div>
          <div class="lso-step">
            <div class="lso-num">3</div>
            <div class="lso-icon">🐙</div>
            <div class="lso-title">Push to GitHub</div>
            <div class="lso-desc"><code class="ic">git add · commit · push</code></div>
          </div>
          <div class="lso-arrow">→</div>
          <div class="lso-step">
            <div class="lso-num">4</div>
            <div class="lso-icon">🚀</div>
            <div class="lso-title">Deploy!</div>
            <div class="lso-desc">Trang web live tại <code class="ic">ist.hcmut.edu.vn/~name</code></div>
          </div>
        </div>
        <div class="lab-prereq">
          <div class="lp-title">⚙️ Cần chuẩn bị trước</div>
          <div class="lp-items">
            <div class="lp-item"><span class="lp-check">□</span> VS Code đã cài</div>
            <div class="lp-item"><span class="lp-check">□</span> Git đã cài (<code class="ic">git --version</code>)</div>
            <div class="lp-item"><span class="lp-check">□</span> GitHub account</div>
            <div class="lp-item"><span class="lp-check">□</span> Account HCMUT IST Server</div>
            <div class="lp-item"><span class="lp-check">□</span> Ảnh đại diện chuẩn bị sẵn (JPG/PNG)</div>
            <div class="lp-item"><span class="lp-check">□</span> Bio ngắn 3–5 câu tiếng Anh</div>
          </div>
        </div>
      </div>
    `
  },

  // ── 9. LAB — STEP BY STEP ────────────────────────────────────────────────
  {
    id: 'lab-steps',
    tag: 'Phần 04 · Hands-on Lab',
    title: 'Step-by-step: Clone → Modify → Push',
    html: `
      <div class="lab-steps-layout">
        <div class="ls-step ls-step-1">
          <div class="ls-step-header">
            <span class="ls-num">01</span>
            <span class="ls-title">Clone template</span>
          </div>
          <pre class="code-block code-shell"><span class="cs-cmd">git clone</span> https://github.com/synergia-team/portfolio-template.git
<span class="cs-cmd">cd</span> portfolio-template
<span class="cs-cmd">code</span> .   <span class="cs-cmt"># Mở VS Code</span></pre>
        </div>

        <div class="ls-step ls-step-2">
          <div class="ls-step-header">
            <span class="ls-num">02</span>
            <span class="ls-title">Chỉnh nội dung trong <code class="ic-dark">js/data.js</code></span>
          </div>
          <pre class="code-block"><span class="ck">const</span> portfolioData = {
  basics: {
    name:      <span class="cv">"Nguyễn Văn A"</span>,
    role:      <span class="cv">"Research Student · HPCC Lab"</span>,
    email:     <span class="cv">"a.nguyenvan@hcmut.edu.vn"</span>,
    avatar:    <span class="cv">"assets/avatar.jpg"</span>,  <span class="cs-cmt">// ← thay ảnh của bạn vào đây</span>
    summary:   <span class="cv">"I am a ... interested in ..."</span>,
    scholar:   <span class="cv">"https://scholar.google.com/..."</span>,
    orcid:     <span class="cv">"0000-0000-0000-0000"</span>,
  },
  publications: [ <span class="cs-cmt">/* thêm paper của bạn */</span> ],
  projects:     [ <span class="cs-cmt">/* thêm projects */</span> ],
};</pre>
        </div>

        <div class="ls-step ls-step-3">
          <div class="ls-step-header">
            <span class="ls-num">03</span>
            <span class="ls-title">Push lên GitHub</span>
          </div>
          <pre class="code-block code-shell"><span class="cs-cmd">git add</span> .
<span class="cs-cmd">git commit</span> -m <span class="cv">"feat: personalize portfolio"</span>
<span class="cs-cmd">git remote set-url</span> origin https://github.com/<span class="ca">YOUR_USERNAME</span>/portfolio.git
<span class="cs-cmd">git push</span> origin main</pre>
        </div>
      </div>
    `
  },

  // ── 10. DEPLOY HCMUT ─────────────────────────────────────────────────────
  {
    id: 'lab-deploy',
    tag: 'Phần 04 · Hands-on Lab',
    title: 'Deploy lên ist.hcmut.edu.vn/~name',
    html: `
      <div class="deploy-hcmut-layout">
        <div class="dh-steps">
          <div class="dh-step">
            <div class="dh-num">1</div>
            <div class="dh-content">
              <div class="dh-title">SSH vào server</div>
              <pre class="code-block code-shell"><span class="cs-cmd">ssh</span> <span class="ca">yourname</span>@ist.hcmut.edu.vn</pre>
              <p class="dh-note">Dùng tài khoản HCMUT do IT cấp</p>
            </div>
          </div>
          <div class="dh-step">
            <div class="dh-num">2</div>
            <div class="dh-content">
              <div class="dh-title">Tạo thư mục public_html</div>
              <pre class="code-block code-shell"><span class="cs-cmd">mkdir</span> -p ~/public_html
<span class="cs-cmd">chmod</span> 755 ~/public_html</pre>
              <p class="dh-note">Đây là thư mục gốc của trang web bạn</p>
            </div>
          </div>
          <div class="dh-step">
            <div class="dh-num">3</div>
            <div class="dh-content">
              <div class="dh-title">Clone repo vào public_html</div>
              <pre class="code-block code-shell"><span class="cs-cmd">cd</span> ~/public_html
<span class="cs-cmd">git clone</span> https://github.com/<span class="ca">username</span>/portfolio.git .
<span class="cs-cmt"># Dấu "." clone thẳng vào thư mục hiện tại</span></pre>
            </div>
          </div>
          <div class="dh-step dh-step-final">
            <div class="dh-num">✅</div>
            <div class="dh-content">
              <div class="dh-title">Xong! Truy cập ngay</div>
              <div class="dh-live-url">https://ist.hcmut.edu.vn/~<em>yourname</em></div>
              <p class="dh-note">Mỗi lần update chỉ cần <code class="ic">git pull</code> từ server hoặc dùng webhook</p>
            </div>
          </div>
        </div>

        <div class="dh-tips">
          <div class="dht-title">🔄 Cập nhật sau này</div>
          <div class="dht-flow">
            <span class="dht-node">Chỉnh data.js<br>local</span>
            <span class="dht-arr">→</span>
            <span class="dht-node">git push<br>GitHub</span>
            <span class="dht-arr">→</span>
            <span class="dht-node">SSH vào server<br>git pull</span>
            <span class="dht-arr">→</span>
            <span class="dht-node dht-live">Live! 🎉</span>
          </div>
          <div class="dht-alt">
            <strong>⚡ Tự động hơn:</strong> Cấu hình <code class="ic">GitHub Actions</code> hoặc
            <code class="ic">webhook</code> để server tự <code class="ic">git pull</code> mỗi khi bạn push.
          </div>
          <div class="dht-also">
            <strong>Ngoài ra còn có thể deploy lên:</strong>
            <span class="dha-badge">GitHub Pages</span>
            <span class="dha-badge">Vercel</span>
            <span class="dha-badge">Netlify</span>
            <span class="dha-free">← Miễn phí hoàn toàn</span>
          </div>
        </div>
      </div>
    `
  },

  // ── 11. SUMMARY ──────────────────────────────────────────────────────────
  {
    id: 'summary',
    tag: 'Tổng kết',
    title: 'Những gì bạn mang về hôm nay',
    html: `
      <div class="summary-layout">
        <div class="summary-cards">
          <div class="sum-card sum-1">
            <div class="sum-icon">📚</div>
            <h3>Scholar Profile</h3>
            <p>Google Scholar + ORCID là bộ đôi tối thiểu mọi researcher cần có. Tạo ngay, verify publications, link vào mọi nơi.</p>
          </div>
          <div class="sum-card sum-2">
            <div class="sum-icon">🌐</div>
            <h3>Academic Website</h3>
            <p>Bio rõ ràng · Publications đầy đủ · CV download · Contact dễ thấy. Viết bằng tiếng Anh, cập nhật thường xuyên.</p>
          </div>
          <div class="sum-card sum-3">
            <div class="sum-icon">🔀</div>
            <h3>Two-site Strategy</h3>
            <p>Affiliation URL cho credibility chính thức. Personal site cho brand cá nhân, thoải mái content. Cross-link hai bên.</p>
          </div>
          <div class="sum-card sum-4">
            <div class="sum-icon">🚀</div>
            <h3>Deployed!</h3>
            <p>Bạn đã có trang web thật sự tại <code class="ic">ist.hcmut.edu.vn/~name</code>. Gửi link cho mọi người ngay!</p>
          </div>
        </div>
        <div class="summary-next">
          <div class="sn-title">📌 Action items — làm ngay sau buổi này</div>
          <div class="sn-items">
            <div class="sn-item"><span class="sni-dot sni-1"></span> Tạo Google Scholar profile nếu chưa có</div>
            <div class="sn-item"><span class="sni-dot sni-1"></span> Đăng ký ORCID iD tại orcid.org</div>
            <div class="sn-item"><span class="sni-dot sni-2"></span> Cập nhật nội dung portfolio vừa deploy</div>
            <div class="sn-item"><span class="sni-dot sni-2"></span> Thêm Scholar/ORCID link vào email signature</div>
            <div class="sn-item"><span class="sni-dot sni-3"></span> Share link trang web lên LinkedIn / nhóm lab</div>
          </div>
        </div>
      </div>
    `
  },

  // ── 12. Q&A ───────────────────────────────────────────────────────────────
  {
    id: 'qa',
    html: `
      <div class="qa-slide">
        <div class="qa-bg-text">Q&amp;A</div>
        <div class="qa-content">
          <div class="qa-logo-row">
            <img src="images/logo/hcmut.png"    alt="HCMUT"    class="qa-logo" onerror="this.replaceWith(makeFallback('HCMUT', true))"/>
            <img src="images/logo/hpcc.png"     alt="HPCC"     class="qa-logo" onerror="this.replaceWith(makeFallback('HPCC', true))"/>
            <img src="images/logo/synergia.png" alt="Synergia" class="qa-logo" onerror="this.replaceWith(makeFallback('Synergia', true))"/>
          </div>
          <h2 class="qa-heading">Câu hỏi & Thảo luận</h2>
          <div class="qa-prompts">
            <div class="qa-p">❓ Tôi chưa có paper, có nên làm Scholar Profile không?</div>
            <div class="qa-p">❓ Nên dùng template có sẵn hay tự code?</div>
            <div class="qa-p">❓ Google Scholar vs Semantic Scholar — dùng cái nào?</div>
            <div class="qa-p">❓ Làm sao để Google index trang web của tôi?</div>
          </div>
          <div class="qa-contact">
            <span>📧 synergia-team@hcmut.edu.vn</span>
            <span>·</span>
            <span>🐙 github.com/synergia-team</span>
            <span>·</span>
            <span>🌐 ist.hcmut.edu.vn/~synergia</span>
          </div>
        </div>
      </div>
    `
  }

];

// Helper: tạo fallback badge khi logo không load được
function makeFallback(name, small = false) {
  const el = document.createElement('div');
  el.className = small ? 'logo-fallback logo-fallback--sm' : 'logo-fallback';
  el.textContent = name;
  return el;
}