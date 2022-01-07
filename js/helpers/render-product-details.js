/**
 * Renders product details to element     
 * @param {*} details that contains info about detail
 * 
 */
export const renderProductDetail = (details) => {
    const { id = "", productName = "", description = "", image = "" } = details;
    let prices = [
        {
            price: "$351"       
        }
    ]

    if (typeof details.price !== 'undefined') {
        price = details.price;
    }

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

    salePriceEl.innerHTML = '$' + prices[0].price;
    productTitleEl.innerHTML = productName;
    productDescriptionEl.innerHTML = description;
    productImageEl.src = image;
}