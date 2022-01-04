import { initializeLoginPage, initializeProducts } from './pages';
import { initializeSlider, prepareHeader } from './components';
import { userRegisterFormHandler } from './pages';

import '../theme/app.scss'
import { auth } from './helpers';

/**
 * Loads functions if regarding class is exists
 */
window.onload = async function() {
    try {
        await auth.initializeAuth()
    } catch (err) {

    }

    if (document.querySelector('.js-header-auth-area')) {
        prepareHeader();
    }

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
        userRegisterFormHandler();
    }

    if (document.querySelector('.js-login-form')) {
        initializeLoginPage();
    }
}