import { clientServices } from "../service/cliente-service.js";
let productoFiltrado = [];

const crearCard = (url,nombreProducto,precio,id) =>{
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
  tituloContenido.textContent = nombreProducto;
  divContenido.appendChild(tituloContenido);
  const valor = document.createElement('label');
  valor.textContent = `$ ${precio}`;
  divContenido.appendChild(valor);
  const verProducto = document.createElement('button');
  verProducto.textContent = "Ver producto";
  verProducto.classList.add('labelVerProducto');
  divContenido.appendChild(verProducto);
  verProducto.addEventListener('click',()=>{
      window.location.href = `./producto__individual.html?id=${id}`;
  });
  // const modificar = document.createElement('a');
  // modificar.setAttribute('href',`assets/templates/producto__individual.html?id=${id}`);
  // modificar.appendChild(verProducto);
  // divContenido.appendChild(modificar);
  return card;

};

const randomProductosSimilares = (productoFiltrado) =>{
  productoFiltrado.sort(()=> Math.random() - 0.5);
  let numeroCards = 0;    
  if(window.screen.width < 768)
      numeroCards = 4;
  else if(window.screen.width < 1440 && window.screen.width >= 768)
      numeroCards = 4;
  else if(window.screen.width >= 1440)
      numeroCards = 6;
  // console.log(numeroCards);

  const main = document.querySelector('.main');
  const containerProductos = document.createElement('div')
  containerProductos.setAttribute('id','containerProductos');
  main.appendChild(containerProductos);
  const labelProductos = document.createElement('label')
  labelProductos.setAttribute('id','labelProductos');
  labelProductos.textContent = "Productos Similares";
  containerProductos.appendChild(labelProductos);
  const divCards = document.createElement('div');
  divCards.classList.add('divCards');
  containerProductos.appendChild(divCards);
  // console.log(containerProductos);
  for(let x=0;x<numeroCards;x++){
    if(productoFiltrado[x].url != undefined && productoFiltrado[x].url != null){
      // console.log(productoFiltrado[x].url);
      const card = crearCard(productoFiltrado[x].url,productoFiltrado[x].nombre,productoFiltrado[x].precio,productoFiltrado[x].id);
      divCards.appendChild(card);
    }
    else{
      console.log('error undefined');
    }
    
  }
  
   
  
}

const productoSimilares = (categoriaFiltrada,idEncontrada) =>{
    // console.log("categoria a filtrar "+categoria);
    clientServices.ListaProductos().then((data) => { 
    data.forEach(({ url,categoria,nombre,precio,id }) => {
      const nuevaCard = new Object();
        if(categoria === categoriaFiltrada && id != idEncontrada){        
          nuevaCard.url = url;
          nuevaCard.nombre = nombre;
          nuevaCard.precio = precio;
          nuevaCard.id = id;
          // console.log(nuevaCard);
          productoFiltrado.push(nuevaCard);
        }else{
          nuevaCard.url = 'algo';
          nuevaCard.nombre = 'algo';
          nuevaCard.precio = 'algo';
          nuevaCard.id = 1;
        }
      });
      // for(let x=0; x<productoFiltrado.length ; x++){
      //   console.log(productoFiltrado[x].url);
      //   console.log(productoFiltrado[x].categoria);
      //   console.log(productoFiltrado[x].nombre);
      //   console.log(productoFiltrado[x].id);
      //   console.log("\n\n\n");
      // }
      randomProductosSimilares(productoFiltrado);

    })
    .catch((error) => console.log());
    
};

const obtenerInformacion = async () => {
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "/screens/error.html";
    }
  
    let url;
    let categoria;
    let nombreProducto;
    let precio;
    let descripcion;
  
    try {
      const productos = await clientServices.detalleCliente(id);
      
      if (productos[0].url && productos[0].categoria && productos[0].nombre && productos[0].precio && productos[0].descripcion && productos[0].id) {
        let sku = productos[0].id;
        url = productos[0].url;
        categoria = productos[0].categoria;
        nombreProducto = productos[0].nombre;
        precio = productos[0].precio;
        descripcion = productos[0].descripcion;

        const divProductoIndividual = document.getElementById('divProductoIndividual');

        const imgProductoIndividual = document.createElement('img');
        const divImgProductoIndividual = document.createElement('div');
        divImgProductoIndividual.setAttribute('id','divImgProductoIndividual');
        imgProductoIndividual.setAttribute('src',`${url}`);
        imgProductoIndividual.classList.add('imgProductoIndividual');

        divProductoIndividual.appendChild(divImgProductoIndividual);
        divImgProductoIndividual.appendChild(imgProductoIndividual);

        const divContenidoProductoIndividual = document.createElement('div');
        divContenidoProductoIndividual.setAttribute('id','divContenidoProductoIndividual');
        divProductoIndividual.appendChild(divContenidoProductoIndividual);

        const tituloProductoIndividual = document.createElement('label');
        tituloProductoIndividual.textContent = nombreProducto;
        tituloProductoIndividual.setAttribute('id','labelTituloProducto');
        divContenidoProductoIndividual.appendChild(tituloProductoIndividual);

        const precioProductoIndividual = document.createElement('label');
        precioProductoIndividual.textContent = `$ ${precio}`;
        precioProductoIndividual.classList.add('precioProductoIndividual');
        divContenidoProductoIndividual.appendChild(precioProductoIndividual);

        const descripcionProductoIndividual = document.createElement('label');
        descripcionProductoIndividual.textContent = descripcion;
        descripcionProductoIndividual.classList.add('descripcionProductoIndividual');
        divContenidoProductoIndividual.appendChild(descripcionProductoIndividual);
        productoSimilares(categoria,sku);
      } else {
        throw new Error();
      }
    } catch (error) {
    //   window.location.href = "/screens/error.html";
    console.log('ocurrio algo malardo');
    
    }
  };
  
  obtenerInformacion();