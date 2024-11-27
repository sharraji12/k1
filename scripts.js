// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Language Toggle
const translations = {
    'ta': {
        'services-title': 'எங்கள் சேவைகள்',
        'paddy-title': 'நெல் நடவு',
        'paddy-desc': 'நவீன இயந்திரங்கள் மூலம் துல்லியமான நெல் நடவு சேவை',
        'machinery-title': 'இயந்திர சேவைகள்',
        'machinery-desc': 'டிராக்டர் மற்றும் டாடா ஏசி சேவைகள்',
        'agriculture-info': 'விவசாய தகவல்கள்',
        'seasons-title': 'நெல் சாகுபடி காலம்',
        'samba': 'சம்பா - ஜூன் முதல் செப்டம்பர்',
        'kuruvai': 'குறுவை - செப்டம்பர் முதல் டிசம்பர்',
        'thaladi': 'தாளடி - டிசம்பர் முதல் மார்ச்',
        'varieties-title': 'நெல் ரகங்கள்',
        'tips-title': 'முக்கிய விவசாய குறிப்புகள்',
        'seedling-age': '🌱 நாற்று வயது: 18-22 நாட்கள்',
        'water-management': '💧 நீர் மேலாண்மை: 2.5 செ.மீ ஆழம்',
        'weed-management': '🌿 களை மேலாண்மை: நடவு செய்த 3வது நாள்',
        'fertilizer-management': '🌾 உர மேலாண்மை: அடி உரம் + மேல் உரம்',
        'contact': 'தொடர்பு',
        'contact-title': 'தொடர்பு கொள்ள',
        'service-areas': 'சேவை பகுதிகள்',
        'working-hours': 'நேரம்',
        'current-lang': 'தமிழ்'
    },
    'en': {
        'services-title': 'Our Services',
        'paddy-title': 'Paddy Transplantation',
        'paddy-desc': 'Precise paddy transplantation service using modern machinery',
        'machinery-title': 'Machinery Services',
        'machinery-desc': 'Tractor and Tata AC Services',
        'agriculture-info': 'Agricultural Information',
        'seasons-title': 'Paddy Cultivation Seasons',
        'samba': 'Samba - June to September',
        'kuruvai': 'Kuruvai - September to December',
        'thaladi': 'Thaladi - December to March',
        'varieties-title': 'Paddy Varieties',
        'tips-title': 'Important Agricultural Tips',
        'seedling-age': '🌱 Seedling Age: 18-22 days',
        'water-management': '💧 Water Management: 2.5 cm depth',
        'weed-management': '🌿 Weed Management: 3rd day after planting',
        'fertilizer-management': '🌾 Fertilizer Management: Base + Top dressing',
        'contact': 'Contact',
        'contact-title': 'Contact Us',
        'service-areas': 'Service Areas',
        'working-hours': 'Working Hours',
        'current-lang': 'English'
    }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('language') || 'ta';

// Load saved language
setLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ta' ? 'en' : 'ta';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
});

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.querySelector('.current-lang').textContent = translations[lang]['current-lang'];
}

// Date and Time Display
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeString = now.toLocaleString(currentLang === 'ta' ? 'ta-IN' : 'en-IN', options);
    document.getElementById('current-time').textContent = dateTimeString;
}

// Update time every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
