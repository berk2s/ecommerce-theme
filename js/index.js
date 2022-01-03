import { initializeProducts } from './pages';
import { initializeSlider } from './components';
import { loginPageFormHandler } from './pages';
import { Collapse } from 'bootstrap';

import '../theme/app.scss'

window.onload = function() {
    if (document.querySelector('.js-slider-container')) {
        initializeSlider();
    }

    if (document.querySelector('.js-featured-product-list')) {
        initializeProducts();
    }

    if (document.querySelector('.js-product-title')) {
        initializeProductDetail();
    }

    if (document.querySelector('#registerSection')) {
        loginPageFormHandler();
    }
}

