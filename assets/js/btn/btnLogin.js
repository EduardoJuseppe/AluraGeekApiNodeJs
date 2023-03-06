const btnLogin = document.getElementById('btnLogin');

const validarLocalStorage = () =>{
    const btnLogin2 = document.getElementById('btnLogin');

    if(localStorage.getItem('admin') !== undefined && localStorage.getItem('admin'))
        if(screen.width <= 375)
        btnLogin2.textContent = 'Menu';
        else
        btnLogin2.textContent = 'Menu Administrador';
    else      
        btnLogin2.textContent = 'Login';
            
    if(localStorage.getItem('temaOscuro') === null)
        localStorage.setItem("temaOscuro",'white');
    
};

const redireccionarLogin = () =>{
    if(btnLogin.textContent == 'Login')
    window.location.href = "assets/templates/login.html";
    else
    window.location.href = "assets/templates/productos.html";
};

validarLocalStorage();
btnLogin.addEventListener('click',redireccionarLogin);