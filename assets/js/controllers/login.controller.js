import { clientServices } from "../service/cliente-service.js";

const btnEntrar = document.getElementById('btnEntrar');
const divBtnEntrar = document.getElementById('divBtnEntrar');

const validarAdmin = (e) =>{
    const email = document.getElementById('email');
    // console.log(email.value);

    const password = document.getElementById('password');
    // console.log(password.value);

    if(email.value == '' && password.value == ''){
        divBtnEntrar.classList.add("input-container--invalid");
        divBtnEntrar.querySelector(".input-message-error").innerHTML = "Ingresar correo y password";
        setTimeout(() => {
            divBtnEntrar.classList.remove("input-container--invalid");
            divBtnEntrar.querySelector(".input-message-error").innerHTML = "";
        }, "2000")
    }else if(email.value == ''){
        divBtnEntrar.classList.add("input-container--invalid");
        divBtnEntrar.querySelector(".input-message-error").innerHTML = "Ingresar correo";
        setTimeout(() => {
            divBtnEntrar.classList.remove("input-container--invalid");
            divBtnEntrar.querySelector(".input-message-error").innerHTML = "";
        }, "2000")
    }else if(password.value == ''){
        divBtnEntrar.classList.add("input-container--invalid");
        divBtnEntrar.querySelector(".input-message-error").innerHTML = "Ingresar password";
        setTimeout(() => {
            divBtnEntrar.classList.remove("input-container--invalid");
            divBtnEntrar.querySelector(".input-message-error").innerHTML = "";
        }, "2000")
    }else{
        login(email.value,password.value);     
    }
};
//Abrir http (metodo,url)

// CRUD     -   Metodos HTTP
// Create   -   POST       
// Read     -   GET
// Update   -   PUT / PATCH
// Delete   -   DELETE

const login = (email,password) =>{
    clientServices.ListaClientes().then((data) => {
        // console.log(data[0].email);
        // console.log(data[0].password);
        console.log(data);
        if(data[0].email == email && data[0].password == password){
            localStorage.setItem('admin', JSON.stringify(true));
            window.location.href = "./iniciar_sesion.html";
        }
        else{
            divBtnEntrar.classList.add("input-container--invalid");
            divBtnEntrar.querySelector(".input-message-error").innerHTML = "Credenciales Incorrectas";
            setTimeout(() => {
                divBtnEntrar.classList.remove("input-container--invalid");
                divBtnEntrar.querySelector(".input-message-error").innerHTML = "";
            }, "2000")
        }
        
    }).catch((error) => alert("Ocurrio un error"));
}



btnEntrar.addEventListener('click',validarAdmin);