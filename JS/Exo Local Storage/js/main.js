const success = document.getElementById("success");
// const submit = document.body.getElementsByTagName("button");

const login = document.getElementById("login");
const signin = document.getElementById("signin");
const passCo = document.getElementById("passwordCo");
const passInsc = document.getElementById("passwordInsc");
const submitCo = document.getElementById("submitCo");
const submitInsc = document.getElementById("submitInsc");

submitCo.addEventListener("click", button => {
    button.preventDefault();
    const pseudo = localStorage.setItem("pseudo", login.value);
    const coPass = localStorage.setItem("password", passCo.value);
});

submitInsc.addEventListener("click", function(button){
    button.preventDefault();
})



