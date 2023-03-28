let contador1 = 0;
function desplegarAboutUs() {
    let informacion = document.getElementById('more_information1');
    if(contador1 === 0) {
        informacion.style.transform = "translateY(100px)";
        informacion.style.opacity = "100";
        contador1 = 1;
    } else {
        informacion.style.transform = "translateY(0)";
        informacion.style.opacity = "0";
        contador1 = 0;
    }
}
let contador2 = 0;
function desplegarAboutUs2() {
    let informacion = document.getElementById('more_information2');
    if(contador2 === 0) {
        informacion.style.transform = "translateY(100px)";
        informacion.style.opacity = "100";
        contador2 = 1;
    } else {
        informacion.style.transform = "translateY(0)";
        informacion.style.opacity = "0";
        contador2 = 0;
    }
}
let contador3 = 0;
function desplegarAboutUs3() {
    let informacion = document.getElementById('more_information3');
    if(contador3 === 0) {
        informacion.style.transform = "translateY(100px)";
        informacion.style.opacity = "100";
        contador3 = 1;
    } else {
        informacion.style.transform = "translateY(0)";
        informacion.style.opacity = "0";
        contador3 = 0;
    }
}
    