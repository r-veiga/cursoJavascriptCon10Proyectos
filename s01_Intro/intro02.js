let nombre = prompt("Introduzca su nombre");
let edad = prompt("Introduzca ahora su edad");

document.getElementById("app").innerHTML = `Bienvenido ${nombre} de ${edad} años`;

// Cómo medir un intervalo de tiempo 
console.time('Etiqueta tiempo1');
for(i=0; i < 100000 ; i++) { var j = i; };
console.timeEnd('Etiqueta tiempo1')
