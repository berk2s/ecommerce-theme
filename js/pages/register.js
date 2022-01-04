export function loginPageFormHandler(){
    document.querySelector('#registerSection').addEventListener('submit', loadUserRegisterForm);
}

export function userRegisterFormHandler(event){
    event.preventDefault();
    console.log('form handler register!!!');
    let registerForm = document.querySelector('#userRegisterForm');
    console.log(registerForm.inputName.value);
    console.log(registerForm.inputSurname.value);
    console.log(registerForm.inputEmail.value);
    console.log(registerForm.signUpPassword.value);
    console.log(registerForm.confirmPassword.value);
    console.log(registerForm.inputPhone.value);

}