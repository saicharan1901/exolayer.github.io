// Data Structures
const productData = {
    composite: {
        title: "Composite Manufacturing",
        tagline: "Advanced materials, engineered to perform.",
        overviewImage: "assets/projects/overview-composite.jpg",
        desc: "We engineer and manufacture high-performance components utilizing Carbon Fibre, Kevlar, and advanced natural composites. As an authorised partner of Bcomp, we integrate industry-leading sustainable composite technologies into rigorous aerospace and automotive applications.",
        badges: ["Carbon Fibre", "Natural Fibre", "Bcomp Partner", "Wet Layup", "Prepreg"],
        chartData: [95, 70, 90, 65, 85],
        projects: [
            {
                title: "Bcomp Partnership",
                client: "Authorised Partner",
                tag: "Composite Manufacturing",
                impact: "Certified to manufacture & sell parts using Bcomp's ampliTex™ natural fibre reinforcement technology under a formal NDA agreement.",
                image: "assets/projects/bcomp-logo.png",
                detail: "Bcomp's natural fibre composites are used in Formula 1, rally, and aerospace applications. As their authorised Indian partner, EXOLAYER brings this cutting-edge material capability to domestic clients."
            },
            {
                title: "Carbon Fibre Bonnet with NACA Duct",
                client: "Volkswagen Polo",
                tag: "Composite Manufacturing",
                impact: "Designed and manufactured a carbon fibre bonnet with an integrated NACA duct, including full mould design and CAD modelling.",
                image: "assets/projects/naca-duct-installed.jpg",
                detail: "Full process from mould CAD to finished CFRP part — delivering significant weight reduction and improved aerodynamic performance for track applications."
            },
            {
                title: "Carbon Fibre Intake System",
                client: "Hyundai i20 N-Line",
                tag: "Composite Manufacturing",
                impact: "Engineered a custom carbon fibre cold air intake system with a 3D-printed prototype mould, followed by a finished CFRP production part.",
                image: "assets/projects/air-intake-finished.jpg",
                detail: "Full pipeline from 3D-printed prototype mould to final wet-layup carbon part. Improved airflow characteristics over the OEM intake while reducing component weight."
            }
        ]
    },
    additive: {
        title: "Additive Manufacturing",
        tagline: "Rapid prototyping. Production-grade geometry.",
        overviewImage: "assets/projects/overview-additive.jpg",
        desc: "We provide industrial FDM and SLA 3D printing services for complex geometries. From initial functional prototyping for design validation to the batch production of resilient enclosures, we ensure precision and reliability throughout the development cycle.",
        badges: ["FDM", "SLA", "Functional Prototyping", "Custom Enclosures", "Rapid Iteration"],
        chartData: [65, 95, 75, 80, 80],
        projects: [
            {
                title: "Automated Lighting & HVAC System",
                client: "Smart Building Solution",
                tag: "Additive Manufacturing",
                impact: "Designed and 3D-printed a custom housing for a human-presence-based automation system that controls lights, fans, AC, switches, and geysers.",
                image: "assets/projects/automated-lighting.jpg",
                detail: "The system uses occupancy sensing to autonomously manage all electrical loads in a room — eliminating manual switching and reducing energy consumption. The 3D-printed enclosure was designed for rapid prototyping and field deployment."
            }
        ]
    },
    ai: {
        title: "AI Marketplace",
        tagline: "Connecting demand with manufacturing capacity — intelligently.",
        overviewImage: "assets/projects/overview-ai.webp",
        desc: "Our developing AI-driven marketplace is designed to streamline B2B procurement. By leveraging intelligent requirement parsing, the platform aims to efficiently connect clients with appropriate manufacturing partners based on verified capabilities, geographical proximity, and operational capacity.",
        badges: ["AI Matchmaking", "PLM Tool", "B2B + B2C", "Chatbot RFQ", "Manufacturer Dashboard"],
        chartData: [50, 80, 85, 90, 95],
        projects: [
            {
                title: "AI Manufacturing Marketplace",
                client: "Platform Product",
                tag: "AI Marketplace",
                impact: "A two-sided platform connecting buyers to vetted manufacturers via AI-driven requirement matching — with a built-in PLM tool for manufacturers to manage orders, machines, and deadlines.",
                image: null,
                detail: "Customer side: Users search or chat to describe their requirement (e.g. 'Custom phone case'). The AI understands the spec and shows a ranked list of capable manufacturers. Manufacturer side: A full PLM dashboard for managing machine efficiency, client portfolios, deadlines, and project tracking."
            }
        ]
    },
    solutions: {
        title: "End-to-End Product Solutions",
        tagline: "From problem statement to market-ready product.",
        overviewImage: "assets/projects/overview-solutions.png",
        desc: "We offer comprehensive turnkey engineering solutions tailored to complex problem statements. Our unified approach encompasses mechanical design, electronics integration, software development, and final assembly, ensuring cohesive project execution from concept to deployment.",
        badges: ["Mechanical Design", "Electronics Integration", "Software", "Prototyping", "Defence"],
        chartData: [90, 75, 85, 88, 90],
        projects: [
            {
                title: "Canopy Lift Quality Check Device",
                client: "IDEX Defence Challenge",
                tag: "End-to-End",
                impact: "Developed a precision quality-check instrument to detect canopy lift in pressurised fighter jet cockpits, preventing critical sealing failures mid-flight.",
                image: "assets/projects/canopy-lift-check.jpg",
                detail: "Applied to an iDEX (Innovations for Defence Excellence) problem statement. The device measures the gap between the canopy and airframe under pressurisation, ensuring the seal is within tolerance to prevent catastrophic failure during high-altitude flight."
            },
            {
                title: "EV Scooter with Modular Carrier",
                client: "Electric Mobility Concept",
                tag: "End-to-End",
                impact: "Designed a full EV scooter chassis with a modular rear carrier system — configurable per use-case (e.g., food delivery box, cargo carrier, passenger seat).",
                image: "assets/projects/ev-scooter-2.jpg",
                detail: "The modular carrier architecture allows the same chassis to serve multiple markets. The rear sub-frame is designed for quick-swap configuration, reducing retooling cost for OEMs targeting different delivery or lifestyle segments."
            }
        ]
    }
};

