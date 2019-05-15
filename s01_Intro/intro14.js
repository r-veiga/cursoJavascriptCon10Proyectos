const autos = [
    { modelo: 'Mustang'  , motor: 6.2 } ,
    { modelo: 'Camaro'   , motor: 6.1 } ,
    { modelo: 'Corvette' , motor: 6.3 }
];

console.log(autos[0].modelo);

for(let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} tiene un motor de ${autos[i].motor} cc.`);
}
