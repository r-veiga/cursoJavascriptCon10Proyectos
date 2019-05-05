// A diferencia de VAR 
// con LET no puedo definir dos veces la misma variable en el mismo scope
// lo que puedo es cambiar su valor, pero no usar dos veces "let nombre = ..."

let nombre = 'Juan';
nombre = 'Carlos';
let apellido;

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);

// Las constantes CONST deben asignarse durante su declaración 
// no puede cambiarse nunca su valor

const PI = 3.1396;
console.log('El valor de PI es ' + PI);

console.log(`\n>>> Mismos mensajes, pero ahora creados con TEMPLATE LITERALS`);
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);
console.log(`El valor de PI es ${PI}`);