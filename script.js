// Language translations
const translations = {
    az: {
        // Navigation
        'nav.home': 'Ana səhifə',
        'nav.about': 'Haqqımızda',
        'nav.services': 'Xidmətlər',
        'nav.team': 'Komandamız',
        'nav.partners': 'Tərəfdaşlar',
        'nav.contact': 'Əlaqə',
        
        // Hero section
        'hero.title': 'Maliyyə Məsləhətçiniz',
        'hero.subtitle': 'SFS – Summit Finance Solutions',
        'hero.description': 'Maliyyə sahəsində peşəkar konsaltinq xidmətləri təqdim edən etibarlı tərəfdaşınız. Mühasibatlıq, audit, vergi və İT xidmətləri ilə biznesinizi irəli aparırıq.',
        'hero.cta': 'Bizimlə əlaqə',
        'hero.learn': 'Daha çox',
        
        // About section
        'about.title': 'Haqqımızda',
        'about.description': 'SFS – Summit Finance Solutions olaraq, maliyyə sahəsində ən yüksək standartlarda xidmət göstərən peşəkar komandayıq.',
        'about.mission.title': 'Missiyamız',
        'about.mission.description': 'Müasir maliyyə həlləri və innovativ yanaşmalarla müştərilərimizin uğuruna töhfə vermək.',
        'about.vision.title': 'Vizyonumuz',
        'about.vision.description': 'Azərbaycanda maliyyə konsaltinqi sahəsində aparıcı və etibarlı şirkət olmaq.',
        'about.stats.title': 'Bizim Nəticələr',
        'about.stats.clients': 'Müştəri',
        'about.stats.years': 'İl təcrübə',
        'about.stats.satisfaction': 'Məmnunluq',
        'about.stats.support': 'Dəstək',
        
        // Services section
        'services.title': 'Xidmətlərimiz',
        'services.description': 'Maliyyə sahəsində geniş spektrli peşəkar xidmətlər təqdim edirik',
        
        // Team section
        'team.title': 'Komandamız',
        'team.description': 'Təcrübəli mütəxəssislərdən ibarət peşəkar komandamız',
        'team.experience.title': 'Təcrübəli Mütəxəssislər',
        'team.experience.description': 'Sahədə uzun illər təcrübəsi olan peşəkarlar',
        'team.certified.title': 'Sertifikatlaşdırılmış',
        'team.certified.description': 'Beynəlxalq sertifikatlara malik mütəxəssislər',
        'team.available.title': '24/7 Əlçatan',
        'team.available.description': 'Hər zaman dəstək və məsləhət üçün hazır',
        'team.experience': 'il təcrübə',
        
        // Partners section
        'partners.title': 'Tərəfdaşlar',
        'partners.description': 'Etibarlı tərəfdaşlarımızla güclü əməkdaşlıq',
        'partners.gov': 'Dövlət Qurumları',
        'partners.banks': 'Bank Sektoru',
        'partners.business': 'Biznes Sektoru',
        'partners.education': 'Təhsil Müəssisələri',
        
        // Contact section
        'contact.title': 'Əlaqə',
        'contact.description': 'Bizimlə əlaqə saxlayın və maliyyə məsələlərinizdə peşəkar dəstək alın',
        'contact.form.title': 'Mesaj göndərin',
        'contact.form.name': 'Ad Soyad',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Mövzu',
        'contact.form.message': 'Mesaj',
        'contact.form.submit': 'Göndər',
        'contact.info.title': 'Əlaqə məlumatları',
        'contact.hours.title': 'İş saatları',
        'contact.hours.weekdays': 'Bazar ertəsi - Cümə',
        'contact.hours.saturday': 'Şənbə',
        'contact.hours.sunday': 'Bazar',
        'contact.hours.closed': 'Bağlı',
        
        // Footer
        'footer.rights': 'Bütün hüquqlar qorunur.',
        
        // Team page
        'team.page.title': 'Komandamız',
        'team.page.subtitle': 'Peşəkar və təcrübəli komandamızla sizə xidmət etməyə hazırıq',
        'team.viewDetails': 'Ətraflı',
        
        // Services details
        'services.accounting.title': 'Mühasibatlıq Xidmətləri',
        'services.accounting.items': [
            'Şirkətin uçot siyasətinin qurulması və idarə olunması',
            'Şirkətin rəsmi dövriyyəsinin hazırlanması',
            'Dövlət orqanlarına hesabatların verilməsi',
            'Gəlir və xərc maddələrinin düzgün hesablarda əks olunmasına nəzarət',
            'Ay bağlanmasına nəzarət'
        ],
        'services.tax.title': 'Vergi Xidməti',
        'services.tax.items': [
            'Hesabatların tərtib olunmasına nəzarət',
            'Dövlət orqanlarından gələn sualların cavablandırılması',
            'Vergi xərclərinin optimallaşdırılması',
            'Vergilərlə bağlı yarana biləcək risklərə nəzarət'
        ],
        'services.finance.title': 'Maliyyə Xidməti',
        'services.finance.items': [
            'İFRS standartları və yerli qanunvericiliyə uyğun hesabatların tərtib olunması',
            'Şirkətin maliyyə fəaliyyətinin təhlili və nəzarət',
            'Xərclərin optimallaşdırılması',
            'Aylıq maliyyə arayışlarının verilməsi',
            'Analitik hesabatların tərtib olunması'
        ],
        'services.warehouse.title': 'Anbar Xidməti',
        'services.warehouse.items': [
            'Anbar ERP sisteminin qurulması (WMS)',
            'Anbar topologiyasının hazırlanması',
            'Barkod və QR kodlarla nişanlanması',
            'TSD terminallarla malların yığılması və yoxlanılması'
        ],
        'services.audit.title': 'Audit Xidməti',
        'services.audit.items': [
            'Maliyyə auditinin aparılması',
            'Əməliyyat auditinin aparılması',
            'Daxili audit yoxlamaların təşkili',
            'Audit rəylərinin tərtibi və rəhbərliyə təqdim olunması',
            'Dövlət orqanlarına audit rəyinin verilməsi'
        ],
        'services.it.title': 'İT Xidməti',
        'services.it.items': [
            'Şirkətin ERP sisteminin qurulması',
            'Serverin qurulması və nəzarəti',
            'İT təhlükəsizliyi',
            'Proseslərin avtomatlaşdırılması',
            'Hesabatlılığın avtomatlaşdırılması'
        ],
        'services.hr.title': 'HR Xidməti',
        'services.hr.items': [
            'İşçilərin qeydiyyata götürülməsi',
            'İşçilərə vəzifə təlimatlarının yazılması',
            'İş yükünün müəyyən olunması',
            'Aylıq əmək haqlarının hesablanması',
            'Ümumi HR xidməti'
        ],
        'services.supply.title': 'Təchizat Zəncirinin İdarə Olunması',
        'services.supply.items': [
            'İllik alış büdcəsinin hazırlanması',
            'Tenderlərin keçirilməsi',
            'Alış limitlərinin müəyyən olunması',
            'Bazar araşdırılması və optimal qiymətin tapılması'
        ]
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.team': 'Our Team',
        'nav.partners': 'Partners',
        'nav.contact': 'Contact',
        
        // Hero section
        'hero.title': 'Your Financial Advisor',
        'hero.subtitle': 'SFS – Summit Finance Solutions',
        'hero.description': 'Your reliable partner providing professional consulting services in the financial sector. We advance your business with accounting, audit, tax and IT services.',
        'hero.cta': 'Contact Us',
        'hero.learn': 'Learn More',
        
        // About section
        'about.title': 'About Us',
        'about.description': 'As SFS – Summit Finance Solutions, we are a professional team providing services at the highest standards in the financial sector.',
        'about.mission.title': 'Our Mission',
        'about.mission.description': 'To contribute to our clients\' success with modern financial solutions and innovative approaches.',
        'about.vision.title': 'Our Vision',
        'about.vision.description': 'To be the leading and reliable company in financial consulting in Azerbaijan.',
        'about.stats.title': 'Our Results',
        'about.stats.clients': 'Clients',
        'about.stats.years': 'Years Experience',
        'about.stats.satisfaction': 'Satisfaction',
        'about.stats.support': 'Support',
        
        // Services section
        'services.title': 'Our Services',
        'services.description': 'We provide a wide range of professional services in the financial sector',
        
        // Team section
        'team.title': 'Our Team',
        'team.description': 'Our professional team consisting of experienced specialists',
        'team.experience.title': 'Experienced Specialists',
        'team.experience.description': 'Professionals with years of experience in the field',
        'team.certified.title': 'Certified',
        'team.certified.description': 'Specialists with international certificates',
        'team.available.title': '24/7 Available',
        'team.available.description': 'Always ready for support and consultation',
        'team.experience': 'years experience',
        
        // Partners section
        'partners.title': 'Partners',
        'partners.description': 'Strong cooperation with our reliable partners',
        'partners.gov': 'Government Institutions',
        'partners.banks': 'Banking Sector',
        'partners.business': 'Business Sector',
        'partners.education': 'Educational Institutions',
        
        // Contact section
        'contact.title': 'Contact',
        'contact.description': 'Contact us and get professional support for your financial matters',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send',
        'contact.info.title': 'Contact Information',
        'contact.hours.title': 'Working Hours',
        'contact.hours.weekdays': 'Monday - Friday',
        'contact.hours.saturday': 'Saturday',
        'contact.hours.sunday': 'Sunday',
        'contact.hours.closed': 'Closed',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        
        // Team page
        'team.page.title': 'Our Team',
        'team.page.subtitle': 'Ready to serve you with our professional and experienced team',
        'team.viewDetails': 'View Details',
        
        // Services details
        'services.accounting.title': 'Accounting Services',
        'services.accounting.items': [
            'Establishment and management of company accounting policy',
            'Preparation of company\'s official circulation',
            'Submission of reports to government agencies',
            'Control of proper reflection of income and expense items in accounts',
            'Monthly closing control'
        ],
        'services.tax.title': 'Tax Services',
        'services.tax.items': [
            'Control of report preparation',
            'Answering questions from government agencies',
            'Optimization of tax expenses',
            'Control of tax-related risks'
        ],
        'services.finance.title': 'Financial Services',
        'services.finance.items': [
            'Preparation of reports in accordance with IFRS standards and local legislation',
            'Analysis and control of company\'s financial activities',
            'Cost optimization',
            'Monthly financial reporting',
            'Preparation of analytical reports'
        ],
        'services.warehouse.title': 'Warehouse Services',
        'services.warehouse.items': [
            'Warehouse ERP system setup (WMS)',
            'Warehouse topology preparation',
            'Barcode and QR code marking',
            'Goods collection and inspection with TSD terminals'
        ],
        'services.audit.title': 'Audit Services',
        'services.audit.items': [
            'Conducting financial audits',
            'Conducting operational audits',
            'Organization of internal audit checks',
            'Preparation of audit opinions and presentation to management',
            'Submission of audit opinion to government agencies'
        ],
        'services.it.title': 'IT Services',
        'services.it.items': [
            'Company ERP system setup',
            'Server setup and monitoring',
            'IT security',
            'Process automation',
            'Reporting automation'
        ],
        'services.hr.title': 'HR Services',
        'services.hr.items': [
            'Employee registration',
            'Writing job instructions for employees',
            'Determining workload',
            'Monthly salary calculation',
            'General HR service'
        ],
        'services.supply.title': 'Supply Chain Management',
        'services.supply.items': [
            'Annual procurement budget preparation',
            'Conducting tenders',
            'Determining purchase limits',
            'Market research and finding optimal prices'
        ]
    }
};

