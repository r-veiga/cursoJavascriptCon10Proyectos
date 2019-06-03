document.getElementById('empleado').addEventListener('click', cargaDatosEmpleado);
document.getElementById('empleados').addEventListener('click', cargaDatosEmpleados);

// --- Lo importante en esta demostración es el uso de "JSON.parse(...)"

function cargaDatosEmpleado () {
    // 1 - Crear objeto XMLHttpRequest
    // 2 - Abrir (¿definir cadena de?) conexión "XMLHttpRequest.open(metodoHttp, url, esAsincrono)"
    // 3 - Defino la función a ejecutar cuando los datos estén "listos"
    // 4 - Enviar el request 
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'AJAX02_empleado.json', true); 
    xhr.onload = function() {
        if ( this.status === 200 ) {
            const persona = JSON.parse ( this.responseText );
            console.log( persona );
            const htmlTemplate = `
                <ul>
                    <li>Nombre: ${persona.nombre} ${persona.apellido}</li>
                    <li>es ${persona.puesto} en ${persona.empresa}</li>
                </ul>
            `;
            document.getElementById('datosEmpleado').innerHTML = htmlTemplate;
        }
    };
    xhr.send();
}

function cargaDatosEmpleados () {
    // 1 - Crear objeto XMLHttpRequest
    // 2 - Abrir (¿definir cadena de?) conexión "XMLHttpRequest.open(metodoHttp, url, esAsincrono)"
    // 3 - Defino la función a ejecutar cuando los datos estén "listos"
    // 4 - Enviar el request 
    
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'AJAX02_empleados.json', true); 
    xhr.onload = function() {
        if ( this.status === 200 ) {
            const personas = JSON.parse ( this.responseText );
            console.log( personas );
            
            let htmlTemplate = '';
            personas.forEach( function( itemPersonas ) {
                htmlTemplate += `
                    <ul>
                        <li>Nombre: ${itemPersonas.nombre} ${itemPersonas.apellido}</li>
                        <li>es ${itemPersonas.puesto} en ${itemPersonas.empresa}</li>
                    </ul>
                `;
            }); 

            document.getElementById('datosEmpleados').innerHTML = htmlTemplate;
        }
    };
    xhr.send();
}

