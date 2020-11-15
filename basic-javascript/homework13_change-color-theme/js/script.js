let currentTheme = localStorage.getItem('user-theme') === 'dark'
    ? 'dark'
    : "deafult";

if (currentTheme === 'dark') {
    setDarkTheme();
} else {
    setDefaultTheme();
}

document.querySelector('.header--theme-button').addEventListener('click', () => {
    if (currentTheme === 'dark') {
        setDefaultTheme();
    } else {
        setDarkTheme();
    }
});

function setDarkTheme() {
    document.body.style.setProperty('--theme-primary', '#222');
    document.body.style.setProperty('--secondary-color', '#fff');
    document.body.style.setProperty('--primary-color', '#FFEB3B');
    currentTheme = 'dark';
    localStorage.setItem('user-theme', currentTheme);
}

function setDefaultTheme() {
    document.body.style.setProperty('--theme-primary', '#fff');
    document.body.style.setProperty('--secondary-color', '#373737');
    document.body.style.setProperty('--primary-color', '#FF0000');
    currentTheme = 'default';
    localStorage.setItem('user-theme', currentTheme);
}
