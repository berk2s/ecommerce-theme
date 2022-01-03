import { loadUserRegisterForm } from '../components';

export function loginPageFormHandler(){
    document.querySelector('#registerSection').addEventListener('submit', loadUserRegisterForm);
    document.querySelector('.form-signin').addEventListener('submit', userLoginFormHandler);
    // if(document.querySelector('#userRegisterForm'))
    //     document.querySelector('#userRegisterForm').addEventListener('submit', userRegisterFormHandler);
}


function userLoginFormHandler(event){
    event.preventDefault();
    console.log('user login tuşuna basıldı');
}
export function userRegisterFormHandler(event){
    event.preventDefault();
    console.log('form handler register!!!');
}