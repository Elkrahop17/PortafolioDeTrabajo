// Variable que controla si el menú está abierto o no
let visible = false;

function abrirCerrarMenu(){
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    } else {
        document.getElementById("nav").className = "";
        visible = false;
    }
}

// Detecto el scrolling para aplicar la animación de las barras de habilidades 
window.onscroll = function(){
    animacionSkills();
    animacionNumeros(); // Animación de los números
}

// Función que aplica las animaciones
function animacionSkills(){
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 400){
        document.getElementById("dw").classList.add("animar-skill");
        document.getElementById("db").classList.add("animar-skill");
        document.getElementById("dg").classList.add("animar-skill");
        document.getElementById("cs").classList.add("animar-skill");
    }
}

// Variables para los contadores
let proyectos = 0;
let clientes = 0;
let cursos = 0;
let intervalProyectos = null;
let intervalClientes = null;
let intervalCursos = null;

function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;

    if(distancia_numeros > 200 && proyectos == 0){
        intervalProyectos = setInterval(actualizarContadorProyectos, 60);
        intervalClientes = setInterval(actualizarContadorClientes, 60);
        intervalCursos = setInterval(actualizarContadorCursos, 60);
    }
}

// Funciones que manejan el contador de los números
function actualizarContadorProyectos(){
    if(proyectos <= 50){
        document.getElementById("cantProyectos").textContent = proyectos;
        proyectos++;
    } else {
        clearInterval(intervalProyectos);
    }
}

function actualizarContadorClientes(){
    if(clientes <= 30){
        document.getElementById("cantClientes").textContent = clientes;
        clientes++;
    } else {
        clearInterval(intervalClientes);
    }
}

function actualizarContadorCursos(){
    if(cursos <= 50){
        document.getElementById("cantCURSOS").textContent = cursos;
        cursos++;
    } else {
        clearInterval(intervalCursos);
    }
}
