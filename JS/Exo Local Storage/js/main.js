const success = document.getElementById("success");
const login = document.getElementById("login");
const signin = document.getElementById("signin");
const passCo = document.getElementById("passwordCo");
const passInsc = document.getElementById("passwordInsc");
const submitCo = document.getElementById("submitCo");
const submitInsc = document.getElementById("submitInsc");
const form = document.getElementsByTagName("form");


submitInsc.addEventListener("click", function(button){
    button.preventDefault();
    const inscPseudo = localStorage.setItem("pseudo", signin.value);
    const inscPass = localStorage.setItem("password", passInsc.value);
    console.log(signin.value.length);
    if (signin.value.length < 4) {
        alert("le nom de compte n'est pas valide");
        signin.value = "";
    } else if (passInsc.value.length < 5) {
        alert("Le mot de passe n'est pas valide");
        passInsc.value ="0";
    }
})



submitCo.addEventListener("click", button => {
    button.preventDefault();
    const coPseudo = localStorage.setItem("coPseudo", login.value);
    const coPass = localStorage.setItem("coPassword", passCo.value);
    
    if (signin.value !== login.value) {
        alert("Le nom de compte n'existe pas.");
        login.value = "";

    } else if (passCo.value !== passInsc.value) {
        alert("Mot de passe incorrect");

    } else {
        success.style.display = "block";
        form.style.display ="none";
        localStorage.clear();
    }
    
});



