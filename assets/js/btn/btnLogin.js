const btnLogin = document.getElementById('btnLogin');

const validarAdmin = () =>{
    const btnLogin2 = document.getElementById('btnLogin');
    if (localStorage){
        if(localStorage.getItem('admin') !== undefined && localStorage.getItem('admin'))
        btnLogin2.textContent = 'Menu';
        else      
        btnLogin2.textContent = 'Login'; 
    }
};

const redireccionarLogin = () =>{
    if(btnLogin.textContent == 'Login')
    window.location.href = "assets/templates/login.html";
    else
    window.location.href = "assets/templates/productos.html";
};

validarAdmin();
btnLogin.addEventListener('click',redireccionarLogin);