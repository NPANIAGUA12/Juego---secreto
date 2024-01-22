//let titulo = document.querySelector("h1"); 
//titulo.innerHTML = "Juego del número secreto";

//let parrafo = document.querySelector("p"); 
// parrafo.innerHTML = "Selecciona un número del 1 al 10";

// los elementos de las etiquetas los puedo convertir en una función; 

/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10; 

console.log (numeroSecreto)

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        elementoTexto("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); 
        document.getElementById ("reiniciar").removeAttribute("disabled");

    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            elementoTexto("p","El numero es menor")
        } else {
            elementoTexto ("p", "El numero secreto es mayor")
        }
        intentos ++; 
        limpiarCaja();
    }
    return; 
}

function limpiarCaja () {
    //funcion completa para espacios vacios
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = " ";  

    //funcion resumida
    document.querySelector('#valorUsuario').value =" ";
}   

// nueva forma para reducir las dos lineas de codifo superiores
function elementoTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
}

function generarNumeroSecreto () {
    let = numeroGenerado = Math.floor((Math.random()*numeroMaximo))+1;
    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados); 
    // ¿ya sorteamos todos los numeros? 
    if (listaNumerosSorteados.length == numeroMaximo) {
        elementoTexto("p",`ya se sortearon todos los ${numeroMaximo} intentos posibles`)
    } else {
            // Si el número generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }
    

}

function condicionesIniciales () {
    //mensajes iniciales 
    elementoTexto("h1","Juego del número secreto"); 
    elementoTexto("p",`elecciona un número del 1 al ${numeroMaximo}`); 
    //generar número aleatorio
    numeroSecreto = generarNumeroSecreto ();
    //inicilizar juego
    intentos = 1;
}

function reiniciarJuego () { 
    //limpiar la caja 
    limpiarCaja();
    condicionesIniciales();
    //deshabilitar el boton de nyevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}
 
condicionesIniciales ();*/



/*function saludo () {
    console.log("¡Hola, mundo!")
}

saludo();*/

/*function hola () {
    let nombre = prompt("escribe tu nombre"); 
    console.log (`¡Hola, ${nombre}!` ); 
}

hola (); */

/*function doble () {
    let numero = parseInt(prompt("escribe un numero"))
    console.log (numero*2); 
}

doble (); */

/*function promedio () {
    let numero1 = parseInt(prompt("escribe el primer numero"));
    let numero2 = parseInt(prompt("escribe el segundo numero"));
    let numero3 = parseInt(prompt("escribe el tercer numero"));
    console.log ((numero1+numero2+numero3)/3)
}

promedio()*/

/*function mayor () {
    let numero1 = parseInt(prompt("escribe el primer numero")); 
    let numero2 = parseInt(prompt("escribe el segundo numero")); 

    if (numero1 < numero2) {
        console.log(numero2); 
    } else {
        console.log(numero1)
    }           
}

mayor(); */

/*function multiplicacion () {
    let numero = parseInt(prompt("escribe un numero")); 
    console.log (numero * numero); 
}

multiplicacion(); */

//funcin masa indice corporal 

/*function indiceMasa() {
    let altura = parseInt(prompt("Ingrese el dato de su altura en cm"));
    let peso =  parseInt(prompt("Ingrese el dato de su peso")); 
    let resultado = peso/(altura*altura);
    alert(`Su indice de masa corporal es de ${resultado}`);
}   

indiceMasa(); */

/*function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`); */


//cambio de moneda
/*function calculoMoneda(peso) {
    let cambio = parseInt(peso) * 0.00026; 
    return cambio; 
}

let peso = 10000; 
let resultado = calculoMoneda(peso);
console.log (`${peso} pesos son ${resultado.toFixed(2)} dolares` ); */

/*function calculoArea() {
    let area = altura * base; 
   
    return area; 
}

let base = 5; 
let altura = 2; 
let areaCuarto = calculoArea(); 
console.log(); */

//lista vacia 
//let listaGeneria = []; 

/*lista de lenguajes

let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin','Python']; 
listaLenguajes.push('Java'); 
listaLenguajes.push('Ruby');
listaLenguajes.push('GoLang');

function mostrarLista () {
    console.log(listaLenguajes); 
}
mostrarLista(); 

function listaReves () {
    console.log(listaLenguajes.reverse());  
}
listaReves(); */

//let listaNumeros = [5,7,9,8,9,6]; 
// let total = 0; 

// forma 1
/*function promedio() {
    let contar = listaNumeros.length; 
    let suma = listaNumeros.reduce((previous,current) => current +=  previous); 
    console.log(suma/contar); 

}*/

//forma 2

/*function promedio() {
    let contar = listaNumeros.length; 
    for (let i = 0; i < listaNumeros.length; i++) {
        let suma  = listaNumeros [i]; 
        total += suma; 
        console.log(total/contar)
    }    
} 

promedio(); */

//nmero mas grande 

function numeroGrande () {

}















