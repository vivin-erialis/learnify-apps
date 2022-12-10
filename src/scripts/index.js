/* eslint-disable import/extensions */
import './component/header.js';
import './component/landing-page.js';
import './component/about.js';
import './component/footer.js';
import './component/search-bar.js';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

const app = new App({
  dropdownbutton: document.querySelector('.dropdown-button'),
  dropdown: document.querySelector('.dropdown-content'),
  content: document.querySelector('main'),
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('.nav-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
