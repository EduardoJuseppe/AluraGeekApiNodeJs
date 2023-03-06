import { clientServices } from "../service/cliente-service.js";

const verTodoStarWars = document.getElementById('verTodoStarWars');
const verTodoConsolas = document.getElementById('verTodoConsolas');
const verTodoDiversos = document.getElementById('verTodoDiversos');


const mostrarStarWars = () => {
    if(verTodoStarWars.textContent == 'Ver todo'){
        verTodoStarWars.textContent = 'Ver menos';
        const flecha = document.getElementById('flechaStarWars');
        flecha.classList.remove('fa-arrow-right');
        flecha.classList.add('fa-arrow-left');
        const starwars = document.getElementById('starwars');
        starwars.innerHTML = '';
        clientServices.ListaProductos().then((data) => {
            data.forEach(({ url,categoria,nombre,precio,id }) => {
            const card = crearCard(url,nombre,precio,id);
            const regex = new RegExp(categoria, "gi");
                let compararStar = regex.test('Star Wars');
                if(!compararStar){
                    compararStar = regex.test('StarWars');
                }  
                if(compararStar){
                    starwars.appendChild(card);
                }
            });
        }).catch((error) => alert("Ocurrió un error"));
    }else{
        verTodoStarWars.textContent = 'Ver todo';
        clientServices.ListaProductos().then((data) => {
        let contstarwars = 0;
        const starwars = document.getElementById('starwars');
        starwars.innerHTML = '';
        const flecha = document.getElementById('flechaStarWars');
        flecha.classList.remove('fa-arrow-left');
        flecha.classList.add('fa-arrow-right');
        data.forEach(({ url,categoria,nombre,precio,id }) => {
            let numeroCards = 0;    
            if(window.screen.width < 768)
            numeroCards = 2;
            else if(window.screen.width < 1440 && window.screen.width >= 768)
            numeroCards = 4;
            else if(window.screen.width >= 1440)
            numeroCards = 6;
            const card = crearCard(url,nombre,precio,id);
            const regex = new RegExp(categoria, "gi");
                let compararStar = regex.test('Star Wars');
                if(!compararStar){
                    compararStar = regex.test('StarWars');
                }
                if(compararStar && contstarwars <numeroCards){
                    starwars.appendChild(card);
                    contstarwars++;
                }               
            });
        }).catch((error) => alert("Ocurrió un error"));
    }
    
};

const mostrarConsolas = () => {
    if(verTodoConsolas.textContent == 'Ver todo'){
        verTodoConsolas.textContent = 'Ver menos'
        const flecha = document.getElementById('flechaConsolas');
        flecha.classList.remove('fa-arrow-right');
        flecha.classList.add('fa-arrow-left');
        const consolas = document.getElementById('consolas');
        consolas.innerHTML = '';
        clientServices.ListaProductos().then((data) => {
            data.forEach(({ url,categoria,nombre,precio,id }) => {
            const card = crearCard(url,nombre,precio,id);
            const regex = new RegExp(categoria, "gi");
                let compararConsolas = regex.test('Consolas');
                if(compararConsolas){
                    consolas.appendChild(card);
                }
            });
        }).catch((error) => alert("Ocurrió un error"));
    }else{
        verTodoConsolas.textContent = 'Ver todo'
        const flecha = document.getElementById('flechaConsolas');
        flecha.classList.remove('fa-arrow-left');
        flecha.classList.add('fa-arrow-right');
        const consolas = document.getElementById('consolas');
        consolas.innerHTML = '';
        clientServices.ListaProductos().then((data) => {
            let numeroCards = 0;    
            if(window.screen.width < 768)
            numeroCards = 2;
            else if(window.screen.width < 1440 && window.screen.width >= 768)
            numeroCards = 4;
            else if(window.screen.width >= 1440)
            numeroCards = 6;
            let contconsolas = 0;
            const consolas = document.getElementById('consolas');
        
            data.forEach(({ url,categoria,nombre,precio,id }) => {
                const card = crearCard(url,nombre,precio,id);
                const regex = new RegExp(categoria, "gi");
                let compararConsolas = regex.test('Consolas');
                if(compararConsolas && contconsolas <numeroCards){
                    consolas.appendChild(card);
                    contconsolas++;
                }              
            });
        
        }).catch((error) => alert("Ocurrió un error"));
    }
    
};

