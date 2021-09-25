// Desestructuracion o asignacion desestructurante

const vehiculo = { 
    marca: 'Toyota',
    sistema: 'Automatico',
    cilindraje: 1600,
};

console.log(vehiculo.marca);
console.log(vehiculo.sistema);
console.log(vehiculo.cilindraje);


const {  marca: miMarca, sistema, cilindraje} = vehiculo;

console.log(miMarca);
console.log(sistema);
console.log(cilindraje);


// const retornaVehiculo = (vehiculo) => {
//     console.log(vehiculo)

//     const {  marca, sistema, cilindraje} = vehiculo;
//     console.log(marca, sistema, cilindraje);
// };


// const retornaVehiculo = ({ marca, sistema, cilindraje }) => {
//     console.log(marca, sistema, cilindraje);
// };

// retornaVehiculo(vehiculo);

// const retornaVehiculo = ({ marca, sistema, cilindraje }) => {
//     return {
//         nombreMarca: marca,
//         tipoSistema: sistema,        
//     }
// };

// const miVechiculo = retornaVehiculo(vehiculo);

// console.log(miVechiculo);

// const {nombreMarca, tipoSistema} = retornaVehiculo(vehiculo);

// console.log(nombreMarca, tipoSistema);



// const retornaVehiculo = ({ marca, sistema, cilindraje }) => {
//     return {
//         nombreMarca: marca,
//         tipoSistema: sistema,   
//         ubicacion: {
//             lat:12.124,
//             lon: 14.2342
//         }     
//     }
// };

// const {nombreMarca, tipoSistema, ubicacion: {lat, lon}} = retornaVehiculo(vehiculo);

// console.log(nombreMarca, tipoSistema);
// console.log(lat, lon);