/* eslint-disable eol-last */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu_hamburger'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#navigation_drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});