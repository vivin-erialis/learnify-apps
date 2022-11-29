import './component/header.js';
import './component/landing-page.js';
import './component/about.js';
import './component/footer.js';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';


const nav = document.querySelector("nav")
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

const app = new App({
    dropdownbutton: document.querySelector('.dropdown-button'),
    dropdown: document.querySelector('.dropdown-content'),
    content: document.querySelector('#module'),
    button : document.querySelector('#hamburgerMenu'),
    drawer : document.querySelector('.nav-list'),
});
  
window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
