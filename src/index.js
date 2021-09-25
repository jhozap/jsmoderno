// Arreglos -> coleccion de informacion
// para crear arreglos literales se deben utilizar las llavez cuadradas
// esta forma se usa cuando se quiere inicializar de inmediato el arreglo
// con alguna cantidad de indices por defecto
// const arreglo = new Array();

// let arreglo = [];
// arreglo.push(1);

// let arreglo2 =  [...arreglo];
// arreglo2.push(5);

// console.log(arreglo);
// console.log(arreglo2);

/**------------------------------------------- */

// const arreglo = [1, 2, 3, 4];
// // arreglo.push(1);

// // para utilizar el operador spread con arreglos ponemos llaves cuadradas []
// let arreglo2 = [...arreglo, 5];
// // arreglo2.push(5);

// console.log(arreglo);
// console.log(arreglo2);


/**------------------------------------------- */

const arreglo = [1, 2, 3, 4];
arreglo.push(1);

// para utilizar el operador spread con arreglos ponemos llaves cuadradas []
let arreglo2 = [...arreglo, 5];

let arreglo3 = arreglo2.map( (numero) => {
    return numero * 2;
});



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);