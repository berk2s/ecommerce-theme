/**
 * Singleton User State
 * Stores information of user
 */
export var UserFactory = (function() {
    function AuthState() {
        this.userId = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.phoneNumber = null;
    }

    AuthState.prototype.setState = function(userId,
        firstName,
        lastName,
        email,
        phoneNumber) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
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