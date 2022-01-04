import { auth, generateNotification } from "../helpers";
import { authApi } from "../services";

/**
 * Initialzes login page
 */
export function initializeLoginPage() {
    document.querySelector('.js-login-btn').addEventListener('click', formSubmitHandler)
}


/**
 * Handles form submittion   
 * @returns 
 */
const formSubmitHandler = async(event) => {
    event.preventDefault();

    const loginFormEl = document.querySelector('.js-login-form');
    const identifier = loginFormEl.elements.namedItem("identifier").value;
    const password = loginFormEl.elements.namedItem('password').value;

    const notificationEl = document.querySelector('.js-notification-area');
    notificationEl.innerHTML = '';

    if (identifier.trim() === '' ||
        password.trim() === '' ||
        identifier.trim().length < 3 ||
        password.trim().length < 3) {
        generateNotification(notificationEl,
            "Please input required fields or input valid", "alert-warning")
        return;
    }

    try {
        const loginRequest = await authApi.login(identifier, password);

        if (loginRequest.status !== 200) {
            generateNotification(notificationEl,
                "Invalid credentials, please try again.", "alert-danger")
            return;
        }

        const loginResponse = await loginRequest.json();

        auth.saveAuthState(loginResponse);

        document.location.href = "index.html";

        generateNotification(notificationEl,
            "Successfully logged in, please wait.", "alert-success")
    } catch (e) {
        console.log(e);
        generateNotification(notificationEl,
            "Invalid credentials, please try again.", "alert-danger")
    }
}