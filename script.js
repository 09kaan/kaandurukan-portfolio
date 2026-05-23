// ── Translations ──────────────────────────
const translations = {
    en: {
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.desc': 'Computer Engineering graduate from TED University. I work on computer vision, embedded systems, and full-stack software development.',
        'about.label': 'About',
        'about.p1': 'I\'m a <strong>Computer Engineering</strong> graduate with hands-on experience across the full development cycle. From training YOLO models on Jetson Nano for real-time drone vision, to building IoT systems with ESP32, to developing mobile apps with Flutter -- I like building things that work in the real world, not just on paper.',
        'about.p2': 'Most of my projects sit at the intersection of <strong>hardware and software</strong>. I\'ve worked on autonomous drones, smart thermostats, robotic systems, and full-stack web applications.',
        'about.location': 'Location',
        'about.languages': 'Languages',
        'about.lang_tr': 'Turkish (Native)',
        'about.lang_en': 'English (C1)',
        'about.education': 'Education',
        'about.degree': 'B.Sc. Computer Engineering',
        'skills.label': 'Technical Skills',
        'skills.programming': 'Programming',
        'skills.frontend': 'Frontend & Mobile',
        'skills.cv': 'Computer Vision',
        'skills.backend': 'Backend & Database',
        'skills.tools': 'Tools',
        'projects.label': 'Selected Work',
        'projects.title': 'Projects',
        'agmdm.label': 'Real-Time Object Detection',
        'agmdm.desc': 'A modular drone system that performs real-time object detection using a custom-trained YOLO model running on a Jetson Nano. The ground station interface -- built with Flutter -- streams live detections, telemetry, and system diagnostics. Presented at the "Genc Beyinler" fair.',
        'sesame.label': 'Interactive Robotic System',
        'sesame.desc': 'An interactive robot built from scratch. Combines mechanical design, microcontroller programming, and sensor integration to perform automated physical tasks. Handles real-time motor control and environmental response.',
        'thermo.label': 'IoT Temperature Control',
        'thermo.name': 'Smart Thermostat',
        'thermo.desc': 'An ESP32-based thermostat with a 3D-printed enclosure and OLED display. Reads temperature and humidity in real time, syncs data to Firebase, and provides remote control through a Flutter mobile app.',
        'travel.label': 'AI-Powered Mobile App',
        'travel.desc': 'A mobile travel planning app that generates personalized itineraries using AI. Users go through a step-by-step wizard -- destination, dates, budget, group size -- and get a full trip plan with hotel, flight, and tour recommendations. Built with React Native and backed by a Node.js API integrated with OpenAI. Supports Turkish and English.',
        'travel.placeholder': 'Image coming soon',
        'exp.label': 'Background',
        'exp.title': 'Experience & Education',
        'exp.experience': 'Experience',
        'exp.education': 'Education',
        'exp.it_title': 'IT Intern',
        'exp.it_org': 'Ozgorkey Holding, Izmir',
        'exp.it_desc': 'Corporate IT infrastructure support. System maintenance, network hardware troubleshooting, and internal tool management.',
        'exp.sw_title': 'Software Development Intern',
        'exp.sw_org': 'Dijinet, Ankara',
        'exp.sw_desc': 'Software development and debugging. Worked with backend services, databases, and internal development workflows.',
        'exp.degree': 'B.Sc. Computer Engineering',
        'exp.tr_native': 'TR (Native)',
        'contact.label': 'Contact',
        'contact.title': 'Get in touch',
        'contact.text': 'Open to opportunities and collaborations. Feel free to reach out.'
    },
    tr: {
        'nav.about': 'Hakkimda',
        'nav.projects': 'Projeler',
        'nav.experience': 'Deneyim',
        'nav.contact': 'Iletisim',
        'hero.desc': 'TED Universitesi Bilgisayar Muhendisligi mezunu. Bilgisayar gorusu, gomulu sistemler ve full-stack yazilim gelistirme alanlarinda calisiyorum.',
        'about.label': 'Hakkimda',
        'about.p1': '<strong>Bilgisayar Muhendisligi</strong> mezunuyum. Jetson Nano uzerinde YOLO modelleri egitmekten, ESP32 ile IoT sistemleri kurmaya, Flutter ile mobil uygulamalar gelistirmeye kadar genis bir yelpazede deneyimim var. Sadece kagit uzerinde degil, gercek dunyada calisan seyler uretmeyi seviyorum.',
        'about.p2': 'Projelerimin cogu <strong>donanim ve yazilimin</strong> kesistigi noktada. Otonom dronelar, akilli termostatlar, robotik sistemler ve full-stack web uygulamalari uzerinde calistim.',
        'about.location': 'Konum',
        'about.languages': 'Diller',
        'about.lang_tr': 'Turkce (Ana dil)',
        'about.lang_en': 'Ingilizce (C1)',
        'about.education': 'Egitim',
        'about.degree': 'Bilgisayar Muhendisligi Lisans',
        'skills.label': 'Teknik Yetenekler',
        'skills.programming': 'Programlama',
        'skills.frontend': 'Frontend & Mobil',
        'skills.cv': 'Bilgisayar Gorusu',
        'skills.backend': 'Backend & Veritabani',
        'skills.tools': 'Araclar',
        'projects.label': 'Secilmis Calismalar',
        'projects.title': 'Projeler',
        'agmdm.label': 'Gercek Zamanli Nesne Tespiti',
        'agmdm.desc': 'Jetson Nano uzerinde ozel egitilmis YOLO modeli ile gercek zamanli nesne tespiti yapan moduler bir drone sistemi. Flutter ile gelistirilen yer istasyonu arayuzu canli tespitleri, telemetriyi ve sistem bilgilerini aktarir. "Genc Beyinler" fuarinda sunulmustur.',
        'sesame.label': 'Interaktif Robotik Sistem',
        'sesame.desc': 'Sifirdan tasarlanmis interaktif bir robot. Mekanik tasarim, mikrodenetleyici programlama ve sensor entegrasyonunu birlestirerek otomatik fiziksel gorevleri yerine getirir. Gercek zamanli motor kontrolu ve cevresel tepki verme ozelligi tasir.',
        'thermo.label': 'IoT Sicaklik Kontrolu',
        'thermo.name': 'Akilli Termostat',
        'thermo.desc': '3D baski kasali ve OLED ekranli ESP32 tabanli termostat. Sicaklik ve nemi gercek zamanli olarak okur, verileri Firebase\'e senkronize eder ve Flutter mobil uygulama uzerinden uzaktan kontrol saglar.',
        'travel.label': 'Yapay Zeka Destekli Mobil Uygulama',
        'travel.desc': 'Yapay zeka kullanarak kisisellestirilmis seyahat planlari olusturan mobil uygulama. Kullanicilar adim adim bir sihirbaz ile destinasyon, tarih, butce ve kisi sayisini belirledikten sonra otel, ucus ve tur onerileriyle eksiksiz bir gezi plani alir. React Native ile gelistirilmis, Node.js ve OpenAI entegreli backend\'e sahiptir. Turkce ve Ingilizce dil destegi sunar.',
        'travel.placeholder': 'Gorsel yakinda eklenecek',
        'exp.label': 'Gecmis',
        'exp.title': 'Deneyim & Egitim',
        'exp.experience': 'Deneyim',
        'exp.education': 'Egitim',
        'exp.it_title': 'BT Stajyeri',
        'exp.it_org': 'Ozgorkey Holding, Izmir',
        'exp.it_desc': 'Kurumsal BT altyapi destegi. Sistem bakimi, ag donanimi sorun giderme ve dahili arac yonetimi.',
        'exp.sw_title': 'Yazilim Gelistirme Stajyeri',
        'exp.sw_org': 'Dijinet, Ankara',
        'exp.sw_desc': 'Yazilim gelistirme ve hata ayiklama. Backend servisleri, veritabanlari ve dahili gelistirme surecleri uzerinde calistim.',
        'exp.degree': 'Bilgisayar Muhendisligi Lisans',
        'exp.tr_native': 'TR (Ana dil)',
        'contact.label': 'Iletisim',
        'contact.title': 'Iletisime gecin',
        'contact.text': 'Firsatlara ve is birliklerine acigim. Benimle iletisime gecmekten cekinmeyin.'
    }
};

let currentLang = 'tr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update toggle buttons
    const nextLang = lang === 'tr' ? 'EN' : 'TR';
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.textContent = nextLang;
    });

    localStorage.setItem('portfolio-lang', lang);
}

// Toggle handlers
document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const next = currentLang === 'tr' ? 'en' : 'tr';
        setLanguage(next);
    });
});

// Load saved language
const savedLang = localStorage.getItem('portfolio-lang');
if (savedLang && savedLang !== 'tr') {
    setLanguage(savedLang);
}


// ── Scroll Reveal ─────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


// ── Navbar scroll state ───────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// ── Hamburger menu ────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});


// ── Carousel ──────────────────────────────
document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-indicators');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let current = 0;

    // Build dots
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function goTo(index) {
        // Pause current video
        const currentVideo = slides[current].querySelector('video');
        if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
        }

        slides[current].classList.remove('active');
        dots[current].classList.remove('active');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('active');
        dots[current].classList.add('active');

        // Play new video
        const newVideo = slides[current].querySelector('video');
        if (newVideo) {
            newVideo.play();
        }
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
});


// ── Smooth scroll for nav links ───────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
