const btn = document.querySelector(".btn");


const ocultarBoton = (e) =>{
    if(screen.width <=550){
        console.log('borrar');
        const btnAdmin = document.getElementById('btnAdmin');
        btnAdmin.style.display = "none";
    }
};

const aparecerBoton = (e) =>{
    if(screen.width <=550){
        setTimeout(() => {
            console.log('aparecer');
            const btnAdmin = document.getElementById('btnAdmin');
            btnAdmin.style.display = "block";
          }, "700")    
    }
};

const calcularAlturas = () =>{
    const style = document.documentElement.style

    let header = document.getElementById('header');
    let footer = document.getElementById('footer');

    let alturaHeader = header.clientHeight;
    let alturaFooter = footer.clientHeight;
    let alturaHeaderFooter = alturaHeader + alturaFooter;

    document.documentElement.style.setProperty('--alturaHeaderFooter', alturaHeaderFooter + "px");
}

const calcularNav = () =>{
    const style = document.documentElement.style

    let container = document.getElementById('containerBusqueda');

    let largoContainer = container.clientWidth;
    largoContainer = largoContainer*0.8;

    // console.log(largoContainer);

    document.documentElement.style.setProperty('--largoNav', largoContainer + "px");
}

calcularNav();
calcularAlturas();
// btn.addEventListener('mouseenter',ocultarBoton);
// btn.addEventListener('mouseout',aparecerBoton);
