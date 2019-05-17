try {
    invocacionQueVaAFallarPorInexistente();
}
catch( error ) {
    console.log(error);
    console.log(`Error recogido en CATCH, así que se continúa la ejecución del script`);
    console.log(`-- -- -- -- -- -- `);
}
finally {
    console.log(`Esto es bloque FINALLY que se ejecuta siempre`);
    console.log(`-- -- -- -- -- -- `);
}
let retornoUndefined = obtenerClientesMock();


function obtenerClientesMock() { 
    console.log(`... descargando los clientes Mock`);

    setTimeout( function() { 
        console.log('Completada descarga clientes Mock');
    } 
    , 3000 );
}

