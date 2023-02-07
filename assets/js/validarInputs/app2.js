import { valida } from "./validaciones2.js";

const inputs = document.querySelectorAll(".input");

const textArea = document.querySelectorAll('.textarea')

textArea.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target); 
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target); 
  });
});
