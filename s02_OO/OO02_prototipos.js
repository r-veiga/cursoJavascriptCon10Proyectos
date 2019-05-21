// Object.prototype
// Persona.prototype

function Persona( pNombre, pApellido, pFechaNac ) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.cumpleaños = new Date( pFechaNac );
    this.calcularEdad = function() {
        const diferencia =  Date.now() - this.cumpleaños.getTime();
        const edad = new Date(diferencia);
        return Math.abs(edad.getUTCFullYear() - 1970);
    }
}


const zinedine = new Persona('Zinedine', 'Zidane', '1972-06-23');
const iker = new Persona('Iker', 'Casillas', '1981-05-20');

console.log(`const zinedine = new Persona('Zidnedine', 'Zidane', '1972-06-23');`);
console.log(zinedine);

// --- Añadir función al PROTOTYPE
console.log(`// --- Añadir función al PROTOTYPE`);
Persona.prototype.darDatosPersonales = function() {
    return `${this.nombre} tiene ${this.calcularEdad()} años.`;
};
console.log(`zinedine.darDatosPersonales() = ${zinedine.darDatosPersonales()}`);
console.log(`iker.darDatosPersonales() = ${iker.darDatosPersonales()}`);