// Current language
let currentLanguage = 'az';

// Services data
const servicesData = [
    {
        icon: 'calculator',
        titleKey: 'services.accounting.title',
        itemsKey: 'services.accounting.items'
    },
    {
        icon: 'file-text',
        titleKey: 'services.tax.title',
        itemsKey: 'services.tax.items'
    },
    {
        icon: 'trending-up',
        titleKey: 'services.finance.title',
        itemsKey: 'services.finance.items'
    },
    {
        icon: 'package',
        titleKey: 'services.warehouse.title',
        itemsKey: 'services.warehouse.items'
    },
    {
        icon: 'search',
        titleKey: 'services.audit.title',
        itemsKey: 'services.audit.items'
    },
    {
        icon: 'monitor',
        titleKey: 'services.it.title',
        itemsKey: 'services.it.items'
    },
    {
        icon: 'users',
        titleKey: 'services.hr.title',
        itemsKey: 'services.hr.items'
    },
    {
        icon: 'truck',
        titleKey: 'services.supply.title',
        itemsKey: 'services.supply.items'
    }
];

// Function to translate text
function translate(key) {
    return translations[currentLanguage][key] || key;
}

// Function to update all translatable elements
function updateTranslations() {
    const elements = document.querySelectorAll('.translatable, [data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (key && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update language button
    document.getElementById('current-lang').textContent = currentLanguage.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Re-render services
    renderServices();
}

// Function to render services
function renderServices() {
    const servicesContainer = document.querySelector('#services .grid');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = '';
    
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'glass-card p-6 hover:border-primary/30 transition-all duration-300';
        
        const items = translations[currentLanguage][service.itemsKey] || [];
        const itemsList = items.map(item => `<li class="text-sm text-muted-foreground">${item}</li>`).join('');
        
        
        serviceCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4">
                    <i data-lucide="${service.icon}" class="w-6 h-6 text-white"></i>
                </div>
                <h3 class="text-lg font-semibold">${translate(service.titleKey)}</h3>
            </div>
            <ul class="space-y-2">
                ${itemsList}
                
            </ul>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Language toggle functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'az' ? 'en' : 'az';
    updateTranslations();
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('#mobile-menu-toggle i');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Contact form functionality
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Here you would typically send the data to a server
    console.log('Contact form data:', data);
    
    // Show success message
    alert(translate('contact.form.success') || 'Mesajınız göndərildi!');
    
    // Reset form
    event.target.reset();
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
}

// Team modal data
const teamMembers = {
    sabuhi: {
        name: 'Rauf Əliyev',
        position: {
            az: 'Baş Maliyyə Direktoru',
            en: 'Chief Financial Officer'
        },
        image: 'rauf-aliyev.jpg',
        education: {
            az: 'Bakı Dövlət Universiteti, Maliyyə fakültəsi. ACCA sertifikatı.',
            en: 'Baku State University, Faculty of Finance. ACCA certification.'
        },
        experience: {
            az: 'Maliyyə və mühasibatlıq sahəsində 15+ il təcrübə. Aparıcı beynəlxalq və yerli şirkətlərdə rəhbər vəzifələrdə çalışmışdır.',
            en: '15+ years of experience in finance and accounting. Worked in leadership positions at leading international and local companies.'
        },
        expertise: {
            az: ['Maliyyə planlaşdırması', 'Büdcə idarəetməsi', 'İFRS standartları', 'Korporativ idarəetmə', 'Risk menecmenti'],
            en: ['Financial planning', 'Budget management', 'IFRS standards', 'Corporate governance', 'Risk management']
        },
        certificates: {
            az: 'ACCA, CPA, İçəri Auditor sertifikatları',
            en: 'ACCA, CPA, Internal Auditor certifications'
        }
    },
    aysel: {
        name: 'Aysel Həsənova',
        position: {
            az: 'Audit Şöbəsinin Rəhbəri',
            en: 'Head of Audit Department'
        },
        image: '',
        education: {
            az: 'Azərbaycan Dövlət İqtisad Universiteti, Audit və Nəzarət ixtisası. CIA sertifikatı.',
            en: 'Azerbaijan State Economic University, Audit and Control. CIA certification.'
        },
        experience: {
            az: 'Audit sahəsində 12+ il təcrübə. Dövlət və özəl sektorlarda mürəkkəb audit layihələrini rəhbərlik etmişdir.',
            en: '12+ years of experience in auditing. Led complex audit projects in public and private sectors.'
        },
        expertise: {
            az: ['Maliyyə auditi', 'Daxili nəzarət', 'Risk qiymətləndirmə', 'Uyğunluq yoxlaması', 'Audit metodologiyası'],
            en: ['Financial audit', 'Internal control', 'Risk assessment', 'Compliance review', 'Audit methodology']
        },
        certificates: {
            az: 'CIA, CISA, CFE sertifikatları',
            en: 'CIA, CISA, CFE certifications'
        }
    },
    elvin: {
        name: 'Elvin Məmmədov',
        position: {
            az: 'Vergi Məsləhətçisi',
            en: 'Tax Consultant'
        },
        image: '',
        education: {
            az: 'Azərbaycan Texniki Universiteti, Vergi və Vergi Tutma. Beynəlxalq Vergi Sertifikatı.',
            en: 'Azerbaijan Technical University, Taxation. International Tax Certificate.'
        },
        experience: {
            az: 'Vergi məsləhətçiliyi sahəsində 10+ il təcrübə. Şirkətlərə vergi optimallaşdırması və planlaşdırması üzrə məsləhət xidmətləri göstərmişdir.',
            en: '10+ years of experience in tax consulting. Provided tax optimization and planning advisory services to companies.'
        },
        expertise: {
            az: ['Vergi planlaşdırması', 'ƏDV məsələləri', 'Beynəlxalq vergitutma', 'Transfer qiymətləndirmə', 'Vergi auditləri'],
            en: ['Tax planning', 'VAT matters', 'International taxation', 'Transfer pricing', 'Tax audits']
        },
        certificates: {
            az: 'CTA, Vergi Məsləhətçisi lisenziyası',
            en: 'CTA, Tax Consultant license'
        }
    },
    nigar: {
        name: 'Nigar Quliyeva',
        position: {
            az: 'İT Şöbəsinin Rəhbəri',
            en: 'Head of IT Department'
        },
        image: '',
        education: {
            az: 'Azərbaycan Texniki Universiteti, İnformasiya Texnologiyaları. PMP sertifikatı.',
            en: 'Azerbaijan Technical University, Information Technologies. PMP certification.'
        },
        experience: {
            az: 'İT layihə idarəetməsi və ERP sistemlərinin tətbiqi sahəsində 8+ il təcrübə. Müxtəlif sektorlarda rəqəmsallaşma layihələrini həyata keçirmişdir.',
            en: '8+ years of experience in IT project management and ERP system implementation. Implemented digitalization projects in various sectors.'
        },
        expertise: {
            az: ['ERP sistemləri', 'Proseslərin avtomatlaşdırılması', 'İT təhlükəsizliyi', 'Cloud həllər', 'Layihə idarəetməsi'],
            en: ['ERP systems', 'Process automation', 'IT security', 'Cloud solutions', 'Project management']
        },
        certificates: {
            az: 'PMP, ITIL, Scrum Master sertifikatları',
            en: 'PMP, ITIL, Scrum Master certifications'
        }
    }
};

// Team modal functions
function openTeamModal(memberId) {
    const member = teamMembers[memberId];
    if (!member) return;
    
    const modal = document.getElementById('teamModal');
    const lang = currentLanguage;
    
    // Set modal content
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalPosition').textContent = member.position[lang];
    document.getElementById('modalEducation').textContent = member.education[lang];
    document.getElementById('modalExperienceText').textContent = member.experience[lang];
    document.getElementById('modalCertificates').textContent = member.certificates[lang];
    
    // Set expertise list
    const expertiseList = document.getElementById('modalExpertise');
    expertiseList.innerHTML = member.expertise[lang].map(item => `<li>${item}</li>`).join('');
    
    // Set image
    const modalImage = document.getElementById('modalImage');
    if (member.image) {
        modalImage.src = member.image;
        modalImage.alt = member.name;
        modalImage.parentElement.innerHTML = `<img id="modalImage" src="${member.image}" alt="${member.name}">`;
    } else {
        const initials = member.name.split(' ').map(n => n[0]).join('');
        modalImage.parentElement.innerHTML = `<div class="team-placeholder"><span>${initials}</span></div>`;
    }
    
    // Update modal translations
    document.getElementById('modalEducationTitle').textContent = lang === 'az' ? 'Təhsil' : 'Education';
    document.getElementById('modalExperienceTitle').textContent = lang === 'az' ? 'Təcrübə' : 'Experience';
    document.getElementById('modalExpertiseTitle').textContent = lang === 'az' ? 'İxtisas sahələri' : 'Expertise';
    document.getElementById('modalCertificatesTitle').textContent = lang === 'az' ? 'Sertifikatlar' : 'Certificates';
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
    const modal = document.getElementById('teamModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize the application
function init() {
    // Set up event listeners
    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Set up smooth scrolling
    setupSmoothScrolling();
    
    // Initial translation update
    updateTranslations();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeTeamModal();
        }
    });
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}