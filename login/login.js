let logIn = document.getElementById("login")
let logInForm = document.getElementById("form")
let signUp =  document.getElementById("signup")
let signUpForm = document.getElementById("form2")
logIn.addEventListener('click',() =>{

    if(logInForm.style.display === 'none'){
         logInForm.style.display = 'block';
         signUpForm.style.display = 'none';
    }else{
        logInForm.style.display = 'none';
    }
   
})

signUp.addEventListener('click',() => {
    if (signUpForm.style.display === "none") {
        signUpForm.style.display = 'block';
        logInForm.style.display = 'none';
    } else {
        signUpForm.style.display = 'none';
    }
   
})
