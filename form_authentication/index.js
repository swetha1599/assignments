
let passwordStoredDB = ' '
let signupValid = document.getElementById('sign-up-valid')
let loginValid = document.getElementById('login-valid')
let loginInvalid = document.getElementById('login-invalid')
const signUp = () =>{
let inputPassword = document.getElementById('sign-up-input').value
passwordStoredDB = inputPassword
signupValid.style.display =' block'
}

const login = () =>{
    let inputPassword = document.getElementById('login-input').value
    if(inputPassword === passwordStoredDB){
        loginValid.style.display = 'block'
        
    }else{
loginInvalid.style.display = 'block'
}

}

