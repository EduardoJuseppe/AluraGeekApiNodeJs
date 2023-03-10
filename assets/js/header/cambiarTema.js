const cambiarTema = () =>{
    if(localStorage.getItem('temaOscuro') === 'black'){
        const letrasColorNegro = document.querySelectorAll('.letrasColorNegro');
        const inputError = document.querySelector('.input-container');
        const textareaError = document.querySelector('.textarea-container');
        const main = document.querySelector('.mainClaro');
        const btnLogin = document.getElementById('btnLogin');
        const indicadoresAzul = document.querySelectorAll('.indicadoresAzul');
        const labelProductos = document.querySelectorAll('.labelProductos');
        const fa_arrow_right = document.querySelectorAll('.fa-arrow-right');

        if(inputError.classList.contains('input-container--invalid')){
            inputError.classList.remove('input-container--invalid');
            inputError.classList.add('input-container--invalid2');
        }else if(inputError.classList.contains('input-container--invalid2')){
            inputError.classList.remove('input-container--invalid2');
            inputError.classList.add('input-container--invalid');
        }else if(textareaError.classList.contains('input-container--invalid')){
            textareaError.classList.remove('input-container--invalid');
            textareaError.classList.add('input-container--invalid2');
        }else if(textareaError.classList.contains('input-container--invalid2')){
            textareaError.classList.remove('input-container--invalid2');
            textareaError.classList.add('input-container--invalid');
        }
        
        header.classList.remove('headerClaro');
        header.classList.add('headerOscuro');
        main.classList.remove('mainClaro');
        main.classList.add('mainOscuro');
        fondoAzul.classList.remove('fondoAzul');
        fondoAzul.classList.add('fondoAzulOscuro');
        fondoGris.classList.remove('fondoGris');
        fondoGris.classList.add('fondoGrisOscuro');
        btnLogin.classList.remove('btnLoginAzul');
        btnLogin.classList.add('btnLoginClaro');
        
        letrasColorNegro.forEach(elemento => {
            elemento.classList.remove('letrasColorNegro');
            elemento.classList.add('letrasColorClaro');
        });
        indicadoresAzul.forEach(elemento => {
            elemento.classList.remove('indicadoresAzul');
            elemento.classList.add('indicadoresAmarillo');
        });
        labelProductos.forEach(elemento => {
            elemento.classList.remove('labelProductos');
            elemento.classList.add('labelProductosClaro');
        });
        fa_arrow_right.forEach(elemento => {
            elemento.classList.add('flechaClara');
        });
    }
};

setTimeout(() => {
    cambiarTema();
}, "300");
