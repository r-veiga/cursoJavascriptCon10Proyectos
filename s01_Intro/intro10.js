console.log(`.length es una propiedad de String; no de Number o de Boolean`);

console.log(`----- NUMBER`);
let numero = 12345;

console.log(`String(${numero}).length = ${String(numero).length}`)
console.log(`${numero}.length = ${numero.length}`)
 
console.log(`----- BOOLEAN`);
let boolean = true;
 
console.log(`String(${boolean}).length = ${String(boolean).length}`)
console.log(`${boolean}.length = ${boolean.length}`)

console.log(`----- ARRAY`);
let array = [1,   2, 3];
let arrayAsString = String(array);

console.log(`let array = [1,2,3];`);
console.log(`array.length = ${array.length}`);
console.log(`String(array) = ${String(array)}`);
console.log(`String(array).length = ${String(array).length}`);

console.log(``);
array = [1,   2, 3];
console.log(`array = [1,   2, 3];`);
console.log(`array.length = ${array.length}`);
console.log(`String(array) = ${String(array)}`);
console.log(`String(array).length = ${String(array).length}`);

console.log(`----- NUll`);
let valor = null;
console.log(`String(${valor}).length = ${String(valor).length}`);
console.log(`${valor}.length = ¡¡UNCAUGHT TYPE ERROR!! El programa se rompe aquí`);
console.log(`----- UNDEFINED`);
valor = undefined; 
console.log(`String(${valor}).length = ${String(valor).length}`)
console.log(`${valor}.length = ¡¡UNCAUGHT TYPE ERROR!! El programa se rompe aquí`);
console.log(`----- NAN`);
valor = NaN; 
console.log(`String(${valor}).length = ${String(valor).length}`)
console.log(`${valor}.length = ${valor.length}`);

console.log(``);
console.log(``);
