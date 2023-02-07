import { clientServices } from "../service/cliente-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.getElementById("Url").value;
    const categoria = document.getElementById("Categoria").value;
    const nombreProducto = document.getElementById("Producto").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("Mensaje").value;

    clientServices
        .crearCliente(url,categoria,nombreProducto,precio,descripcion)
        .then(() => {
        window.location.href = "./producto_agregado.html";
        })
        .catch((err) => console.log(err));
});