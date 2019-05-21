
// Constructor de "Persona"
function Persona( pNombre, fechaNac ) {
    this.nombre = pNombre;
    this.profesion = 'futbolista';
    this.cumpleaños = new Date( fechaNac );
    this.calcularEdad = function() {
        const diferencia =  Date.now() - this.cumpleaños.getTime();
        const edad = new Date(diferencia);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }
}

const zinedine = new Persona('Zinedine', '1972-06-23');
const iker = new Persona('Iker', '23-06-1972');
const edadZinedine = zinedine.calcularEdad();

console.log(`--- "function" para definir constructor de clase`);
console.log(`function Persona( pNombre, fechaNac ) {
    this.nombre = pNombre;
    this.profesion = 'futbolista';
    this.cumpleaños = new Date( fechaNac );

    this.calcularEdad = function() {
        const diferencia =  Date.now() - this.cumpleaños.getTime();
        const edad = new Date(diferencia);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }
}`);
console.log(`--- "new" para crear una instancia`);
console.log(`const zinedine = new Persona('Zinedine, '1972-06-23') =>`);
console.log(zinedine);
console.log(`La edad de ${zinedine.nombre} es de ${zinedine.calcularEdad()}`);
console.log(`const iker = new Persona('Iker', '23-06-1972') => `);
console.log(iker);
console.log(`La edad de ${iker.nombre} es de ${iker.calcularEdad()}`);

console.log(`--- Built in constructors - Clases wrapper`);
const nombre1 = 'pepe';
const nombre2 = new String('pepe');

console.log(`const nombre1 = 'pepe';`);
console.log(`const nombre2 = new String('pepe');`);
console.log(`$\{nombre1\} = ${nombre1}`);                    // pepe
console.log(`$\{nombre2\} = ${nombre2}`);                    // pepe
console.log(`$\{typeof nombre1\} = ${typeof nombre1}`);      // string
console.log(`$\{typeof nombre2\} = ${typeof nombre2}`);      // object
console.log(`nombre2 == 'pepe'  => ${nombre2 == 'pepe'}`);   // true
console.log(`nombre2 === 'pepe' => ${nombre2 === 'pepe'}`);  // false




