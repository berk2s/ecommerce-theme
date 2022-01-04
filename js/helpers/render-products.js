import { itemCardTemplate } from "./template";

/**
 * Renders product to DOM element
 * @param {*} renderEl element that items will be rendered into it
 * @param {*} products items that will be rendered
 * @param {*} wrapperClass class name that can be set to render element
 */
export const renderProducts = function(renderEl, products, wrapperClass = null) {
    const targetEl = document.querySelector(renderEl);

    if (!renderEl || !targetEl) {
        throw new Error("Invalid target element id");
    }

    if (!Array.isArray(products)) {
        throw new Error("Invalid type of products");
    }

    products.forEach(product => {
        const { id, productImages, productName, listingPrice, salePrice } = product;

        const card = itemCardTemplate.format(productImages[0],
            productName, listingPrice, salePrice);

        const wrapperEl = document.createElement('div');
        wrapperEl.setAttribute('data-item-id', id);
        wrapperEl.classList.add('item-card');
        wrapperEl.innerHTML = card;


        if (wrapperClass && wrapperClass.trim().length > 0) {
            const destructuedClasses = wrapperClass.split(' ');

            destructuedClasses.forEach(clazz => {
                wrapperEl.classList.add(clazz);
            })
        }

        targetEl.appendChild(wrapperEl);
    });
}