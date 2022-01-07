import { getProductById } from "../services/api";
import { renderProductDetail } from "../helpers/render-product-details";

/**
 * Initializes product detail pages with
 * product id that is given in the URL
 */
export const initializeProductDetail = async function() {
    try {
        if (document.querySelector(".js-product-title")) {
            const path = document.location.pathname;

            if (!path ||
                path.trim() === '' ||
                path.split('/')[1].trim() !== 'details') {
              //  window.location.href = "/";
                throw new Error("Invalid url pattern!");
            }

            const productId = path.split('/')[2].trim();

            const productDetailsResponse = await getProductById(productId);
            const productDetails = await productDetailsResponse.json();

            renderProductDetail(productDetails);
        }
    } catch (error) {
     alert("Sorry, something went wrong!");
    }
};