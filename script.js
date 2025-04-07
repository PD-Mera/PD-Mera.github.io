const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    const icon = themeToggleButton.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});
