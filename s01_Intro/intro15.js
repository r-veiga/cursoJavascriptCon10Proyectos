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