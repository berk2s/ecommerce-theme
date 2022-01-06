const API_URL = 'http://api.rocketcommerce.com.tr/api/v1'

/**
 * Get All Products with given parameters
 * @param {*} page indicates page of results
 * @param {*} size indicates size of items in page
 * @returns object that contains Products
 */
export const getProducts = (page = 0, size = 24) => {
    const MUTATED_URL = `${API_URL}/products?page=${page}&size=${size}`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}

/**
 * Get product by given id
 * @param {*} productId determines product id that will be get
 * @returns Object that obtained from API
 */
export const getProductById = (productId) => {
    const MUTATED_URL = `${API_URL}/products/${productId}`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}

/**
 * Get all categories
 * @returns All categories 
 */
export const getCategories = () => {
    const MUTATED_URL = `${API_URL}/categories`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}

/**
 * Get all currencies
 * @returns All currencies
 */
export const getCurrencies = () => {
    const MUTATED_URL = `${API_URL}/currencies`;

    return fetch(MUTATED_URL, {
        method: "GET"
    })
}