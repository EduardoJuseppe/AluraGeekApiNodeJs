
const ListaClientes = () => fetch("https://node-tutorial-production.up.railway.app/getAllAdmin")
.then((data) => data.json());

const ListaProductos = () => fetch("https://node-tutorial-production.up.railway.app/getAllProductos")
.then((data) => data.json());

const crearCliente = (url2,categoria2,nombreProducto,precio2,descripcion2) => {
    return fetch("https://node-tutorial-production.up.railway.app/crearProducto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url2,
        categoria: categoria2,
        nombre: nombreProducto,
        precio: precio2,
        descripcion: descripcion2
      }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`https://node-tutorial-production.up.railway.app/deleteProducto/${id}`, {
      method: "DELETE",
    });
};

const detalleCliente = (id) => {
  return fetch(`https://node-tutorial-production.up.railway.app/getOne/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const buscarProducto = (palabra) => {
  return fetch(`http://localhost:3000/productos?nombreProducto_like=${palabra}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (url2,categoria2,nombreProducto,precio2,descripcion2,id) => {
  return fetch(`https://node-tutorial-production.up.railway.app/update/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url2,
      categoria: categoria2,
      nombre: nombreProducto,
      precio: precio2,
      descripcion: descripcion2
    }),
  })
  .then(respueta => respueta)
  .catch((err) => console.log(err));
}

export const clientServices ={
    ListaClientes,
    ListaProductos,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
    buscarProducto,
};