import { clientServices } from "../service/cliente-service.js";

const inputBuscar = document.querySelector('.inputBuscar');
const divBusquedas = document.getElementById('divBusquedas');

const crearElementos = (nombreProducto,id) =>{
  
  const divHover = document.createElement('div');
  divHover.classList.add('divHover');
  const labelProductoBusqueda = document.createElement('label')
  labelProductoBusqueda.classList.add('labelProductoBusqueda');
  labelProductoBusqueda.textContent = nombreProducto;
  divHover.appendChild(labelProductoBusqueda);
  divBusquedas.appendChild(divHover);
  labelProductoBusqueda.addEventListener('click',()=>{
    window.location.href = `assets/templates/producto__individual.html?id=${id}`;
  });
}

inputBuscar.addEventListener('keyup', (event) => {
    event.preventDefault();
    if(inputBuscar.value.length > 0){
      divBusquedas.classList.remove('busquedaNone');
      divBusquedas.classList.add('busquedaFlex');
    }else{
      divBusquedas.classList.remove('busquedaFlex');
      divBusquedas.classList.add('busquedaNone');
    }

    clientServices.buscarProducto(inputBuscar.value).then((data) => {
        divBusquedas.innerHTML = '';
        data.forEach(({ nombreProducto,id}) => {
          crearElementos(nombreProducto,id);
          // console.log(id);
          // console.log(url);
          // console.log(nombreProducto);
          // console.log('\n\n');
        });
      }).catch((error) => console.log("Ocurrió un error"));
},false);



