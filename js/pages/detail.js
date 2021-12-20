import { getProductById } from '../services/api';
import { renderProductDetail } from '../helpers/render-product-details';

export const initializeProductDetail = function(productId) {
    try {
        if (document.querySelector('.js-product-title')) {
            const productDetailsResponse = await getProductById(productId);
            const productDetails = await productDetailsResponse.json();

            renderProductDetail(productDetails);
        }
    } catch (error) {
        alert('Sorry, something went wrong!');
    }
}