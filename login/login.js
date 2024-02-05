
let logIns = document.getElementById("login")
let logInForm = document.getElementById("form")
let signUp =  document.getElementById("signup")
let signUpForm = document.getElementById("form2")
logIns.addEventListener('click',() =>{
    if(logInForm.style.display === 'none'){
         logInForm.style.display = 'block';
         signUpForm.style.display = 'none';
    }else{
        logInForm.style.display = 'none';
    }
   
});

 

 

signUp.addEventListener('click',() => {
    if (signUpForm.style.display === "none") {
        signUpForm.style.display = 'block';
        logInForm.style.display = 'none';
    } else {
        signUpForm.style.display = 'none';
    }
   
});

  

 async function logIn() {
     const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try{
        const response = await fetch("https://dummyjson.com/auth/login",{
            method : "POST",
            headers : {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({username, password}),
        
        });
        console.log(response)
        if (response.ok) {
            const data = await response.json();
              console.log(data)
            const token = data.token;
            localStorage.setItem("token:",token)

            window.location.replace("../homePage/figma.html")
        } else {
            alert("Login failed. please check your credentials ") 
        }
    }catch (error){
        // let displayError = document.getElementById("error").style.display = "block";
        console.error("ERROR DURING LOGIN :",error);
        alert("An error as occurred.please try again later")
    }
    
    // const loginApi = "https://dummyjson.com/auth/login";

    //   // Make a POST request to the dummy login API
    //   fetch(loginApi, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //         const token = data.token;
    //         localStorage.setItem("token:",token)
    //         window.location.replace("../homePage/figma.html")
           
    //     } else {
    //         alert("Login failed. please check your credentials ") 
    //         throw new Error('Login failed');
    //     }
    //     return response.json();
    // })
    //   .then(data => {
    //     // Assuming the API returns some data on successful login
    //     console.log('Login successful:', data);
      
    //   })
    //   .catch(error => {
    //     console.error('Login error:', error);
    //     // let displayError = document.getElementById("error").style.display = "block";
    //     alert(" An error as occurred.please try again later")

    // //    setTimeout(displayError,3000)
    //   });
}

