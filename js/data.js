const portfolioData = {
    config: { theme: 'light' },
    basics: {
        name:    { vi: 'Nguyễn Phúc Nhân', en: 'Nhan Nguyen Phuc'},
        label:   { vi: 'Cử nhân Khoa học Máy tính — HCMUT', en: 'Bachelor of Computer Science — HCMUT' },
        picture: './images/profile.jpg',
        email:   'phucnhan289@gmail.com',
        summary: {
            vi: 'Sinh viên Khoa học Máy tính tại HCMUT, nghiên cứu viên tại Synergia Research Team - HPC Lab. Quan tâm đến Green HPC, Reinforcement Learning, Big Data và phát triển phần mềm Full-Stack.',
            en: 'Computer Science student at HCMUT, Research Assistant at the Synergia Research Team — HPC Lab. Passionate about Green HPC, Reinforcement Learning, Big Data, and Full-Stack software development.'
        },
        socials: [
            { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=0jmPr2EAAAAJ&hl=vi', icon: 'fas fa-graduation-cap', color: 'text-gray-800 hover:text-black' },
            { label: 'ORCID',          url: 'https://orcid.org/0009-0009-7081-3940',                        icon: 'fab fa-orcid',          color: 'text-green-500 hover:text-green-900' },
            { label: 'GitHub',         url: 'https://github.com/nhan2892005',                               icon: 'fab fa-github',         color: 'text-gray-800 hover:text-black' },
            { label: 'LinkedIn',       url: 'https://www.linkedin.com/in/phuc-nhan-nguyen/',               icon: 'fab fa-linkedin',       color: 'text-blue-600 hover:text-blue-800' },
            { label: 'Gmail',          url: 'mailto:nhan.nguyen2005phuyen@hcmut.edu.vn',                   icon: 'fas fa-envelope',       color: 'text-red-500 hover:text-red-700' },
            { label: 'Website',        url: 'https://phucnhan.asia',                                       icon: 'fas fa-globe',          color: 'text-gray-500 hover:text-gray-800' }
        ]
    },
    techStack: [
        { category: { vi: 'Ngôn ngữ lập trình',       en: 'Programming Languages' }, icon: 'fas fa-code',        skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
        { category: { vi: 'Frontend',                  en: 'Frontend Development'  }, icon: 'fas fa-laptop-code', skills: ['React', 'Next.js', 'Redux', 'HTML/CSS', 'Tailwind CSS', 'MUI'] },
        { category: { vi: 'Backend & API',             en: 'Backend & API'         }, icon: 'fas fa-server',      skills: ['Node.js', 'Express', 'Spring Boot'] },
        { category: { vi: 'Big Data & Cơ sở dữ liệu', en: 'Big Data & Database'   }, icon: 'fas fa-database',    skills: ['Hadoop', 'Apache Spark', 'Kafka', 'MongoDB', 'MS SQL Server', 'BigQuery', 'PostgreSQL'] },
        { category: { vi: 'Cloud & DevOps',            en: 'Cloud & DevOps'        }, icon: 'fas fa-cloud',       skills: ['Docker', 'GitHub', 'AWS', 'Google Cloud (GCP)', 'Azure', 'Oracle Cloud (OCI)', 'Linux', 'Ubuntu', 'Windows'] },
        { category: { vi: 'Dữ liệu & Phân tích',      en: 'Data & Analytics'      }, icon: 'fas fa-chart-pie',   skills: ['Power BI', 'Tableau', 'Matplotlib'] },
    ],
    activities: [
        {
            company:     'BDC Data Hackathon 2025',
            position:    { vi: 'Cố vấn kỹ thuật (Mentor)', en: 'Technical Mentor' },
            startDate:   'Nov 2025',
            endDate:     'Nov 2025',
            description: {
                vi: 'Cố vấn kỹ thuật cho các đội thi về xử lý dữ liệu, thiết kế thuật toán và kiến trúc hệ thống trong thử thách Bus Router. Đánh giá giải pháp và đưa ra phản hồi chiến lược để các đội cải thiện mô hình và thuyết trình.',
                en: 'Provided technical mentorship on data processing, algorithm design, and system architecture for the Bus Router challenge. Reviewed solutions and offered strategic feedback to help teams refine their models and presentations.'
            },
            tags: ['Data Processing', 'Algorithm Design', 'System Architecture', 'Mentoring'],
            logo: './images/logo/bdclogo.png'
        },
        {
            company:     'Vietnam National Union of Students',
            position:    { vi: 'Ban Chấp hành — Mạng lưới Học thuật Điện toán Lượng tử, Đám mây & Dữ liệu Lớn', en: 'Executive Committee — Academic Network on Quantum Computing, Cloud Computing & Big Data' },
            startDate:   'Oct 2025',
            endDate:     { vi: 'Hiện tại', en: 'Ongoing' },
            description: {
                vi: 'Thành viên Ban Chấp hành Mạng lưới Học thuật về Điện toán Lượng tử, Điện toán Đám mây và Dữ liệu Lớn thuộc Hội Sinh viên Việt Nam.',
                en: 'Executive Committee member of the Academic Network on Quantum Computing, Cloud Computing, and Big Data under the Vietnam National Union of Students.'
            },
            tags: ['Quantum Computing', 'Cloud Computing', 'Big Data', 'Leadership'],
            logo: './images/logo/hsv.png'
        },
    ],
    experience: [
        {
            company:     'AI for Education Team - Big Data Club',
            position:    { vi: 'Scrum Master & DevOps', en: 'Scrum Master & DevOps' },
            startDate:   'Dec 2025',
            endDate:     'Ongoing',
            description: {
                vi: 'Cố vấn kỹ thuật cho các đội thi về xử lý dữ liệu, thiết kế thuật toán và kiến trúc hệ thống trong thử thách Bus Router. Đánh giá giải pháp và đưa ra phản hồi chiến lược để các đội cải thiện mô hình và thuyết trình.',
                en: 'Provided technical mentorship on data processing, algorithm design, and system architecture for the Bus Router challenge. Reviewed solutions and offered strategic feedback to help teams refine their models and presentations.'
            },
            tags: ['Software Development', 'EdTech', 'GraphRAG', 'AI Applications', 'Project Planning'],
            logo: './images/logo/bdclogo.png'
        },
        {
            company:     'Synergia Research Team — HPC Lab — HCMUT',
            position:    { vi: 'Trợ lý Nghiên cứu', en: 'Research Assistant' },
            startDate:   'Sep 2024',
            endDate:     { vi: 'Hiện tại', en: 'Ongoing' },
            description: {
                vi: 'Nghiên cứu các thuật toán lập lịch dựa trên Reinforcement Learning cho hệ thống HPC, tập trung tối ưu hóa phân bổ tài nguyên và hiệu quả năng lượng. Thiết kế simulation framework, thực nghiệm trên multi-node cluster và đóng góp vào công bố khoa học quốc tế.',
                en: 'Researched RL-based job scheduling algorithms for HPC systems, focusing on resource allocation optimization and energy efficiency. Designed simulation frameworks, conducted multi-node cluster experiments, and contributed to international scientific publications.'
            },
            tags: ['Reinforcement Learning', 'HPC', 'Python', 'Agile/Scrum', 'Research'],
            logo: './images/logo/synergia.png'
        },
        {
            company:     'Big Data Club — HCMUT',
            position:    { vi: 'Ban Truyền thông & Thiết kế', en: 'Media Design Team' },
            startDate:   'Sep 2024',
            endDate:     { vi: 'Hiện tại', en: 'Ongoing' },
            description: {
                vi: 'Phát triển và duy trì tài sản trực quan cho fanpage câu lạc bộ: banner, bài đăng và thông báo sự kiện. Thiết kế merchandise cho thành viên và quản lý hình ảnh cho các sự kiện học thuật, hội thảo và workshop.',
                en: 'Developed and maintained visual assets for the club fanpage including banners, posts, and event announcements. Designed member merchandise and managed event imagery for academic seminars, kick-off sessions, and training workshops.'
            },
            tags: ['Design', 'Branding', 'Event Management', 'Visual Assets'],
            logo: './images/logo/bdclogo.png'
        },
        {
            company:     { vi: 'Lớp MT23KHM3 — Khoa KHMT & KT — HCMUT', en: 'Class MT23KHM3 — Faculty of CS & Engineering — HCMUT' },
            position:    { vi: 'Bí thư Chi đoàn', en: 'Secretary of the Youth Union Branch' },
            startDate:   'Dec 2023',
            endDate:     { vi: 'Hiện tại', en: 'Ongoing' },
            description: {
                vi: 'Lên kế hoạch và tổ chức các cuộc họp chi đoàn, tạo và quản lý biểu mẫu đánh giá thành viên, phân tích kết quả và báo cáo. Phân công và giám sát các hoạt động chi đoàn với vai trò và mốc thời gian rõ ràng.',
                en: 'Planned and executed branch congress meetings, overseeing venue setup, agenda creation, and attendee coordination. Created and administered member evaluation forms, analyzed results, and supervised branch activities with clear role and timeline assignments.'
            },
            tags: ['Leadership', 'Organization', 'Administration'],
            logo: './images/logo/hcmut.png'
        },
    ],
    projects: [
        {
            name: 'Club Management Application',
            description: {
                vi: 'Nền tảng quản lý câu lạc bộ cấp production với Java Spring Boot backend, PostgreSQL và Next.js frontend. Triển khai đầy đủ trên VM với HTTPS, DNS, monitoring và CI/CD.',
                en: 'Production-grade club management platform built with a Java Spring Boot backend, PostgreSQL database, and Next.js frontend. Full deployment on a virtual machine including HTTPS, DNS, monitoring, and CI/CD pipelines.'
            },
            url: 'https://bdc.hpcc.vn', github: '#',
            image: 'https://placehold.co/600x300/accbe1/1e40af?text=Club+Management+App',
            technologies: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'DevOps']
        },
        {
            name: 'Tutor Support Platform',
            description: {
                vi: 'Hệ thống hỗ trợ gia sư với giao tiếp đa kênh real-time qua Socket.io, AI matching gia sư–học sinh, hướng dẫn học tập cá nhân hóa bằng RAG và SSO với hệ thống đại học.',
                en: 'Tutor support system with real-time multi-channel communication via Socket.io, AI-driven tutor–student matching, RAG-based personalized study guidance, and SSO integration with the university\'s internal systems.'
            },
            url: 'https://hcmuttutor.onrender.com/', github: 'https://github.com/nhan2892005/TutorPlatform',
            image: 'https://placehold.co/600x300/e0f2fe/0369a1?text=Tutor+Support+Platform',
            technologies: ['Next.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'SQL Server', 'RAG/AI']
        },
        {
            name: 'Social Web App — Enjoy Moments',
            description: {
                vi: 'Nền tảng mạng xã hội chia sẻ kỷ niệm với Google OAuth, đăng bài, bình luận, tìm kiếm theo tags, phân trang và UI responsive.',
                en: 'Social platform for sharing memories featuring Google OAuth, posting, commenting, tag-based search, pagination, and a fully responsive UI.'
            },
            url: 'https://enjoy-moments.netlify.app/', github: '#',
            image: 'https://placehold.co/600x300/fdf4ff/d946ef?text=Enjoy+Moments',
            technologies: ['MERN Stack', 'Google OAuth', 'Tailwind CSS']
        },
        {
            name: 'E-commerce Review Analysis & Data Warehouse',
            description: {
                vi: 'Data warehouse trên BigQuery với ETL pipeline Python xử lý dữ liệu sản phẩm/review từ Tiki API. Áp dụng NLP để tóm tắt đánh giá và hiển thị qua React + Node.js frontend.',
                en: 'BigQuery-based data warehouse with a Python ETL pipeline processing product and review data from the Tiki API. Applied NLP models to summarize reviews, presented via a React + Node.js frontend.'
            },
            url: 'https://tikiassistant.netlify.app/', github: 'https://github.com/nhan2892005/AnalystReviewProduct',
            image: 'https://placehold.co/600x300/fff7ed/ea580c?text=Tiki+Review+Analytics',
            technologies: ['BigQuery', 'Python', 'NLP', 'React', 'Node.js', 'MongoDB']
        },
        {
            name: 'AI-powered SaaS Platform',
            description: {
                vi: 'Nền tảng SaaS xử lý ảnh AI với Image Restoration, Recoloring, Generative Fill, hệ thống tín dụng, lưu trữ Cloudinary và thanh toán Stripe.',
                en: 'AI-powered image processing SaaS featuring Image Restoration, Recoloring, Generative Fill, a credit system, Cloudinary storage, and Stripe payment integration.'
            },
            url: 'https://aiyourimage.vercel.app/', github: 'https://github.com/nhan2892005/FullStack-AI_SaaS_Platform',
            image: 'https://placehold.co/600x300/eff6ff/2563eb?text=AI+SaaS+Platform',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary', 'Stripe', 'Clerk']
        },
        {
            name: 'Matrix Calculator',
            description: {
                vi: 'Công cụ tính toán ma trận 2D xây dựng bằng C/C++, áp dụng các khái niệm OOP, Đại số Tuyến tính và Thuật toán.',
                en: '2D matrix computation tool built with C/C++, applying OOP concepts, Linear Algebra, and algorithmic design principles.'
            },
            url: '#', github: 'https://github.com/nhan2892005/OOP_and_LinearAlgebra-MatrixOperator_in_C',
            image: 'https://placehold.co/600x300/171717/a3e635?text=Matrix+Calculator',
            technologies: ['C', 'C++', 'OOP', 'Linear Algebra']
        },
        {
            name: 'Library for Multilayer Perceptron',
            description: {
                vi: 'Thư viện deep learning cho mô hình ANN, xây dựng bằng C/C++, hỗ trợ mảng đa chiều và các nguyên lý OOP.',
                en: 'Deep learning library for ANN models built with C/C++, supporting multidimensional arrays and OOP principles.'
            },
            url: '#', github: 'https://github.com/nhan2892005/DSA_and_MLP',
            image: 'https://placehold.co/600x300/1e1e2e/c084fc?text=MLP+Library',
            technologies: ['C++', 'Deep Learning', 'OOP', 'Data Structures']
        }
    ],
    publications: [
        {
            title:     'Toward Sustainable and Cost-Efficient HPC Systems: A Deep Reinforcement Learning Job Scheduling Approach',
            publisher: 'MIWAI 2025 — Multi-disciplinary Trends in Artificial Intelligence. Lecture Notes in Computer Science, vol 16354. Springer, Singapore.',
            date:      'November 2025',
            url:       'https://doi.org/10.1007/978-981-95-4960-3_33',
            description: {
                vi: 'Thanh Hoang Le Hai, Nhan Nguyen Phuc, Mai Nguyen Tran Phuong, Minh Bui Ngoc, Nam Thoai. Đề xuất bộ lập lịch DRL nhận thức chi phí cho các trung tâm HPC kết hợp năng lượng tái tạo, giúp giảm chi phí và dấu chân carbon bằng cách căn chỉnh thực thi công việc với nguồn cung năng lượng tái tạo.',
                en: 'Thanh Hoang Le Hai, Nhan Nguyen Phuc, Mai Nguyen Tran Phuong, Minh Bui Ngoc, Nam Thoai. Proposes a cost-aware DRL scheduler for hybrid-powered HPC centers that decouples job selection from delay, reducing operational costs and carbon footprint by aligning execution with renewable energy supply.'
            },
            tags:  ['High Performance Computing', 'Job Scheduling', 'Green-Aware Scheduling', 'Reinforcement Learning', 'Multi-objective RL'],
            image: './images/miwai2025.png'
        }
    ],
    awards: [
        {
            title:       { vi: 'Oracle Cloud Infrastructure 2025 — DevOps Professional', en: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional' },
            issuer:      'Oracle Cloud Infrastructure',
            date:        'Oct 28, 2025',
            icon:        'fas fa-cloud text-red-600',
            description: {
                vi: 'Thành thạo OCI infrastructure as code, CI/CD pipelines, DevSecOps, monitoring và quản lý container với Oracle Kubernetes Engine (OKE).',
                en: 'Proficient in OCI infrastructure as code, CI/CD pipeline configuration, DevSecOps practices, monitoring, and container management with Oracle Kubernetes Engine (OKE).'
            }
        },
        {
            title:       { vi: 'Oracle Cloud Infrastructure 2025 — Foundations Associate', en: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate' },
            issuer:      'Oracle Cloud Infrastructure',
            date:        'Oct 27, 2025',
            icon:        'fas fa-cloud text-red-400',
            description: {
                vi: 'Nắm vững các khái niệm cloud cốt lõi và dịch vụ OCI: Compute, Storage, Networking, Database, AI, Security, Governance và Billing.',
                en: 'Demonstrates foundational knowledge of cloud concepts and core OCI services: Compute, Storage, Networking, Database, AI, Security, Governance, and Billing.'
            }
        },
        {
            title:       'Google Business Intelligence',
            issuer:      'Google × NIC (Coursera)',
            date:        'Nov 30, 2024',
            icon:        'fab fa-google text-blue-500',
            description: {
                vi: 'Data modeling, ETL, thiết kế data visualization và dashboard để truyền đạt insights cho stakeholders.',
                en: 'Data modeling, ETL processes, designing data visualizations, and building dashboards to effectively communicate insights to stakeholders.'
            }
        },
        {
            title:       'Google Advanced Data Analytics',
            issuer:      'Google × NIC (Coursera)',
            date:        'Oct 6, 2024',
            icon:        'fab fa-google text-yellow-500',
            description: {
                vi: 'Phân tích thống kê, mô hình hồi quy và machine learning để phân tích dữ liệu và truyền đạt insights.',
                en: 'Statistical analysis, regression and machine learning models for data analysis, and communicating data insights to stakeholders.'
            }
        },
        {
            title:       { vi: 'Trí tuệ Nhân tạo — Hạng Vàng', en: 'Artificial Intelligence — Gold Level' },
            issuer:      'CodinGame',
            date:        'Jan 11, 2024',
            icon:        'fas fa-gamepad text-yellow-500',
            description: {
                vi: 'Phát triển AI nâng cao: tối ưu hóa di chuyển và áp dụng chiến lược phù hợp theo ngữ cảnh trong lập trình cạnh tranh.',
                en: 'Developed advanced AI that optimizes movements and adopts context-appropriate strategies in competitive programming challenges.'
            }
        },
        {
            title:       { vi: 'Thuật toán — Hạng Bạc', en: 'Algorithms — Silver Level' },
            issuer:      'CodinGame',
            date:        'Jan 6, 2024',
            icon:        'fas fa-code text-gray-400',
            description: {
                vi: 'Thành thạo cấu trúc dữ liệu nâng cao và thuật toán: xử lý chuỗi, mảng, danh sách liên kết.',
                en: 'Mastered advanced data structures and algorithms including string manipulation, arrays, and linked lists.'
            }
        },
        {
            title:       { vi: 'Danh hiệu Sinh viên Giỏi Toàn Diện', en: 'Comprehensive Academic Excellence Award' },
            issuer:      { vi: 'HCMUT — ĐHQG TP.HCM', en: 'HCMUT — VNU-HCM' },
            date:        '2023–2024 & 2024–2025',
            icon:        'fas fa-medal text-yellow-500',
            description: {
                vi: 'Ghi nhận thành tích học tập xuất sắc toàn diện liên tục 2 năm học 2023–2024 và 2024–2025 tại Trường Đại học Bách Khoa TP.HCM.',
                en: 'Awarded for outstanding academic performance across all subjects for two consecutive years (2023–2024 and 2024–2025) at Ho Chi Minh City University of Technology.'
            }
        }
    ],
    education: [
        {
            institution: { vi: 'Trường Đại học Bách Khoa — ĐHQG TP.HCM (HCMUT-VNU)', en: 'Ho Chi Minh City University of Technology — VNU-HCM (HCMUT-VNU)' },
            degree:       { vi: 'Cử nhân', en: 'Bachelor' },
            area:         { vi: 'Khoa học Máy tính', en: 'Computer Science' },
            startDate:    '2023',
            endDate:      '2027',
            gpa:          {
                vi: 'CGPA: 3.6/4.0 | Sinh viên Giỏi Toàn Diện 2023–2024 & 2024–2025',
                en: 'CGPA: 3.6/4.0 | Comprehensive Academic Excellence 2023–2024 & 2024–2025'
            },
            logo: './images/logo/hcmut.png'
        }
    ],
    researchDirections: [
        {
            title: { vi: 'Tính toán Hiệu năng Cao Xanh (Green HPC)', en: 'Green High-Performance Computing' },
            description: {
                vi: 'Nghiên cứu tối ưu hóa lập lịch công việc trong hệ thống HPC bằng Deep Reinforcement Learning để giảm chi phí vận hành, dấu chân carbon và ưu tiên sử dụng năng lượng tái tạo.',
                en: 'Research on optimizing job scheduling in HPC systems using Deep Reinforcement Learning to reduce operational costs, carbon footprint, and prioritize the use of renewable energy.'
            },
            tags: ['Green Scheduling', 'Energy Efficiency', 'HPC Optimization', 'Sustainable Computing', 'DRL']
        },
        {
            title: { vi: 'Machine Learning & Hệ thống Big Data', en: 'Machine Learning & Big Data Systems' },
            description: {
                vi: 'Khám phá các kỹ thuật machine learning tiên tiến cho xử lý và phân tích dữ liệu lớn, tối ưu hóa hiệu suất của các hệ thống phân tán.',
                en: 'Exploring advanced machine learning techniques for processing and analyzing large-scale data, and optimizing the performance of distributed systems.'
            },
            tags: ['Machine Learning', 'Big Data', 'Distributed Systems', 'Data Analytics', 'NLP']
        }
    ]
};