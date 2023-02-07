const btnLogin = document.getElementById('btnLogin');

const redireccionarLogin = () =>{
    window.location.href = "assets/templates/login.html";
};

btnLogin.addEventListener('click',redireccionarLogin);