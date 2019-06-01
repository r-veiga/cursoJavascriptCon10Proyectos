// --- Acciones 
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?'); 
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

// --- Clase BEAN de presupuesto
class Presupuesto {
    constructor( presupuesto ) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    reducirPresupuestoRestante ( gasto = 0 ) {
        this.restante -= Number( gasto );
        this.establecerZonaDePeligro();
    }

    establecerZonaDePeligro () {
        let colorZonaDePeligroDelPresupuesto;

        if ( this.restante < this.presupuesto * 0.25 )      { colorZonaDePeligroDelPresupuesto = 'ROJO'; } 
        else if ( this.restante < this.presupuesto * 0.5 )  { colorZonaDePeligroDelPresupuesto = 'AMARILLO'; } 
        else                                                { colorZonaDePeligroDelPresupuesto = 'VERDE'; }
        
        return colorZonaDePeligroDelPresupuesto;
    }
}

// --- Clase de INTERFAZ
class Interfaz {

    // Después del primer tecleo del usuario: su presupuesto
    insertarPresupuesto( cantidad ) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    // 2 parámetros: mensaje y tipo de mensaje (warning, error...) 
    imprimirMensaje ( mensaje, tipo ) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add( 'text-center', 'alert' ); 
        if ( tipo === 'error' ) {
            mensajeDiv.classList.add( 'alert-danger' ); 
        } else { 
            mensajeDiv.classList.add( 'alert-success' ); 
        }
        mensajeDiv.appendChild( document.createTextNode( mensaje ));

        // Inserto en el DOM el DIV creado con el parámetro mensaje 
        document.querySelector('.primario').insertBefore( mensajeDiv, formulario );

        // El mensaje en el DOM es temporal, desaparece en cuestión de segundos 
        // y entonces borra todos los campos del formulario (por inducir error)
        setTimeout( function() {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000 );
    }

    agregarNuevoGastoALaLista( nombre, importe ) {
        const nodoLI = document.createElement('li');
        nodoLI.className = 'list-group-item d-flex justify-content-between align-items-center'; // guapear con clases de Bootstrap

        // NOTA: ésta fue la primera forma que use para añadir el texto al <li>
        // const nodoTextoDentroDeLI = document.createTextNode(`$ ${importe} - ${nombre}`);
        // nodoLI.appendChild( nodoTextoDentroDeLI );

        // NOTA: y ésta es la segunda forma usada praa añadir el texto al <li>
        nodoLI.innerHTML = `
            ${nombre}
            <span class='badge badge-primary badge-pill'>  $ ${importe} </span>
        `;

        const gastosUnorderedList = document.querySelector('#gastos .list-group');
        gastosUnorderedList.appendChild( nodoLI );
    }
    
    modificarPresupuestoRestante( cantidadGasto ) {
        // valor de la cantidad
        cantidadPresupuesto.reducirPresupuestoRestante( cantidadGasto );
        const restanteSpan = document.querySelector('span#restante');
        restanteSpan.innerHTML = cantidadPresupuesto.restante;        
        // color de fondo
        const presupuestoRestanteDiv = document.querySelector('.restante');
        const colorDelRestante = cantidadPresupuesto.establecerZonaDePeligro();
        if ( colorDelRestante === 'ROJO' ) { 
            presupuestoRestanteDiv.classList.remove('alert-success', 'alert-warning');
            presupuestoRestanteDiv.classList.add('alert-danger');
        }
        else if ( colorDelRestante === 'AMARILLO' ) {
            presupuestoRestanteDiv.classList.remove('alert-success', 'alert-danger');
            presupuestoRestanteDiv.classList.add('alert-warning');
        }
        else {
            presupuestoRestanteDiv.classList.remove('alert-warning', 'alert-danger');
            presupuestoRestanteDiv.classList.add('alert-success');
        }
    }
}

// --- Funciones nominales (utilidades de apoyo)
function esVacio ( valor ) {
    return valor === undefined || valor === null || valor === '';
}

function esErrorNumerico ( valor ) { 
    return esVacio( valor ) || isNaN( valor );
}

// --- Event listeners 
document.addEventListener('DOMContentLoaded', function() {
    if ( esErrorNumerico( presupuestoUsuario )) {
        window.location.reload();
    } else {
        console.log('Valor introducido correcto: ' + presupuestoUsuario);
        cantidadPresupuesto = new Presupuesto( presupuestoUsuario );

        const ui = new Interfaz();
        ui.insertarPresupuesto( cantidadPresupuesto.presupuesto );
    }
}); 

formulario.addEventListener('submit', function( eventoSubmit ) {
    eventoSubmit.preventDefault();
    const nombreGasto = document.querySelector('#gasto').value; 
    const cantidadGasto = document.querySelector('#cantidad').value; 
    
    const ui = new Interfaz(); 

    // Comprobación de que el usuario no se ha dejado campos vacíos
    if( esVacio( nombreGasto ) || esErrorNumerico( cantidadGasto ) ) {
        ui.imprimirMensaje( 'Valores incorrectos en los campos del formulario.', 'error');
    } else {
        ui.imprimirMensaje( 'Correcto', 'correcto' );
        ui.agregarNuevoGastoALaLista( nombreGasto, cantidadGasto );
        ui.modificarPresupuestoRestante( cantidadGasto );
    }
});
