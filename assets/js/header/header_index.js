const calcularNav = () =>{
    const style = document.documentElement.style
    let container = document.getElementById('containerBusqueda');
    let largoContainer = container.clientWidth;
    largoContainer = largoContainer/2.5;
    document.documentElement.style.setProperty('--largoNav', largoContainer + "px");
}

calcularNav();

