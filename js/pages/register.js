let signUpForm = document.querySelector('#form-signup');
let confirmPassword = document.querySelector('#confirmPassword');
let signUpPassword = document.querySelector('#signUpPassword');
let inputName = document.querySelector('#inputName');
let inputSurname = document.querySelector('#inputSurname');
let inputEmail = document.querySelector('#inputEmail');
let inputPhone = document.querySelector('#inputPhone');
let isFormValid = false;

export function registerPageInitialize(){
    signUpForm.addEventListener('submit', signUpFormHandler);
    inputName.addEventListener('focusout', nameValidation);
    inputSurname.addEventListener('focusout', surnameValidation);
    inputEmail.addEventListener('focusout', emailValidation);
    signUpPassword.addEventListener('focusout', passwordValidation);
    confirmPassword.addEventListener('focusout', passwordValidation);
    inputPhone = addEventListener('focusout', phoneValidation);
}


export function signUpFormHandler(event){
    event.preventDefault();
    if(isFormValid){
        console.log('form handler');
    }
    else{
        console.log('hata!');
    }
    
}


function nameValidation(event){
    event.stopPropagation();
    let regex = /[0-9]/g;
    if(!regex.test(inputName.value) && inputName.value.length>=3  &&  inputName.value && inputName.value.length<15){
        inputName.classList.add('is-valid');
        inputName.classList.remove('is-invalid');
        isFormValid = true;
    }
    else if(inputName.value){
        inputName.classList.add('is-invalid');
        inputName.classList.remove('is-valid');
    }
}

function surnameValidation(event){
    event.stopPropagation();
    let regex = /[0-9]/g;
    if(!regex.test(inputSurname.value) && inputSurname.value.length>=3  && inputSurname.value && inputSurname.value.length<15){
        inputSurname.classList.add('is-valid');
        inputSurname.classList.remove('is-invalid');
        isFormValid = true;
    }
    else if(inputSurname.value){
        inputSurname.classList.add('is-invalid');
        inputSurname.classList.remove('is-valid');
        isFormValid = false;
    }
}

function emailValidation(event){
    event.stopPropagation();
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(regex.test(inputEmail.value) && inputEmail.value){
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
        isFormValid = true;
    }
    else if(inputEmail.value){
        inputEmail.classList.add('is-invalid');
        inputEmail.classList.remove('is-valid');
        isFormValid = false;
    }
}

function passwordValidation(event){
    event.stopPropagation();
    if((signUpPassword.value === confirmPassword.value) && signUpPassword.value && confirmPassword.value){
        confirmPassword.classList.add('is-valid');
        confirmPassword.classList.remove('is-invalid');
        isFormValid = true;
    }
    else if(signUpPassword.value && confirmPassword.value){
        confirmPassword.classList.add('is-invalid');
        confirmPassword.classList.remove('is-valid');
        isFormValid = false;
    }
}

function phoneValidation(event){
    let inputPhone = document.querySelector('#inputPhone');
    event.stopPropagation();
    let regex = /[0-9]/g;
    let regex2 = /[a-z]/g;
    if(regex.test(inputPhone.value) && !regex2.test(inputPhone.value) && inputPhone.value && inputPhone.value.length >= 10){
        inputPhone.classList.add('is-valid');
        inputPhone.classList.remove('is-invalid');
        isFormValid = true;
    }
    else if(inputPhone.value){
        inputPhone.classList.add('is-invalid');
        inputPhone.classList.remove('is-valid');
        isFormValid = false;
    }
}