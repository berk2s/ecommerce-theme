import { storage, AuthFactory, UserFactory } from ".";
import { authApi } from "../services";


/**
 * Initializes auth during page is loading
 */
export const initializeAuth = async() => {
    try {
        const isObtainSucceed = await obtainAccessToken();

        if (!isObtainSucceed) {
            return;
        }

        const userInfoRequest = await authApi.userInfo();
        const userInfoResponse = await userInfoRequest.json();

        const { userId, firstName, lastName, email, phoneNumber } = userInfoResponse;

        UserFactory.getState().setState(userId, firstName,
            lastName, email, phoneNumber);
    } catch (err) {
        console.log(err);
    }
}

/**
 * Obtains new access token by stored refreh token
 * @returns 
 */
export const obtainAccessToken = async() => {
    try {
        const refreshToken = storage.getItem('refreshToken');

        if (refreshToken.length !== 48) {
            throw new Error('Invalid refresh token.')
        }

        const tokenRequest = await authApi.refreshToken(refreshToken);
        const tokenResponse = await tokenRequest.json();

        saveAuthState(tokenResponse);

        return true;
    } catch (err) {
        AuthFactory.getState().setState(false, null, null, null, null);
        return false;
    }
}


/**
 * Helper function in order to save all auth state into local storage
 * @param {*} tokens 
 */
export const saveAuthState = (tokens) => {
    const { access_token, refresh_token, scopes, expires_in } = tokens;

    storage.saveItem('accessToken', access_token);
    storage.saveItem('refreshToken', refresh_token);
    storage.saveItem('scopes', scopes);
    storage.saveItem('expiresIn', expires_in);

    const authState = AuthFactory.getState()
    authState.setState(true, access_token, refresh_token, expires_in, scopes)
}

/**
 * Clears all related things from client
 */
export const logout = async() => {
    await authApi.revokeToken(AuthFactory.getState().refreshToken);
    AuthFactory.getState().setState(false, null, null, null);
    storage.clearAll();
}