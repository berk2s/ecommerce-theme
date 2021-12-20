export const renderProductDetail = function(details) {
    const { productName, description, salePrice, productImages } = productDetails;

    const salePriceEl = document.querySelector('.js-sale-price');
    const productTitleEl = document.querySelector('.js-product-title');
    const productDescriptionEl = document.querySelector('.js-product-description');
    const productImageEl = document.querySelector('.js-product-img');

    if (!salePriceEl ||
        !productTitleEl ||
        !productDescriptionEl ||
        !productImageEl) {
        throw new Error("Invalid elements");
    }

    salePriceEl.innerHTML = '$' + salePrice;
    productTitleEl.innerHTML = productName;
    productDescriptionEl.innerHTML = description;
    productImageEl.src = productImages[0];
}