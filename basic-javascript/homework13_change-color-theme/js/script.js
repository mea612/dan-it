// let currentTheme = localStorage.getItem('user-theme') === 'dark'
//     ? 'dark'
//     : 'light';

// if (currentTheme === 'dark') {
//     setDarkTheme();
// } else {
//     setDefaultTheme();
// }

// document.querySelector('.header--theme-button').addEventListener('click', () => {
//     if (currentTheme === 'dark') {
//         setDefaultTheme();
//     } else {
//         setDarkTheme();
//     }
// });

// function setDarkTheme() {
//     document.body.style.setProperty('--theme-primary', '#222');
//     document.body.style.setProperty('--secondary-color', '#fff');
//     document.body.style.setProperty('--primary-color', '#FFEB3B');
//     currentTheme = 'dark';
//     localStorage.setItem('user-theme', currentTheme);
// }

// function setDefaultTheme() {
//     document.body.style.setProperty('--theme-primary', '#fff');
//     document.body.style.setProperty('--secondary-color', '#373737');
//     document.body.style.setProperty('--primary-color', '#FF0000');
//     currentTheme = 'default';
//     localStorage.setItem('user-theme', currentTheme);
// }

let currentTheme; 
let lightThemeLink = 'css/theme-light.css';
let darkThemeLink = 'css/theme-dark.css'
let link = document.getElementById('changeTheme');


function setLightTheme() {
    link.href = lightThemeLink;
    currentTheme = 'light';
    localStorage.setItem('user-theme', currentTheme);
}
function setDarkTheme() {
    link.href = darkThemeLink;
    currentTheme = 'dark';
    localStorage.setItem('user-theme', currentTheme);
}

document.addEventListener("DOMContentLoaded", function() {
    currentTheme = localStorage.getItem('user-theme');
    if(currentTheme === 'null' || currentTheme === 'light') {
        setLightTheme();
    } else {
        setDarkTheme(); 
    }
});

document.querySelector('.header--theme-button').addEventListener('click', () => {
    if (currentTheme === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});