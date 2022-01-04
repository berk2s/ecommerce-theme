// export function registerFormLoader(){
//     document.querySelector('#registerSection').addEventListener('submit', loadUserRegisterForm);
// }
import { userRegisterFormHandler } from '../pages/login';

export function loadUserRegisterForm(event){
    event.preventDefault();
    console.log('form yüklendi');
    const registerContent = document.getElementById('registerSection');
    
    

    let signUpFormTemplete = `<form class="form-signin my-5 mx-3 p-5 border border-5 rounded">
                            <h2 class="h3 mb-5 fw-bold">Register</h2>
                            <label for="inputName" class="sr-only">Name</label>
                            <input type="text" id="inputName" class="form-control" placeholder="Name"
                                required="" autofocus="">
                            <br/>
                            <label for="inputSurname" class="sr-only">Surname</label>
                            <input type="text" id="inputSurname" class="form-control" placeholder="Surname"
                                required="" autofocus="">
                            <br/>
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                                required="" autofocus="">
                            <br/>
                            <label for="signUpPassword" class="sr-only mt-1">Password</label>
                            <input type="password" id="signUpPassword" class="form-control" placeholder="Password"
                                required="">
                            <label for="confirmPassword" class="sr-only mt-1">Confirm Password</label>
                            <input type="password" id="confirmPassword" class="form-control" placeholder="Password"
                            required="">
                            <br/>
                            <label for="inputPhone" class="sr-only">Phone Number</label>
                            <input type="tel" id="inputPhone" class="form-control" placeholder="Phone"
                                required="" autofocus="">

                            <button class="btn btn-lg btn-primary btn-block mt-5" type="submit">Sign up</button>
                            </form>`;

    registerContent.innerHTML = signUpFormTemplete;
    document.querySelector('#registerSection').removeEventListener('submit', loadUserRegisterForm);
    registerContent.id = 'userRegisterForm';    
    document.querySelector('#userRegisterForm').addEventListener('submit', userRegisterFormHandler);
}