const producto1 = 'Pizza'; 
const precio1 = 12;
const producto2 = 'Hamburguesa'; 
const precio2 = 8;

let htmlSnip1, htmlSnip2, htmlSnip3;

console.log(`--- MÉTODO ANTIGUO `); 
htmlSnip1 = '<ul>' + 
                '<li>' + 'Orden: ' + producto1 + '</li>' +
                '<li>' + 'Precio: ' + precio1 + '</li>' +
                '<li>' + 'Orden: ' + producto2 + '</li>' +
                '<li>' + 'Precio: ' + precio2 + '</li>' +
                '<li>' + '** Total: ' + (precio1 + precio2) + ' **' + '</li>' +
            '</ul>';

console.log(`--- STRING TEMPLATES `); 
htmlSnip2 = `<ul>
                <li>Orden: ${producto1}</li>
                <li>Precio: ${precio1}</li>
                <li>Orden: ${producto2}</li>
                <li>Precio: ${precio2}</li>
                <li>** Total: ${precio1 + precio2} ** </li>
            </ul>`;

console.log(`--- STRING TEMPLATES; esta nueva forma puede emplear funciones`); 
htmlSnip3 = `<ul>
                <li>Orden: ${producto1}</li>
                <li>Precio: ${precio1}</li>
                <li>Orden: ${producto2}</li>
                <li>Precio: ${precio2}</li>
                <li>** Total: ${total( precio1, precio2)} ** </li>
            </ul>`;

document.getElementById('app1').innerHTML = htmlSnip1;
document.getElementById('app2').innerHTML = htmlSnip2;
document.getElementById('app3').innerHTML = htmlSnip3;

function total(precio1, precio2) {
    return precio1 + precio2;
}