let currentProduct = 'composite';
let currentMode = 'overview';
let chartInstance = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollSpy();
    initFadeInAnimations();
    initSmoothScrolling();
    renderProductContent();

    // Attach event listeners to product tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.getAttribute('data-product');
            if (product) updateProductState(product);
        });
    });

    // Attach event listeners to mode tabs
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mode = e.target.getAttribute('data-mode');
            if (mode) updateProductMode(mode);
        });
    });

    // Handle form submission
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-msg');
    const submitBtn = document.getElementById('submit-btn');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate network request
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.style.display = 'block';
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                form.reset();
            }, 800);
        });
    }
});

// --- Scroll-Spy Nav ---
function initScrollSpy() {
    const observerOptions = { rootMargin: "-40% 0px -40% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => observer.observe(section));
}

// --- Fade-In Animation ---
function initFadeInAnimations() {
    const animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => animObserver.observe(el));
}

// --- Smooth Scrolling ---
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// --- Product Hub Logic ---
function updateProductState(category) {
    currentProduct = category;
    currentMode = 'overview'; // Force back to overview mode on tab switch
    renderProductContent();
}

function updateProductMode(mode) {
    currentMode = mode;
    renderProductContent();
}

function renderProductContent() {
    // Update Tabs UI
    document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab-btn[data-product="${currentProduct}"]`)?.classList.add('active');

    // Update Mode UI
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.mode-btn[data-mode="${currentMode}"]`)?.classList.add('active');

    // Show/hide Project Portfolio tab — not applicable for AI Marketplace
    const portfolioBtn = document.querySelector('.mode-btn[data-mode="projects"]');
    if (portfolioBtn) {
        portfolioBtn.style.display = currentProduct === 'ai' ? 'none' : '';
    }
    // If AI tab is active and mode is projects, force back to overview
    if (currentProduct === 'ai' && currentMode === 'projects') {
        currentMode = 'overview';
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.mode-btn[data-mode="overview"]')?.classList.add('active');
    }

    const viewport = document.getElementById('product-viewport');
    const data = productData[currentProduct];

    // Fade out effect for smooth transition
    viewport.style.opacity = '0';
    viewport.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        if (currentMode === 'overview') {
            const badgesHtml = data.badges.map(b => `<span class="badge">${b}</span>`).join('');
            viewport.innerHTML = `
                <div class="grid-2">
                    <div>
                        <p class="product-tagline">${data.tagline}</p>
                        <h3 class="heading-md">${data.title}</h3>
                        <p class="subtitle" style="margin-bottom: 1.5rem; margin-top: 0.75rem;">${data.desc}</p>
                        <div class="badges-row">${badgesHtml}</div>
                        <div class="feature-list">
                            <div class="feature-item">
                                <div class="feature-check">✓</div>
                                <span>Verified Production Standards</span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-check">✓</div>
                                <span>Scalable from Prototype to Batch</span>
                            </div>
                        </div>
                    </div>
                    <div class="overview-visual-panel">
                        <div class="overview-image-wrap" style="flex: 1;">
                            <img src="${data.overviewImage}" alt="${data.title} overview" class="overview-image" style="height: 100%; min-height: 360px;" />
                        </div>
                    </div>
                </div>
            `;
        } else {
            const cardsHtml = data.projects.map(p => `
                <div class="project-card">
                    ${p.image ? `<div class="project-image" style="background-image: url('${p.image}')"></div>` : `<div class="project-image project-image-placeholder"><span>AI Platform</span></div>`}
                    <div class="project-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
                            <div class="project-client">${p.client}</div>
                            <span class="badge" style="font-size: 0.55rem;">${p.tag}</span>
                        </div>
                        <h4 class="project-title">${p.title}</h4>
                        <div class="project-divider"></div>
                        <p class="project-impact">${p.impact}</p>
                        <p class="project-detail">${p.detail}</p>
                    </div>
                </div>
            `).join('');

            viewport.innerHTML = `<div class="projects-grid">${cardsHtml}</div>`;
        }
        
        // Fade in
        viewport.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        viewport.style.opacity = '1';
        viewport.style.transform = 'translateY(0)';
    }, 200);
}

