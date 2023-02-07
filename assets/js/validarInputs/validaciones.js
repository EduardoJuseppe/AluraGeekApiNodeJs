export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if(tipoDeInput == 'mensaje' && input.value.length >0){
      if(input.value.length > 300){
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector(".input-message-error").innerHTML = "El mensaje debe contener máximo 300 caracteres";
      }else{
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
      }
  }else{
    // console.log(input.validity.valid) de vuelve un valor true o false dependiendo si esta con algun elemento el input o no
    if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
      input.parentElement.classList.add('input-container--invalid');
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido ejemplo correo@alurageek.com",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    // console.log(error);
    // console.log(input.validity[error]);
    if (input.validity[error]) {
      // console.log(tipoDeInput, error);
      // console.log(input.validity[error]);
      // console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

