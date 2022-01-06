const API_URL = 'http://api.rocketcommerce.com.tr/api/v1/products';

export const getProducts = function(page = 0, size = 24, sort = 'createdAt', order = 'asc', search = '') {
    const MUTATED_URL = `${API_URL}?page=${page}&size=${size}&sort=${sort}&order=${order}&search=${search}`;
    return fetch(MUTATED_URL, {
        method: 'GET'
    })
}

/**
 * 
 * @param {*} productId 
 * @returns 
 */
export const getProductById = function(productId) {
    if (!productId) {
        throw new Error('Do not forget to send product id');
    }
    const MUTATED_URL = `${API_URL}/${productId}`;
    return fetch(/*MUTATED_URL*/API_URL, {
        method: 'GET'
    })
}