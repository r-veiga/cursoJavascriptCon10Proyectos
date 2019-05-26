
// --- Clase BEAN que almacenará los datos del formulario
function Seguro ( marca, anio, tipo ) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function ( informacion ) {

    let cantidad;
    const base = 2000;

    /*
        1 = americano => pondera al 1.15
        2 = asiatico  => pondera al 1.05 
        3 = europeo   => pondera al 1.35 
    */    
    switch( this.marca ) {
        case '1': 
            cantidad = base * 1.15;
            break;
        case '2': 
            cantidad = base * 1.05;
            break;
        case '3': 
            cantidad = base * 1.35;
            break;
    }

    /*
        Resta a cantidad un 3% anual
    */
   cantidad -= (yearMax - this.anio) * 0.03 * cantidad;       

    /*
        Seguro "básico"   => 1.30
        Seguro "completo" => 1.50
    */
   if ( this.tipo === 'basico' ){
       cantidad *= 1.30;
   } else {
       cantidad *= 1.50
   }

   return cantidad;
};

function Interfaz() {}
Interfaz.prototype.mostrarError = function ( mensaje, tipo ) {
// Crea un DIV que aloja un mensaje de error antes del primer elemento del formulario

    const errorDiv = document.createElement('div');
    if ( tipo === 'error' ) { errorDiv.classList = 'mensajeShout error'; } 
    else                    { errorDiv.classList = 'mensajeShout correcto'; }
    errorDiv.innerHTML = `${mensaje}`;

    formulario.insertBefore(errorDiv, document.querySelector('.form-group'));

    setTimeout( function() {
        document.querySelector('.mensajeShout').remove();
    }, 3000);
};
Interfaz.prototype.mostrarResultado = function ( seguro, total ) {
    const resultadoDiv = document.getElementById('resultado');
    let marca; 
    switch(seguro.marca) {
        case '1': 
            marca = 'Auto americano';
            break; 
        case '2': 
            marca = 'Auto asiático';
            break; 
        case '3': 
            marca = 'Auto europeo';
            break; 
    }

    const innerResultadoDiv = document.createElement('div');
    innerResultadoDiv.innerHTML = `
        <p>** RESUMEN **</p> 
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Cobertura: ${seguro.tipo}</p>
        <p>TOTAL: $ ${total}</p>
    `;

    // Borra el resumen previo porque tengo que actualizarlo
    const resultadoAnterior = document.querySelector('#resultado div');
    if (resultadoAnterior != null) {
        resultadoAnterior.remove();
    }

    // Introduce nuevo resumen en secuencia: animación (3seg) + resumen
    const spinnerDiv = document.querySelector('#cargando img');
    spinnerDiv.style.display = 'block'; // animación
    setTimeout( function() {
        spinnerDiv.style.display = 'none'; // oculta animación
        resultadoDiv.appendChild(innerResultadoDiv);
    }, 3000);

};

// --- Elementos del DOM
const formulario = document.getElementById('cotizar-seguro');
const formSelectYear = document.getElementById('anio');
const formSelectMarca = document.getElementById('marca');

// --- Variables de trabajo 
const   yearMax = new Date().getFullYear()
      , yearMin = yearMax - 20;

// --- Event listeners 
formulario.addEventListener( 'submit', function( eventoSubmit ) {
    eventoSubmit.preventDefault();

    const marcaSeleccionada = formSelectMarca
                                .options[formSelectMarca.selectedIndex]
                                .value;
    const anyoSeleccionado = formSelectYear
                                .options[formSelectYear.selectedIndex]
                                .value;
    const tipoSeleccionado = document
                                .querySelector('input[name="tipo"]:checked')
                                .value;

    const interfaz = new Interfaz(); 
    
    if( marcaSeleccionada === '' || anyoSeleccionado === '' || tipoSeleccionado === '' ) {
        interfaz.mostrarError('Falta introducir datos en el formulario.', 'error');
    } else {
        const seguro = new Seguro( marcaSeleccionada, anyoSeleccionado, tipoSeleccionado );
        const cantidad = seguro.cotizarSeguro( seguro );
        interfaz.mostrarResultado( seguro, cantidad );
    }
    
});

// --- Carga de datos en elementos del DOM :: en <SELECT id="anio"> introduce <OPTIONS> 
for ( let i = yearMax ; i > yearMin ; i-- ) {
    let optionDeSelectYear = document.createElement('option');
    optionDeSelectYear.value = i;
    optionDeSelectYear.innerHTML = i;
    formSelectYear.appendChild(optionDeSelectYear);
}