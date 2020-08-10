import menu from './menu.json';
import menuTemplate from './menu-items.hbs';

const menuDraft = { menu: menu };

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  body: document.querySelector('body'),
  menuList: document.querySelector('ul.js-menu'),
  themeCheckbox: document.querySelector('#theme-switch-control')
};
const setTheme = () => {
    if (localStorage.getItem('theme') === theme.DARK) {
        refs.themeCheckbox.checked = true;
        refs.body.classList.add(theme.DARK);
    }
};

const themeChange = () => {
    if (refs.themeCheckbox.checked) {
        refs.body.classList.remove(theme.LIGHT);
        refs.body.classList.add(theme.DARK);
        localStorage.setItem('theme', theme.DARK);
    } else {
        refs.body.classList.remove(theme.DARK);
        refs.body.classList.add(theme.LIGHT);
        localStorage.setItem('theme', theme.LIGHT);
    }
};

setTheme();
refs.themeCheckbox.addEventListener('change', themeChange);
refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(menuDraft))