const mostrarDiversos = () => {
    if(verTodoDiversos.textContent == 'Ver todo'){
        verTodoDiversos.textContent = 'Ver menos'
        const flecha = document.getElementById('flechaDiversos');
        flecha.classList.remove('fa-arrow-right');
        flecha.classList.add('fa-arrow-left');
        const diversos = document.getElementById('diversos');
        diversos.innerHTML = '';
        clientServices.ListaProductos().then((data) => {
            data.forEach(({ url,categoria,nombre,precio,id }) => {
            const card = crearCard(url,nombre,precio,id);
            const regex = new RegExp(categoria, "gi");
                let compararDiversos = regex.test('Diversos');
                if(compararDiversos){
                    diversos.appendChild(card);
                }
            });
        }).catch((error) => alert("Ocurrió un error"));
    }else{
        verTodoDiversos.textContent = 'Ver todo'
        const flecha = document.getElementById('flechaDiversos');
        flecha.classList.remove('fa-arrow-left');
        flecha.classList.add('fa-arrow-right');
        const diversos = document.getElementById('diversos');
        diversos.innerHTML = '';
        clientServices.ListaProductos().then((data) => {
            let numeroCards = 0;    
            if(window.screen.width < 768)
            numeroCards = 2;
            else if(window.screen.width < 1440 && window.screen.width >= 768)
            numeroCards = 4;
            else if(window.screen.width >= 1440)
            numeroCards = 6;
            let contDiversos = 0;
            const diversos = document.getElementById('diversos');
        
            data.forEach(({ url,categoria,nombre,precio,id }) => {
                const regex = new RegExp(categoria, "gi");
                let compararDiversos = regex.test('Diversos');
                if(compararDiversos && contDiversos <numeroCards){
                    const card = crearCard(url,nombre,precio,id);
                    diversos.appendChild(card);
                    contDiversos++;
                }              
            });
        
        }).catch((error) => alert("Ocurrió un error"));
    }
};

const crearCard = (url,nombre,precio,id) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const divImg = document.createElement('div');
    divImg.classList.add('divImg');
    card.appendChild(divImg);
    const imgCard = document.createElement('img');
    imgCard.classList.add('imgCard');
    imgCard.setAttribute('src',`${url}`);
    divImg.appendChild(imgCard);
    const divContenido = document.createElement('div');
    divContenido.classList.add('divContenido');
    card.appendChild(divContenido);
    const tituloContenido = document.createElement('h3');
    tituloContenido.textContent = nombre;
    divContenido.appendChild(tituloContenido);
    const valor = document.createElement('label');
    valor.textContent = `$ ${precio}`;
    divContenido.appendChild(valor);
    const verProducto = document.createElement('button');
    verProducto.textContent = "Ver producto";
    verProducto.classList.add('labelVerProducto');
    
    divContenido.appendChild(verProducto);
    verProducto.addEventListener('click',()=>{
        window.location.href = `assets/templates/producto__individual.html?id=${id}`;
    });
    if(localStorage.getItem('temaOscuro')=='black'){
        tituloContenido.classList.add('letrasColorClaro');
        valor.classList.add('letrasColorClaro');
        verProducto.classList.add('letrasColorClaro');
        verProducto.classList.add('indicadoresAmarillo');
    }else{
        tituloContenido.classList.add('letrasColorNegro');
        valor.classList.add('letrasColorNegro');
        verProducto.classList.add('letrasColorNegro');
        verProducto.classList.add('indicadoresAzul');
    }
    
    // const modificar = document.createElement('a');
    // modificar.setAttribute('href',`assets/templates/producto__individual.html?id=${id}`);
    // modificar.appendChild(verProducto);
    // divContenido.appendChild(modificar);
    return card;

};


window.addEventListener('load', function() {
        clientServices.ListaProductos().then((data) => { 
            let numeroCards = 0;    
            if(window.screen.width < 768)
            numeroCards = 2;
            else if(window.screen.width < 1440 && window.screen.width >= 768)
            numeroCards = 4;
            else if(window.screen.width >= 1440)
            numeroCards = 6;
            let contstarwars = 0;
            let contconsolas = 0;
            let contdiversos = 0;
            const starwars = document.getElementById('starwars');
            const consolas = document.getElementById('consolas');
            const diversos = document.getElementById('diversos');
        
            data.forEach(({ url,categoria,nombre,precio,id }) => {
                const card = crearCard(url,nombre,precio,id);
                const regex = new RegExp(categoria, "gi");
                let compararStar = regex.test('Star Wars');
                if(!compararStar){
                    compararStar = regex.test('StarWars');
                }
                let compararConsolas = regex.test('Consolas');
                
                if(compararStar && contstarwars <numeroCards){
                    starwars.appendChild(card);
                    contstarwars++;
                }
                if(compararConsolas && contconsolas <numeroCards){
                    consolas.appendChild(card);
                    contconsolas++;
                }
                if(!compararStar && !compararConsolas && contdiversos <numeroCards){
                    diversos.appendChild(card);
                    contdiversos++;
                } 
            });
        
        }).catch((error) => alert("Ocurrió un error"));
});



verTodoStarWars.addEventListener('click',mostrarStarWars);
verTodoConsolas.addEventListener('click',mostrarConsolas);
verTodoDiversos.addEventListener('click',mostrarDiversos);


