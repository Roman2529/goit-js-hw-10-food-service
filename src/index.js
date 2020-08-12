import './styles.css';
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
        removeClass(theme.LIGHT);
        addClass(theme.DARK);
        sendData('theme', theme.DARK);
    } else {
        removeClass(theme.DARK);
        addClass(theme.LIGHT);
        sendData('theme', theme.LIGHT);
    }
};
let sendData = (key, data) => {
    localStorage.setItem(key, data);
};
let addClass = (key, data) => {
    refs.body.classList.add(key, data);
};
let removeClass = (key, data) => {
    refs.body.classList.remove(key, data);
};  

setTheme();
refs.themeCheckbox.addEventListener('change', themeChange);
refs.menuList.insertAdjacentHTML('beforeend', menuTemplate(menuDraft))


