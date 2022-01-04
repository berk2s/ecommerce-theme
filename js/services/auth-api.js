import { loggedFetch } from ".";
import { defaultScopes } from "../helpers";

const API_URL = 'http://auth.rocketcommerce.com.tr';

/**
 * Sends login request
 * @param {*} identifier 
 * @param {*} password 
 * @param {*} scopes 
 * @returns instance of fetch
 */
export const login = (identifier, password, scopes = defaultScopes) => {
    if (!identifier || !password) {
        throw new Error("Do not forget arguments");
    }

    const MUTATED_URL = `${API_URL}/login`;

    return fetch(MUTATED_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: identifier,
            password: password,
            scopes: scopes,
        })
    })
}


/**
 * Gets user info 
 * @returns instance of logged fetch
 */
export const userInfo = () => {
    const MUTATED_URL = `${API_URL}/userinfo`;

    return loggedFetch(MUTATED_URL, {
        method: 'GET'
    })
}

/**
 * Sends token request in order to refresh or revoke a token
 * @param {*} params 
 * @returns instance of fetch
 */
export const token = (params) => {
    if (!params) {
        throw new Error("Do not forget arguments.")
    }

    let urlParams = new URLSearchParams(params);

    const MUTATED_URL = `${API_URL}/token?${urlParams}`;

    return fetch(MUTATED_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}

/**
 * Refreshs access token with refresh token
 * @param {*} refreshToken 
 * @returns instance of fetch
 */
export const refreshToken = (refreshToken) => {
    return token({
        client_id: 'frontend',
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        scopes: defaultScopes
    })
}

/**
 * Revokes refresh token
 * @param {*} refreshToken 
 * @returns instance of fetch
 */
export const revokeToken = (refreshToken) => {
    return token({
        client_id: 'frontend',
        grant_type: 'revoke',
        refresh_token: refreshToken,
    })
}