const numero1 = '50';
const numero2 = 10;
const numero3 = 'tres';

console.log(`('${numero1}' - ${numero2}) = ${numero1 - numero2}`);
console.log(`('${numero1}' + ${numero2}) = ${numero1 + numero2}`);
console.log(`(parseInt('${numero1}') + ${numero2}) = ${parseInt(numero1) + numero2}`);
console.log(`-----`);
console.log(`typeof Number('${numero1}') = ${typeof Number(numero1)}`);
console.log(`Number('${numero1}') = ${Number(numero1)}`);
console.log(`parseInt('${numero1}') = ${parseInt(numero1)}`);
console.log(``);
console.log(`typeof Number('${numero3}') = ${typeof Number(numero3)}`);
console.log(`Number('${numero3}') = ${Number(numero3)}`);
console.log(`parseInt('${numero3}') = ${parseInt(numero3)}`);
console.log(``);
console.log(`${numero1} + ${numero3} = ${numero1 + numero3}`);
console.log(`Number(${numero1}) + Number(${numero3}) = ${Number(numero1) + Number(numero3)}`);
console.log(`parseInt(${numero1}) + parseInt(${numero3}) = ${parseInt(numero1) + parseInt(numero3)}`);
console.log(`-----`);

let dato;
dato = Number('20');
console.log(`dato = Number('20'); => ${dato}`);
dato = Number('20.4568');
console.log(`dato = Number('20.4568'); => ${dato}`);
dato = parseInt('20');
console.log(`dato = parseInt('20'); => ${dato}`);
dato = parseInt('20.4568');
console.log(`dato = parseInt('20.4568'); => ${dato}`);
dato = Number(true);
console.log(`dato = Number(true); => ${dato}`);
dato = Number(false);
console.log(`dato = Number(false); => ${dato}`);
dato = Number(null);
console.log(`dato = Number(null); => ${dato}`);
dato = Number(undefined);
console.log(`dato = Number(undefined); => ${dato}`);
dato = Number([1,2,3,4,5]);
console.log(`dato = Number([1,2,3,4,5]); => ${dato}`);
console.log(`-----`);
console.log(`parseInt(25) = ${parseInt(25)}`);
console.log(`parseInt(25.789) = ${parseInt(25.789)}`);
console.log(`parseFloat(25) = ${parseFloat(25)}`);
console.log(`parseFloat(25.789) = ${parseFloat(25.789)}`);
console.log(`-----`);
dato = 12345;
console.log(`12345.toFixed(3) = ${dato.toFixed(3)}`);
console.log(`(typeof 12345.toFixed(3)) = ${typeof dato.toFixed(3)}`);
console.log(`12345.toFixed(3) = ${dato.toFixed(3)}`);
dato = 12345.678901234;
console.log(`(12345.678901234).toFixed(3) = ${dato.toFixed(3)}`);
dato = '12345';
//console.log(`'12345'.toFixed(3) => ${dato.toFixed(3)}`);
console.log(`'12345'.toFixed(3) => ¡¡UNCAUGHT TYPE ERROR!! El programa se rompe`);
