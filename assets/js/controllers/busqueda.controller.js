import { clientServices } from "../service/cliente-service.js";

const inputBuscar = document.querySelector('.inputBuscar');
const divBusquedas = document.getElementById('divBusquedas');
const divOscuro = document.querySelector('.divOscuro');

const crearElementos = (nombreProducto,id) =>{
  
  const divHover = document.createElement('div');
  divHover.classList.add('divHover');
  const labelProductoBusqueda = document.createElement('label')
  labelProductoBusqueda.classList.add('labelProductoBusqueda');
  labelProductoBusqueda.textContent = nombreProducto;
  divHover.appendChild(labelProductoBusqueda);
  divBusquedas.appendChild(divHover);
  if(inputBuscar.dataset.tipo == 'templates'){
    divHover.addEventListener('click',()=>{
      window.location.href = `./producto__individual.html?id=${id}`;
    });
  }else{
    divHover.addEventListener('click',()=>{
      window.location.href = `assets/templates/producto__individual.html?id=${id}`;
    });
  }
  
}

export const validarBusqueda = (textoBusqueda) => {
  const regxs = {
      "restricciones": /^\s|[A-Z]|[\á\é\í\ó\ú]|[0-9]|\s$/,
  }
  if (regxs.restricciones.test(textoBusqueda)) 
      return true;
  else
      return false;
}

inputBuscar.addEventListener('keyup', (event) => {
    event.preventDefault();
    const divOscuro = document.querySelector('.divOscuro');
    let textoBusqueda = inputBuscar.value.trim();
    textoBusqueda = textoBusqueda.toLowerCase();
    
    if(!validarBusqueda(textoBusqueda) && textoBusqueda != '' && textoBusqueda.length > 0){
      clientServices.buscarProducto(textoBusqueda).then((data) => {
        if(data.length>0){
          divBusquedas.classList.remove('busquedaNone');
          divBusquedas.classList.add('busquedaFlex');
          divOscuro.classList.add('oscuroIndex');
          divBusquedas.innerHTML = '';
          data.forEach(({nombre,id}) => {
            crearElementos(nombre,id);
          });
        }else{
          divBusquedas.innerHTML = '';
          divBusquedas.classList.remove('busquedaFlex');
          divBusquedas.classList.add('busquedaNone');
        }
        
      }).catch((error) => console.log("Ocurrió un error"));
    }else{
      divBusquedas.innerHTML = '';
      divBusquedas.classList.remove('busquedaFlex');
      divBusquedas.classList.add('busquedaNone');
      divOscuro.classList.remove('oscuroIndex');
    }
});

const ocultarBusqueda = () =>{
  divBusquedas.classList.remove('busquedaFlex');
  divBusquedas.classList.add('busquedaNone');
  divOscuro.classList.remove('oscuroIndex');
};

const mostrarBusqueda = (event) => {
  event.preventDefault();
  const divOscuro = document.querySelector('.divOscuro');
  let textoBusqueda = inputBuscar.value.trim();
  textoBusqueda = textoBusqueda.toLowerCase();

  if(!validarBusqueda(textoBusqueda) && textoBusqueda != '' && textoBusqueda.length > 0){
    clientServices.buscarProducto(textoBusqueda).then((data) => {
      if(data.length>0){
        divBusquedas.classList.remove('busquedaNone');
        divBusquedas.classList.add('busquedaFlex');
        divOscuro.classList.add('oscuroIndex');
        divBusquedas.innerHTML = '';
        data.forEach(({nombre,id}) => {
          crearElementos(nombre,id);
        });
      }else{
        divBusquedas.innerHTML = '';
        divBusquedas.classList.remove('busquedaFlex');
        divBusquedas.classList.add('busquedaNone');
      }
      
    }).catch((error) => console.log("Ocurrió un error"));
  }else{
    divBusquedas.innerHTML = '';
    divBusquedas.classList.remove('busquedaFlex');
    divBusquedas.classList.add('busquedaNone');
    divOscuro.classList.remove('oscuroIndex');
  }
};

inputBuscar.addEventListener('click',mostrarBusqueda);
divOscuro.addEventListener('click',ocultarBusqueda);



