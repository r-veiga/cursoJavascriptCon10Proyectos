const autos = [
    { modelo: 'Mustang'  , motor: 6.2 } ,
    { modelo: 'Camaro'   , motor: 6.1 } ,
    { modelo: 'Corvette' , motor: 6.3 }
];

console.log(autos[0].modelo);

for(let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} tiene un motor de ${autos[i].motor} cc.`);
}

console.log(`--- ACTUANDO CON EL ARRAY: forEach & map`);
const carrito = [
    { id: 1, producto: 'Camisa'  },
    { id: 2, producto: 'Juguete' },
    { id: 3, producto: 'Libro'   },
    { id: 4, producto: 'Perfume' },
];
console.log(`const carrito = [
    { id: 1, producto: 'Camisa'  },
    { id: 2, producto: 'Juguete' },
    { id: 3, producto: 'Libro'   },
    { id: 4, producto: 'Perfume' },
];
`);

console.log(`--- forEach(item)`);
console.log(`carrito.forEach( function( itemCarrito ) {
    console.log('Producto con propiedad "id=" + itemCarrito.id + ' del carro es: ' + itemCarrito.producto);
});`);

carrito.forEach( function( itemCarrito ) {
    console.log(`Producto con propiedad id=${itemCarrito.id} del carro es: ${itemCarrito.producto}`);
});

console.log(`--- forEach(item, index)`);
console.log(`carrito.forEach( function( itemCarrito, indice ) {
    console.log('Item del array número ' + indice + ' del carro es: ' + carrito[indice].producto);
});`);

carrito.forEach( function( itemCarrito, indice ) {
    console.log(`Item del array número ${indice} del carro es: ${carrito[indice].producto}`);
});

console.log(`--- map`);
console.log(`carrito.map( function( itemCarrito ) { return 'comprado ' + itemCarrito.producto; });`);
const productosComprados = carrito.map( function( itemCarrito ) { 
    return 'comprado ' + itemCarrito.producto;
});
console.log(productosComprados);
