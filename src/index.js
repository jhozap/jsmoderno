// Promesas
// 1. me solicitan ejecutar una tarea 
// 2. me comprometo a realizar dicha tarea
// 3. luego de ejecutar la tarea, reporto al jefe si la pude realizar o no

// son asincronas por defecto
// const promesa = new Promise();

// se crean con un callback con dos argumentos, resolve y reject
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         console.log('2 segundos despues');
//     }, 2000);
// });

// // promesa resuelta de manera correcta
// promesa.then();

// // promes que no se pudo ejecutar de manera correcta y se rechazo
// promesa.reject();

// // este metodo se ejecuta sin importar si la promesa fue exitosa o no
// // y se ejecuta al final de todo
// promesa.finally();


// ****************************************************************************

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// });

// promesa resuelta de manera correcta
// promesa.then( () => {
//     console.log('Then de la promesa');
// });

// *******************************************************

// import { getHeroeById } from './Data/funcionesHeroe';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// // promesa resuelta de manera correcta
// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( err => console.warn(err));


// ******************************************************

import { getHeroeById } from './Data/funcionesHeroe';


const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            // resolve(heroe);

            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }

            // reject('No se pudo encontrar el heroe');
        }, 2000)
    });

    return promesa;
};



getHeroeByIdAsync(4)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));


// imprimir por referencia de objeto
// getHeroeByIdAsync(10)
//     .then(console.log)
//     .catch(console.warn);






