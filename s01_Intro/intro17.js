const fechaHoy = new Date();
const navidad2019 = new Date('2019-12-25');

console.log(`const navidad2019 = new Date('2019-12-25') \n=>\n ${navidad2019}`);
console.log(`-- -- -- --`);
console.log(`const fechaHoy = new Date() \n=>\n ${fechaHoy}`);
console.log(`-- -- -- --`);
console.log(`let aaaa = fechaHoy.getFullYear() => ${fechaHoy.getFullYear()}`);
console.log(`let MM = fechaHoy.getMonth() => ${fechaHoy.getMonth()}   // 0=enero`);
console.log(`let dd = fechaHoy.getDate() => ${fechaHoy.getDate()}`);
console.log(`let hh = fechaHoy.getHours() => ${fechaHoy.getHours()}`);
console.log(`let mm = fechaHoy.getMinutes() => ${fechaHoy.getMinutes()}`);
console.log(`let weekday = fechaHoy.getDay() => ${fechaHoy.getDay()}   // 0=domingo`);
console.log(`let msDesde1970_01_01 = fechaHoy.getTime() => ${fechaHoy.getTime()}`);
console.log(`-- -- -- --`);
let nuevoTimestamp = fechaHoy.setFullYear(1992);
const nuevaFecha = new Date( nuevoTimestamp );
console.log(`let nuevoTimestamp = fechaHoy.setFullYear(1992) => ${nuevoTimestamp}`);
console.log(`const nuevaFecha => new Date( nuevoTimestamp ) \n=>\n ${nuevaFecha}`);
nuevaFecha.setMonth(6);
console.log(`nuevaFecha.setMonth(6) \n=>\n ${nuevaFecha}`);
nuevaFecha.setDate(4);
console.log(`nuevaFecha.setDate(4) \n=>\n ${nuevaFecha}`);
console.log(`-- -- -- --`);