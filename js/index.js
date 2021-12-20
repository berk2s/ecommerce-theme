import { initializeProducts } from './pages';
import { initializeSlider } from './components';

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