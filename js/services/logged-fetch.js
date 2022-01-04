import { AuthFactory } from "../helpers"

/**
 * Adds authorization header to fetch instance
 * @param {*} url 
 * @param {*} others 
 * @returns logged fetch client
 */
export const loggedFetch = (url, others) => {
    const accessToken = AuthFactory.getState().accessToken;

    if ('headers' in others) {
        others.headers = {
            ...others.headers,
            Authorization: `Bearer ${accessToken}`
        }
    } else {
        others = {
            ...others,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    }

    return fetch(url, {
        ...others
    })
}