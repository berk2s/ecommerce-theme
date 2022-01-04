import { auth, AuthFactory, UserFactory } from "../helpers";

/**
 * Prepares header for if the User is authenticated
 */
export const prepareHeader = async() => {
    try {
        const authAreaEl = document.querySelector('.js-header-auth-area');

        if (AuthFactory.getState().isLoggedIn) {
            const userInfo = UserFactory.getState();

            authAreaEl.innerHTML = `Hello, ${userInfo.firstName} ${userInfo.lastName} <small><span class="js-logout" style="cursor: pointer">Logout</span></small>`;

            document.querySelector('.js-logout').addEventListener('click', async() => {
                await auth.logout()
                document.location.href = "index.html";
            })
        } else {
            authAreaEl.innerHTML = `<a href="./login.html">
                                        <img src="../assets/header/user_icon.png" style="width: 2rem; height: 2rem;" alt="user icon">
                                    </a>`
        }
    } catch (err) {

    }
}