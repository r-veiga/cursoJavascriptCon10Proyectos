
// Con VAR puedo definir dos veces una variable en el mismo scope
var nombre = 'Juan';
var nombre = 'Carlos';
var apellido;

console.log(nombre);
console.log(apellido);


let coche = 'Audi';
console.log(coche);
console.log(`// let coche = 'Renault';\n// No puedo volver a ejecutar let coche = ...`);

const aeropuerto = 'Barajas';
const arrayNumeros = [100, 200, 300];
console.log(aeropuerto);                 // Barajas
console.log(arrayNumeros);               // 100, 200, 300

const mascota = { raza: 'gato', nombre: 'Manchitas' }
console.log(mascota);                    // 100, 200, 300

console.log(`const aeropuerto = 'Barajas';\n//No puedo volver a ejecutar const aeropuerto = ...`);

arrayNumeros[0] = 7;
arrayNumeros.push(8);
console.log(arrayNumeros);               // 7, 200, 300

mascota.raza = 'perro';
mascota.edad = 4;                   
console.log(mascota);


