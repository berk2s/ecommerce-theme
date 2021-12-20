import { initializeProducts } from './pages';
import { initializeSlider } from './components';

window.onload = function() {
    initializeSlider();
    initializeProducts();
}