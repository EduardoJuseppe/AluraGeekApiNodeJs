export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
    // console.log(input.validity.valid);
    if(input.validity.valid){
      if(localStorage.getItem('temaOscuro') === "white"){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
      }else{
        input.parentElement.classList.remove("input-container--invalid2");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
      }
      
    }else{
      if(localStorage.getItem('temaOscuro') === "white"){
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
      }else{
        input.parentElement.classList.add('input-container--invalid2');
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
      }

      
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    nombre:{
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "No tiene formato de url de imagen",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "Correo no valido ej. ejemplo@alurageek.com",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
    },
    url: {
      valueMissing: "El campo url no puede estar vacío",
      patternMismatch: "No tiene formato de url de imagen",
    },
    categoria: {
        valueMissing: "El campo categoria no puede estar vacío",
        patternMismatch: "La categoria solo puede contener letras",
    },
    nombreProducto: {
        valueMissing: "El campo nombre producto no puede estar vacío",
        patternMismatch: "Solo ingresar letras o numeros",
    },
    precio: {
      valueMissing: "El campo precio producto no puede estar vacío",
      patternMismatch: "Formato Numero.XX ejemplo 60.00, 450.00",
    },
    mensaje: {
      valueMissing: "El mensaje no puede estar vacio",
      customError: "El maximo de caracteres es de 120",
    },
    descripcion: {
      valueMissing: "La descripcion no puede estar vacia",
      customError: "El maximo de caracteres es de 150",
    },
    
  };
  
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      // console.log(tipoDeInput, error);
      // console.log(input.validity[error]);
      // console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

const validarDescripcion = (input) =>{
  let mensaje = '';
  // console.log(input.value.length);
  if(input.value.length >150){
    mensaje = "Maximo de caracteres alcanzado";
  }
  input.setCustomValidity(mensaje);
};
const validarMensaje = (input) =>{
  let mensaje = '';
  // console.log(input.value.length);
  if(input.value.length >120){
    mensaje = "Maximo de caracteres alcanzado";
  }
  input.setCustomValidity(mensaje);
};

const validadores = {
  descripcion: (input) => validarDescripcion(input),
  mensaje: (input) => validarMensaje(input),
};


  
