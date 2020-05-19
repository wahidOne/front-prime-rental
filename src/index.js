import './css/swiper.css';
import './scss/main.scss';
import loadHomePage from './js/pages/home/home.page';
import { detailPage } from './js/pages/detail/detail.page';

import image from './img/bg/bg-login.png';
import bgRegistrasi from './img/bg/bg-registrasi.png';
import { loginPage } from './js/pages/auth/login.page';
import { registrasiPage } from './js/pages/auth/registrasi.page';

document.addEventListener('DOMContentLoaded', () => {
	loadHomePage();
	detailPage();
	loginPage(image);
	registrasiPage(bgRegistrasi);
});
