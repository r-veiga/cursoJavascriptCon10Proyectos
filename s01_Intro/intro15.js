// -------- FUNCIONES CON NOMBRE

console.log(`// -------- FUNCIONES CON NOMBRE`);

function imprimeSaludo( nombre ) {
    console.log("Hola " + nombre);
}

function devuelveSaludo( nombre ) {
    return "Hola " + nombre;
}

function suma( a, b ){ 
    return a + b;
}

console.log(`var retorno = imprimeSaludo("Arturo") => ${imprimeSaludo("Arturo")}`);
console.log(`var retorno = devuelveSaludo("Adela") => ${devuelveSaludo("Adela")}`);
console.log(`let total = suma( 1, 4 ) => ${suma( 1, 4 )}`);
console.log(`let otroTotal = suma ( 1, "4" ) = ${suma ( 1, "4" )}`);

// -------- FUNCIONES ANÓNIMAS

console.log(`// -------- FUNCIONES ANÓNIMAS`);
let hola  = function( nombre ) { 
    console.log("Hola " + nombre); 
};
let darHola = function( nombre ) { 
    return "Hola " + nombre; 
};
let sumatorio = function( a, b ) { 
    return a + b; 
};

console.log(`retorno1 = hola("Benito") => ${retorno1 = hola("Benito")}`);      
console.log(`retorno2 = darHola("Bárbara") => ${darHola("Bárbara")}`);              
console.log(`let total = sumatorio( 1, 4 ) => ${sumatorio( 1, 4 )}`);          
console.log(`let otroTotal = sumatorio ( 1, "4" ) => ${sumatorio ( 1, "4" )}`); 

// -------- FUNCIONES IIFE

console.log(`// -------- FUNCIONES IIFE`);
( function( altura ) {
    console.log('La altura de esta montaña es superior a ' + altura);
}
( '8000 metros' ) );   // La altura de esta montaña es superior a 8000 metros

console.log(`( function( altura ) 
{
    console.log('La altura de esta montaña es superior a ' + altura);
}
( '8000 metros' ) );  => ...`);

// -------- MÉTODOS DE PROPIEDAD

console.log(`// -------- MÉTODOS DE PROPIEDAD`);

console.log(`const musica = {
    reproducir: function( cancion ) { console.log('Estoy reproduciendo la canción: ' + cancion); }
};

musica.cambiarCancion = function( otraCancion ) {
    console.log('Cambio a la canción:' + otraCancion);
}
\n`);

const musica = {
    reproducir: function( cancion ) { console.log('Estoy reproduciendo la canción: ' + cancion); }
};
musica.cambiarCancion = function( otraCancion ) {
    console.log('Cambio a la canción: ' + otraCancion);
}

let retornoUndefined = musica.reproducir('Hey Jude');
console.log(`let retornoUndefined = musica.reproducir('Hey Jude') => ${retornoUndefined}`);

retornoUndefined = musica.cambiarCancion('I am the walrus');
console.log(`retornoUndefined = musica.cambiarCancion('I am the walrus') => ${retornoUndefined}`);

// -------- CONTROLAR RECEPCIÓN DE UN PARÁMETRO

console.log(`// -------- CONTROLAR RECEPCIÓN DE UN PARÁMETRO`);
function despedirALaAntigua( nombre ) {
    if( typeof nombre === 'undefined' ) { 
        nombre = 'Visitante desconocido';
    }
    console.log(`Adiós ${nombre}`);
}

function despedirALaModerna( nombre = 'Visitante desconocido' ) {
    console.log(`Adiós ${nombre}`);
}

despedirALaAntigua();
despedirALaModerna();

function sumaDefaultVals( a = 3, b = 5 ) {
    return a + b;
}

console.log(`sumaDefaultVals (30, 10) => ${sumaDefaultVals(30,10)}`);
console.log(`sumaDefaultVals (90) => ${sumaDefaultVals(90)}`);
