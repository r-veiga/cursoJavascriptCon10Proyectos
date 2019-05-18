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

console.log(`--- iteración a través de las propiedades de un objeto Javascript`);
console.log(`
    const automovil = {
        modelo: 'Camaro', 
        motor: 6.1,
        anio: 1996,
        marca: 'Chevrolet',

        arrancar: function() { console.log('El coche está arrancando'); }
    };
`);

const automovil = {
    modelo: 'Camaro', 
    motor: 6.1,
    anio: 1996,
    marca: 'Chevrolet',

    arrancar: function() { console.log('El coche está arrancando'); }
};

console.log(`--- 1er recorrido "for" a automovil: ver propiedades`);
for( let propiedad in automovil ) {
    console.log(`${propiedad} de tipo ${typeof propiedad}: ${automovil[propiedad]}`);
}

console.log('--- Aunque "typeof arrancar = string", realmente es una función y puedo ejecutarla');
console.log(`automovil['arrancar']() => ${automovil['arrancar']()}`)
console.log('--- otra propiedad genéricamente string, como "modelo" fallaría al ejecutar');
console.log(`automovil['modelo']();  // Uncaught TypeError: automovil[propiedad] is not a function}`);

console.log(`--- Iteradores => Set, Map`);
const ciudades = ['New York', 'Madrid', 'París', 'Berlín'];
const ordenes = new Set([123, 321, 131, 102]);
const datos = new Map();
datos.set('nombre', 'Obama');
datos.set('ocupacion', 'presidente');
datos.set('esRetirado', true);
console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log(`iterador "entries()" de un array ==> 
for (let item of ciudades.entries() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ciudades.entries() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "entries()" de un Set ==> 
for (let item of ordenes.entries() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ordenes.entries() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "entries()" de un Map ==> 
for (let item of datos.entries() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of datos.entries() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "values()" de un array ==> 
for (let item of ciudades.values() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ciudades.values() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "values()" de un Set ==> 
for (let item of ordenes.values() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ordenes.values() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "values()" de un Map ==> 
for (let item of datos.values() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of datos.values() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "keys()" de un array ==> 
for (let item of ciudades.keys() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ciudades.keys() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "keys()" de un Set ==> 
for (let item of ordenes.keys() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ordenes.keys() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador "keys()" de un Map ==> 
for (let item of datos.keys() ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of datos.keys() ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador DEFAULT (no se especifica) de un array ==> 
for (let item of ciudades ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ciudades ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador DEFAULT (no se especifica) de un Set ==> 
for (let item of ordenes ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of ordenes ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}

console.log(`iterador DEFAULT (no se especifica) de un Map ==> 
for (let item of datos ) {
    console.log(item);
    console.log(\`\\$\\\{item\\\} = \$\{item\}\`);
}
`);
for (let item of datos ) {
    console.log(item);
    console.log(`\$\{item\} = ${item}`);
}
