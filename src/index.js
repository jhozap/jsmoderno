// funcion convencional
// function saludar(nombre) {
//     return `Hola, ${ nombre }`;
// };


// funcion mendiante asignacion constante
// const saludar = function(nombre) {
//     return `Hola, ${ nombre }`;
// }

// funcion de flecha
const saludar = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Jhonny'));

// // funcion de flecha optimizada
const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2('Jhonny'));

// saludar = 20;

// console.log(saludar('Jhonny'));
// console.log(saludar2('Jhonny'));


const getUSer = () => {
    return {
        id: 123,
        username: 'Usuario05'
    }
};

const getUSer2 = () => ({
    id: 123,
    username: 'Usuario05'
});

console.log(getUSer());
console.log(getUSer2());

// ejercicio de retorno implicito
// function getUsuarioActivo(nombre) {
//     return {
//         id: 123,
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
    id: 123,
    username: nombre
});



console.log(getUsuarioActivo('Pruebas'));

