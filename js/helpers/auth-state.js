/**
 * Singleton Auth State
 * Stores information of auth state
 */
export var AuthFactory = (function() {
    function AuthState() {
        this.isLoggedIn = false;
        this.accessToken = null;
        this.refreshToken = null;
        this.scopes = null;
        this.expiresIn = null;
    }

    AuthState.prototype.setState = function(isLoggedIn,
        accessToken,
        _refreshToken,
        scopes,
        expiresIn) {
        this.isLoggedIn = isLoggedIn;
        this.accessToken = accessToken;
        this.refreshToken = _refreshToken;
        this.scopes = scopes;
        this.expiresIn = expiresIn;
    }

    var authInstance;

    return {
        getState: function() {
            if (authInstance == null) {
                authInstance = new AuthState();
            }

            return authInstance;
        }
    }
})()