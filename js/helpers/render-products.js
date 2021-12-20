import { itemCardTemplate } from "./template";

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
            wrapperEl.classList.add(wrapperClass);
        }

        targetEl.appendChild(wrapperEl);
    });
}