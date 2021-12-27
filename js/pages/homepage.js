import { getProducts } from '../services/api';
import { renderProducts } from '../helpers';

export const initializeProducts = async function() {
    try {
        const latestProductsResponse = await getProducts(0, 6);
        const otherProductsResponse = await getProducts(0, 18);
        const latestProducts = await latestProductsResponse.json();
        const otherProducts = await otherProductsResponse.json();

        renderProducts('.js-new-products-list', latestProducts.content, 'col-xs-12 col-sm-6 col-md-4 col-lg-2');
        renderProducts('.js-featured-product-list', otherProducts.content, 'col-xs-12 col-sm-6 col-md-4 col-lg-2')
    } catch (error) {
        console.log(error);
        alert("Sorry, something went wrong!");
    }
}