import './component/header.js';
import './component/landing-page.js';
import './component/about.js';
import '../styles/main.css';
import App from './views/app';

const nav = document.querySelector("nav")
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 210) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});


const app = new App({
    dropbutton: document.querySelector('.dropdown-button'),
    dropdown: document.querySelector('.dropdown-content'),
    content: document.querySelector('#module'),
});
  
window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
