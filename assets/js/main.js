// Toggle Light and Dark Mode Begin
window.onload = function() {
    const checkb = document.getElementById('theme-switch');
    checkb.addEventListener('change', () => {
        document.body.classList.toggle('darkTheme');
    });
}
// Toggle End


let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem('theme');

const htmlEl = document.getElementsByTagName('html')[0];
htmlEl.dataset.theme = theme;

if (systemInitiatedDark.matches) {
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function modeSwitcher() {
    let theme = localStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
    }
    htmlEl.dataset.theme = theme;
}

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}