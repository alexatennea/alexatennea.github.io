const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.getElementById('navbar');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        themeIcon.classList.replace('bi-sun', 'bi-moon');
    } else {
        navbar.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        themeIcon.classList.replace('bi-moon', 'bi-sun');
    }
});