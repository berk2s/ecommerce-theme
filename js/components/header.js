import { auth, AuthFactory, UserFactory } from "../helpers";
import { headerDropdownTemplate } from "../helpers/template";

/**
 * Prepares header for if the User is authenticated
 */
export const prepareHeader = async() => {
    try {
        const authAreaEl = document.querySelector('.js-header-auth-area');

        const isLoggedIn = AuthFactory.getState().isLoggedIn;

        if (isLoggedIn) {
            const userInfo = UserFactory.getState();

            authAreaEl.innerHTML = headerDropdownTemplate.format(
                `${userInfo.firstName.charAt(0).toUpperCase()}${userInfo.firstName.slice(1, userInfo.firstName.length)}`,
                `${userInfo.lastName.charAt(0).toUpperCase()}${userInfo.lastName.slice(1, userInfo.lastName.length)}`)

            document.querySelector('.js-logout').addEventListener('click', async(event) => {
                event.preventDefault();
                await auth.logout()
                document.location.href = "index.html";
            });
        } else {
            authAreaEl.innerHTML = `<a href="./login.html">
                                        <img src="../assets/header/user_icon.png" style="width: 2rem; height: 2rem;" alt="user icon">
                                    </a>`
        }
    } catch (err) {

    }
}