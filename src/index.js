// objetos literales
// const vehiculo = { 
//     marca: 'Toyota',
//     sistema: 'Automatico',
//     cilindraje: 1600,
// };


// console.log(vehiculo);
// console.table(vehiculo);

// const vehiculo = { 
//     marca: 'Toyota',
//     sistema: 'Automatico',
//     cilindraje: 1600,
//     ubicacion: {
//         lon: 12.3124,
//         lat: 19.4234
//     }
// };

// // por defecto la consola del navegador me imprime los elementos en orden alfabetico
// console.log(vehiculo);



const vehiculo = { 
    marca: 'Toyota',
    sistema: 'Automatico',
    cilindraje: 1600,
    ubicacion: {
        lon: 12.3124,
        lat: 19.4234
    }
};

console.log(vehiculo);

// asignar de esta manera, no copia el valor si no que copia
// la referencia al espacio en memoria de la otra variable
// const vehiculo2 = vehiculo;

// const vehiculo2 = { marca: 'Nisan',  };

// operador spread para clonar la estructura
const vehiculo2 = { ...vehiculo  };

vehiculo2.marca = 'Nisan';

console.log(vehiculo2);
console.log(vehiculo);