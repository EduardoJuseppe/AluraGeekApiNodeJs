import { clientServices } from "../service/cliente-service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "/screens/error.html";
    }
  
    const url = document.getElementById("Url");
    const categoria = document.getElementById("Categoria");
    const nombreProducto = document.getElementById("Producto");
    const precio = document.getElementById("precio");
    const descripcion = document.getElementById("Mensaje");
  
    try {
      const productos = await clientServices.detalleCliente(id);
      // console.log(productos);
      if (productos[0].url && productos[0].categoria && productos[0].nombre && productos[0].precio && productos[0].descripcion) {
        url.value = productos[0].url;
        categoria.value = productos[0].categoria;
        nombreProducto.value = productos[0].nombre;
        precio.value = productos[0].precio;
        descripcion.value = productos[0].descripcion;
      } else {
        throw new Error();
      }
    } catch (error) {
    //   window.location.href = "/screens/error.html";
    console.log('ocurrio algo malardo');
    }
  };
  
  obtenerInformacion();

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const url = document.getElementById("Url").value;
    const categoria = document.getElementById("Categoria").value;
    const nombreProducto = document.getElementById("Producto").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("Mensaje").value;

    clientServices.actualizarCliente(url,categoria,nombreProducto,precio,descripcion,id).then(() => {
        window.location.href = "./productos.html";
    });
});
