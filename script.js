// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check the saved theme in localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // If a theme is saved in localStorage, apply it
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        changeIcon('dark');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        changeIcon('light');
    }
});

// Toggle the theme when the button is clicked
themeToggleButton.addEventListener('click', function () {
    // Toggle the themes
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Save the theme preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        changeIcon('dark');
    } else {
        localStorage.setItem('theme', 'light');
        changeIcon('light');
    }
});

// Function to change the sun/moon icon based on the current theme
function changeIcon(theme) {
    const icon = themeToggleButton.querySelector('i');
    if (theme === 'dark') {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}