import { initializeLoginPage, initializeProducts, initializeProductDetail } from './pages';
import { initializeSlider, prepareHeader } from './components';
import { registerPageInitialize } from './pages';
import { Collapse, Dropdown } from 'bootstrap';
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

    if (document.querySelectorAll('.js-details-page')) {
        initializeProductDetail();
    }

    if (document.querySelector('#form-signup')) {
        registerPageInitialize();
    }

    if (document.querySelector('.js-login-form')) {
        initializeLoginPage();
    }
}