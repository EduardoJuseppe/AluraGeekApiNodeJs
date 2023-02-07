import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");
const textarea = document.querySelector(".textarea");

textarea.addEventListener("blur", (input) => {
  valida(input.target);
});

inputs.forEach((input) => {
  // console.log(input); // se mandan a llamar todos los input
  input.addEventListener("blur", (input) => { // genero un evento para cada input
    valida(input.target); // mando a validar cada input, para diferenciar un input de otro se usa el atributo target
  });
});
