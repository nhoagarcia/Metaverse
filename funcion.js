const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
});
var longitud = document.getElementsByTagName("a").length;
for(i=0; i<longitud;i++){
    var enlace = document.getElementsByTagName("a")[i];
    enlace.addEventListener('mouseover', e => {
        cursor.classList.add("link");
    });
    enlace.addEventListener('mouseout', e => {
        cursor.classList.remove("link");
    });
}


document.getElementById("hamburguesa").addEventListener("click", desplegar);
function desplegar(){
    document.getElementById("menudespl").classList.remove("oculto");
    document.getElementById("menudespl").classList.add("visible");
}
document.getElementById("exit").addEventListener("click", quit);
function quit(){
    document.getElementById("menudespl").classList.remove("visible");
    document.getElementById("menudespl").classList.add("oculto");       
}


const parrafo = document.getElementById("explp");
const texto = parrafo.innerText;
const caracteres = texto.split("");
let contador = 0;

function escribir() {
if (contador < caracteres.length) {
    if (contador === 0) {
    parrafo.innerHTML = "";
    }
    parrafo.innerHTML += caracteres[contador];
    contador++;
}
}
setInterval(escribir, 50);












///////////////////////////////////


particlesJS("particles-js", {"particles":{"number":{"value":120,"density":
{"enable":true,"value_area":850}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":
{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":
{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":
{"enable":false,"speed":0.9744926547616141,"opacity_min":0.1,"sync":false}},"size":
{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":
{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1.5},"move":
{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":
{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() 
{ stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
{ count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;






