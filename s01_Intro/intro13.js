const persona = {
    nombre: 'Zinedine', 
    puesto: 'entrenador', 
    equipos: ['Castilla', 'Real Madrid'], 
    edad: 40, 
    balonDeOro: true, 
    domicilio: {
        zona: 'La Finca en Pozuelo', 
        provincia: 'Madrid', 
        pais: 'España'
    },
    saludar: function() { console.log(`Hola soy ${this.nombre}`); }
}

console.log(persona);
console.log(`persona.edad = ${persona.edad}`);
console.log(`persona.equipos[1] = ${persona.equipos[1]}`);
console.log(`persona['domicilio']['provincia'] = ${persona['domicilio']['provincia']}`);
console.log(` --- ATENCIÓN AL SIGUIENTE BLOQUE --- `);
console.log('console.log("persona.saludar() = ${persona.saludar()}")');
console.log(` --- RESULTADO: `);
console.log(`persona.saludar() = ${persona.saludar()}`);
console.log(` --- FINAL DEL BLOQUE --- `);
