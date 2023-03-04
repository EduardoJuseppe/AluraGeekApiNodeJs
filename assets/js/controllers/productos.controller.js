import { clientServices } from "../service/cliente-service.js";

const crearCard = (url,nombreProducto,precio,id) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const divImg = document.createElement('div');
    divImg.classList.add('divImg');
    card.appendChild(divImg);
    const divIconEditarBorrar = document.createElement('div');
    divIconEditarBorrar.classList.add('divIconEditarBorrar');
    const btnBorrar = document.createElement('i');
    const btnEditar = document.createElement('i');
    btnBorrar.setAttribute('class','fa-solid fa-trash btnIcon');
    btnBorrar.setAttribute('id',`${id}`);
    btnEditar.setAttribute('class','fa-regular fa-pen-to-square btnIcon');
    const modificar = document.createElement('a');
    modificar.setAttribute('href',`./modificar_producto.html?id=${id}`);
    modificar.appendChild(btnEditar)
    divIconEditarBorrar.appendChild(btnBorrar);
    divIconEditarBorrar.appendChild(modificar);
    divImg.appendChild(divIconEditarBorrar);
    const imgCard = document.createElement('img');
    imgCard.classList.add('imgCard');
    imgCard.setAttribute('src',`${url}`);
    divImg.appendChild(imgCard);
    btnBorrar.addEventListener("click", () => {
        const id = btnBorrar.id;
        clientServices
        .eliminarCliente(id)
        .then((respuesta) => {
            window.location.href = "./productos.html";
        })
        .catch((err) => alert("Ocurrió un error"));
    });
    const divContenido = document.createElement('div');
    divContenido.classList.add('divContenido');
    card.appendChild(divContenido);
    const tituloContenido = document.createElement('h3');
    tituloContenido.textContent = nombreProducto;
    divContenido.appendChild(tituloContenido);
    const valor = document.createElement('label');
    valor.textContent = `$ ${precio}`;
    divContenido.appendChild(valor);
    const identificador = document.createElement('label');
    identificador.textContent = `# ${id}`;
    divContenido.appendChild(identificador);
    return card;
};
/* <div class="card">
        <div class="divImg">
            <div class="divIconEditarBorrar">
                <i class="fa-solid fa-trash btnIcon"></i>
                <i class="fa-regular fa-pen-to-square btnIcon"></i>
            </div>
            <img class="imgCard" src="https://www.mundopeliculas.tv/wp-content/uploads/2021/04/star-wars-1.jpg"/>
        </div>
        <div class="divContenido">
            <h3>Darth Vader</h3>
            <label>$ 60.00</label>
            <label>#bc653a6e-a898-42db-9a0b-60798e40b33d</label>
        </div>
    </div> 
*/

const imgLogOut = document.getElementById('imgLogOut');

imgLogOut.addEventListener('click', () =>{
    localStorage.removeItem("admin");
    window.location.href = "../../index.html";
});

clientServices.ListaProductos().then((data) => {
    data.forEach(({ url,nombre,precio,id }) => {
    const divProductos = document.getElementById('divProductos');
    const card = crearCard(url,nombre,precio,id);
    //   console.log(card);
    divProductos.appendChild(card);
    });
})
.catch((error) => alert("Ocurrió un error"));

//   console.log(url + "\n" + categoria + "\n" +nombreProducto + "\n" +precio + "\n" +descripcion + "\n\n\n\n" );

