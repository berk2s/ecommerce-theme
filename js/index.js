import { initializeProducts } from './pages';
import { initializeSlider } from './components';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Collapse } from 'bootstrap';
//import 'bootstrap/js/dist/dropdown';

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
}