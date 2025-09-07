const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Update button text
    toggleButton.textContent = newTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
});