function initChart(chartData) {
    const ctx = document.getElementById('productChart')?.getContext('2d');
    if (!ctx) return;

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strength', 'Lead Time', 'Precision', 'Cost Eff.', 'Innovation'],
            datasets: [{
                data: chartData,
                backgroundColor: 'rgba(61, 127, 103, 0.15)',
                borderColor: '#3D7F67',
                pointBackgroundColor: '#3D7F67',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    angleLines: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(28, 25, 23, 0.9)',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false
                }
            }
        }
    });
}

// --- SITE BACKGROUND CANVAS ANIMATION (Hexagonal Grid) ---
(function initSiteCanvas() {
    const canvas = document.getElementById('site-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let offsetX = 0;
    let offsetY = 0;
    const hexRadius = 45; // Size of hexagons
    const hexHeight = Math.sqrt(3) * hexRadius;
    const hexWidth = 2 * hexRadius;
    const horizSpacing = hexWidth * 0.75;
    const vertSpacing = hexHeight;
    
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    function drawHexagon(x, y) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hx = x + hexRadius * Math.cos(angle);
            const hy = y + hexRadius * Math.sin(angle);
            if (i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Very subtle, premium stroke color
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(61, 127, 103, 0.06)';
        
        // Slow diagonal pan
        offsetX -= 0.2;
        offsetY -= 0.1;
        
        // Wrap offsets to create seamless infinite scrolling
        if (offsetX <= -horizSpacing * 2) offsetX += horizSpacing * 2;
        if (offsetY <= -vertSpacing * 2) offsetY += vertSpacing * 2;
        
        // Calculate grid bounds with buffer
        const cols = Math.ceil(width / horizSpacing) + 3;
        const rows = Math.ceil(height / vertSpacing) + 3;
        
        for (let q = -2; q < cols; q++) {
            for (let r = -2; r < rows; r++) {
                let x = q * horizSpacing + offsetX;
                let y = r * vertSpacing + offsetY;
                
                // Stagger odd columns
                if (Math.abs(q % 2) === 1) {
                    y += vertSpacing / 2;
                }
                
                drawHexagon(x, y);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
})();

// --- 3D INTERACTIVE LOGO TOY ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('interactive-toy');
    const rotator = document.getElementById('toy-rotator');
    if (!container || !rotator) return;
    
    // 1. Initial Load Animation (Pulse to show interactivity)
    setTimeout(() => {
        container.classList.add('exploded');
        setTimeout(() => {
            if (!container.matches(':hover')) {
                container.classList.remove('exploded');
            }
        }, 800);
    }, 600);
    
    // 2. Scroll Animation (Exploded View Parallax)
    window.addEventListener('scroll', () => {
        if (!container.classList.contains('resting')) return;
        const scrollY = window.scrollY;
        if (scrollY > window.innerHeight) return;
        
        // Keep the rotator flat during scroll
        rotator.style.transform = `rotateX(0deg) rotateY(0deg)`;
        
        // Calculate dynamic separation based on scroll depth (max at 500px)
        const scrollFactor = Math.min(scrollY / 500, 1); 
        const layerGrey = document.getElementById('layer-grey');
        const layerGreen = document.getElementById('layer-green');
        
        if(layerGrey && layerGreen) {
            layerGrey.style.transform = `translateZ(${-10 - (scrollFactor * 70)}px) translateY(${scrollFactor * 30}px) scale(${1 - (scrollFactor * 0.05)})`;
            layerGreen.style.transform = `translateZ(${10 + (scrollFactor * 70)}px) translateY(${-(scrollFactor * 30)}px) scale(${1 + (scrollFactor * 0.05)})`;
        }
    });

    // Mouse tracking for 3D tilt
    container.addEventListener('mousemove', (e) => {
        container.classList.remove('resting');
        
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        
        const tiltX = -y * 25; 
        const tiltY = x * 25;
        
        rotator.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        
        // Clear inline transforms to let CSS `.exploded` (if active) or base CSS take over
        const layerGrey = document.getElementById('layer-grey');
        const layerGreen = document.getElementById('layer-green');
        if (layerGrey && layerGreen) {
            layerGrey.style.transform = '';
            layerGreen.style.transform = '';
        }
    });
    
    // Snap back to resting state (accounting for scroll)
    container.addEventListener('mouseleave', () => {
        container.classList.add('resting');
        container.classList.remove('exploded');
        rotator.style.transform = `rotateX(0deg) rotateY(0deg)`;
        
        // Immediately re-apply the scroll parallax so it doesn't snap to 0 abruptly
        const scrollY = window.scrollY;
        if (scrollY <= window.innerHeight) {
            const scrollFactor = Math.min(scrollY / 500, 1); 
            const layerGrey = document.getElementById('layer-grey');
            const layerGreen = document.getElementById('layer-green');
            if(layerGrey && layerGreen) {
                layerGrey.style.transform = `translateZ(${-10 - (scrollFactor * 70)}px) translateY(${scrollFactor * 30}px) scale(${1 - (scrollFactor * 0.05)})`;
                layerGreen.style.transform = `translateZ(${10 + (scrollFactor * 70)}px) translateY(${-(scrollFactor * 30)}px) scale(${1 + (scrollFactor * 0.05)})`;
            }
        }
    });
    
    // Explode on click
    container.addEventListener('mousedown', () => {
        container.classList.add('exploded');
    });
    
    // Reform on release
    window.addEventListener('mouseup', () => {
        if(container.classList.contains('exploded')){
            container.classList.remove('exploded');
        }
    });
    
    // Note: Touch events (touchstart/touchend) for exploding the toy 
    // were removed to prevent interference with native mobile scrolling.
});

// --- LEGAL MODAL LOGIC & TEMPLATES ---

const legalTemplates = {
    privacy: {
        title: "Privacy Policy",
        content: `
            <h3>1. Introduction</h3>
            <p>Welcome to Exolayer Pvt. Ltd. We are committed to protecting your personal information and your right to privacy in accordance with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
            <h3>2. Information We Collect</h3>
            <p>We may collect personal identification information (Name, Email, Phone Number, Company Details) when you voluntarily submit it through our contact forms or engineering inquiry portals.</p>
            <h3>3. How We Use Your Data</h3>
            <p>We use your information strictly to respond to business inquiries, fulfill engineering contracts, and improve our manufacturing services. We do not sell your data to third parties.</p>
            <h3>4. Data Security</h3>
            <p>We implement appropriate technical and organizational security measures to protect your data. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            <h3>5. Contact Us</h3>
            <p>If you have questions about this privacy policy, you may contact our Grievance Officer at contact@exolayer.in or by post to: FCI Godown Road, Vijinapura, Bengaluru, Karnataka 560016.</p>
        `
    },
    terms: {
        title: "Terms of Service",
        content: `
            <h3>1. Agreement to Terms</h3>
            <p>By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h3>2. Intellectual Property Rights</h3>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein are owned or controlled by Exolayer Pvt. Ltd.</p>
            <h3>3. Limitation of Liability</h3>
            <p>In no event shall Exolayer Pvt. Ltd. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Exolayer's website.</p>
            <h3>4. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
        `
    },
    compliance: {
        title: "Corporate Compliance",
        content: `
            <h3>Corporate Identity</h3>
            <p>Exolayer Pvt. Ltd. is a registered Private Limited Company under the Companies Act, 2013, Ministry of Corporate Affairs, Government of India.</p>
            <h3>Registered Office</h3>
            <p>Our registered corporate office is located at:<br>
            FCI Godown Road, Vijinapura<br>
            Bengaluru, Karnataka 560016<br>
            India</p>
            <h3>Business Conduct</h3>
            <p>We operate in strict adherence to environmental regulations, labor laws, and manufacturing compliance standards mandated by the Government of India and the State Government of Karnataka. For specific manufacturing certifications, quality assurance audits, or compliance documentation, please contact our engineering team directly.</p>
        `
    }
};

window.openLegalModal = function(type) {
    const modal = document.getElementById('legal-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    if(legalTemplates[type]) {
        title.innerHTML = legalTemplates[type].title;
        body.innerHTML = legalTemplates[type].content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
};

window.closeLegalModal = function() {
    const modal = document.getElementById('legal-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
};

// Close modal when clicking outside the container
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('legal-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLegalModal();
            }
        });
    }
});
