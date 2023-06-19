var desplegarMenu = document.getElementById("desplegar");
var contraerMenu = document.getElementById("contraer");
var mouseSobrePlatos = document.getElementById("platos");
mouseSobrePlatos = document.getElementById("platos"); 
mouseSobreDesplegable1 = document.getElementById ("desplegable1");


mouseSobrePlatos.addEventListener("mouseover",()=> {
    document.getElementById("plato").style.left ="-20vw";
    document.getElementById("postre").style.left = "6.25em" 
    document.getElementById("copa").style.left = "6.25em"
});


desplegarMenu.addEventListener("click", () => {
    document.getElementById("desplegable").style.top = "0em";
    document.getElementById("desplegable").style.opacity = "1"; 
    document.getElementById("desplegar").style.display = "none";
    document.getElementById("contraer").style.display = "block";

});

contraerMenu.addEventListener("click",()=> {
    document.getElementById("desplegable").style.top = "0em";
    document.getElementById("desplegable").style.opacity = "1";
     document.getElementById("desplegar").style.display = "block";
    document.getElementById("contraer").style.display = "block";

});

