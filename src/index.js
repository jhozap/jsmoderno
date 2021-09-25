// template string

const nombre = 'Jhonny';
const apellido = 'Zapata';

// const nombreCompleto = nombre + ' ' + Apellido;
// `` backtick -> altGr + }
const nombreCompleto = `${ nombre } ${ apellido }`;

// const nombreCompleto = `
//     ${ nombre } 
//     ${ apellido }
//     `;


console.log(nombreCompleto);


// function getSaludo() {
//     return 'Hola Mundo';
// }

// console.log(`Este es un texto: ${ getSaludo() }`);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);