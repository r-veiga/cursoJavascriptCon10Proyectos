document.getElementById('cargar').addEventListener('click', cargarDatosALaAntigua);
// document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos () {
    // 1 - Crear objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2 - Abrir conexión 
    // (1) método HTTP; (2) url; (3) es Asíncrono (y/n)
    xhr.open('GET', 'AJAX01_datos.txt', true); 

    // 3 - Una vez que ha cargado
    xhr.onload = function() {
        if ( this.status === 200 ) {
            console.log( this.responseText );
            document.getElementById('listado').innerHTML = this.responseText;
        }
    };

    // 4 - Enviar el request 
    xhr.send();
}

function cargarDatosALaAntigua () {
    // 1 - Crear objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2 - Abrir conexión 
    // (1) método HTTP; (2) url; (3) es Asíncrono (y/n)
    xhr.open('GET', 'AJAX01_datos.txt', true); 

    // 3 - Una vez que ha cargado
    xhr.onreadystatechange = function() {

        // puedo ver cómo evoluciona el cambio de estado: 2, 3, 4
        console.log(`Estado ${this.readyState}`);  

        if ( this.readyState === 4 && this.status === 200 ) {
            console.log( this.responseText );
            document.getElementById('listado').innerHTML = this.responseText;
        }
    };

    // 4 - Enviar el request 
    xhr.send();
}