/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tc => {
            tc.classList.remove('filtersActive');
        });
        target.classList.add('filtersActive');

        tabs.forEach(t => {
            t.classList.remove('filterTabActive');
        });
        tab.classList.add('filterTabActive');
    });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('themeButton');
const darkTheme = 'darkTheme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply the previously selected theme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Toggle theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and current icon choice
    localStorage.setItem('selectedTheme', getCurrentTheme());
    localStorage.setItem('selectedTcon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

// Define elements to reveal with ScrollReveal
const elementsToReveal = [
    '.profileBorder',
    '.profileName',
    '.profileProfession',
    '.profileSocial',
    '.profileInfo-group',
    '.profileButtons',
    '.filtersContent',
    '.filters',
];

// Apply ScrollReveal to each element
elementsToReveal.forEach((element, index) => {
    sr.reveal(element, { delay: 500 + index * 100 });
});