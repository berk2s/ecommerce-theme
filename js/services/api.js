const API_URL = 'http://api.rocketcommerce.com.tr/api/v1'

/**
 * @deprecated
 */
export const getProducts = function(page = 0, size = 24, sort = 'createdAt', order = 'asc', search = '') {
    const MUTATED_URL = `${API_URL}?page=${page}&size=${size}&sort=${sort}&order=${order}&search=${search}`;
    return fetch(MUTATED_URL, {
        method: 'GET'
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