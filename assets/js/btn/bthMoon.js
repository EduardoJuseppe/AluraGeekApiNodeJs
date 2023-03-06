const imgMoonBlack = document.getElementById("imgMoonBlack");
const header = document.getElementById('header');
const main = document.getElementById('main');
const fondoAzul = document.getElementById('fondoAzul');
const fondoGris = document.getElementById('fondoGris');

const temaOscuro = () => {
    if(localStorage.getItem('temaOscuro') === 'white'){
        const letrasColorNegro = document.querySelectorAll('.letrasColorNegro');
        const inputError = document.querySelector('.input-container');
        const textareaError = document.querySelector('.textarea-container');
        
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
        localStorage.setItem('temaOscuro','black');
        imgMoonBlack.setAttribute('src','../img/luna-creciente.png');
        header.classList.remove('headerClaro');
        header.classList.add('headerOscuro');
        main.classList.remove('mainClaro');
        main.classList.add('mainOscuro');
        fondoAzul.classList.remove('fondoAzul');
        fondoAzul.classList.add('fondoAzulOscuro');
        fondoGris.classList.remove('fondoGris');
        fondoGris.classList.add('fondoGrisOscuro');
        letrasColorNegro.forEach(elemento => {
            elemento.classList.remove('letrasColorNegro');
            elemento.classList.add('letrasColorClaro');
        });
    }else if(localStorage.getItem('temaOscuro') === 'black'){
        const letrasColorNegro = document.querySelectorAll('.letrasColorClaro');
        const inputError = document.querySelector('.input-container');
        const textareaError = document.querySelector('.textarea-container');
        
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
        localStorage.setItem('temaOscuro','white');
        imgMoonBlack.setAttribute('src','../img/creciente.png');
        header.classList.remove('headerOscuro');
        header.classList.add('headerClaro');
        main.classList.remove('mainOscuro');
        main.classList.add('mainClaro');
        fondoAzul.classList.remove('fondoAzulOscuro');
        fondoAzul.classList.add('fondoAzul');
        fondoGris.classList.remove('fondoGrisOscuro');
        fondoGris.classList.add('fondoGris');
        letrasColorNegro.forEach(elemento => {
            elemento.classList.remove('letrasColorClaro');
            elemento.classList.add('letrasColorNegro');
        });
    }
};

const cambiarTema = () =>{
    if(localStorage.getItem('temaOscuro') === 'black'){
        const letrasColorNegro = document.querySelectorAll('.letrasColorNegro');
        const inputError = document.querySelector('.input-container');
        const textareaError = document.querySelector('.textarea-container');
        
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
        imgMoonBlack.setAttribute('src','../img/luna-creciente.png');
        header.classList.remove('headerClaro');
        header.classList.add('headerOscuro');
        main.classList.remove('mainClaro');
        main.classList.add('mainOscuro');
        fondoAzul.classList.remove('fondoAzul');
        fondoAzul.classList.add('fondoAzulOscuro');
        fondoGris.classList.remove('fondoGris');
        fondoGris.classList.add('fondoGrisOscuro');
        letrasColorNegro.forEach(elemento => {
            elemento.classList.remove('letrasColorNegro');
            elemento.classList.add('letrasColorClaro');
        });
    }
};

setTimeout(() => {
    cambiarTema();
}, "300");

imgMoonBlack.addEventListener('click',temaOscuro);