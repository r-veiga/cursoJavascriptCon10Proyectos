console.log(`----- Dos formas de CREAR UN ARRAY`);
const numeros = [10,20,30,40,50]; 
const semana = new Array('Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb', 'Dom');
console.log(`const numeros = [10,20,30,40,50];`); 
console.log(numeros);
console.log(``);
console.log(`const semana = new Array('Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb', 'Dom'));`);
console.log(semana);

console.log(`-----`);
console.log(`semana.length = ${semana.length}`);
console.log(`Array.isArray(semana) = ${Array.isArray(semana)}`);
console.log(`semana = ${semana}`);
console.log(`semana.reverse() = ${semana.reverse()}`);
console.log(`semana = ${semana}`);
console.log(`semana.reverse() = ${semana.reverse()}`);
console.log(`semana = ${semana}`);
console.log(`semana.concat(['BLAH','BLEH','BLIH']) = ${semana.concat(['BLAH','BLEH','BLIH'])}`);
console.log(`semana = ${semana}`);
console.log(``);
console.log(`----- BUSCAR ELEMENTOS en el array`);
console.log(`semana.indexOf('Lun') => ${semana.indexOf('Lun')}`);
console.log(`semana.indexOf('Mar') => ${semana.indexOf('Mar')}`);
console.log(``);
console.log(`----- AÑADIR ELEMENTOS al array`);
console.log(numeros);
console.log(`numeros.push(60) => ${numeros.push(60)}`);
console.log(`numeros.push(70, 80, 90) => ${numeros.push(70, 80, 90)}`);
console.log(numeros);
console.log(`numeros.unshift(8) => ${numeros.unshift(8)}`);
console.log(`numeros.unshift(7, 8, 9) => ${numeros.unshift(7, 8, 9)}`);
console.log(numeros);
console.log(``);
console.log(`----- ELIMINAR ELEMENTOS del array`);
console.log(`numeros.pop() => ${numeros.pop()}`);
console.log(numeros);
console.log(`numeros.pop(4) => ${numeros.pop(4)}`);
console.log(numeros);
console.log(`numeros.shift() => ${numeros.shift()}`);
console.log(numeros);
let vacio = new Array();
console.log(vacio)
console.log(`vacio.pop() => ${vacio.pop()}`);
console.log(`vacio.shift() => ${vacio.shift()}`);
console.log(semana);
console.log(`semana.splice(2) => ${semana.splice(5)}`);
console.log(semana);
console.log(`semana.splice(3, 6) => ${semana.splice(3, 6)}`);
console.log(semana);
console.log(`semana.splice(1, 2) => ${semana.splice(1, 2)}`);
console.log(semana);
console.log(`semana.splice(4, 2) => ${semana.splice(4, 2)}`);
console.log(semana);
console.log(``);
console.log(`----- ORDENAR ELEMENTOS del array`);
const fruteria = new Array('Piña', 'Zanahoria', 'Kiwi', 'Albaricoque', 'Uva');
console.log(fruteria); 
console.log(`fruteria.sort() => ${fruteria.sort()}`);
console.log(fruteria); 
console.log(numeros);
console.log(`$numeros.sort() => ${numeros.sort()}`);
console.log(numeros);
console.log(`numeros.sort( function(a,b) { return b - a; }) => ${numeros.sort( function(a,b) { return b - a; })}`);
console.log(numeros);

