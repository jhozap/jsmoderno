// Desestructuracion o asignacion desestructurante

const vehiculo = { 
    marca: 'Toyota',
    sistema: 'Automatico',
    cilindraje: 1600,
};

let marca = 'Nisan';

console.log(vehiculo.marca);
console.log(vehiculo.sistema);
console.log(vehiculo.cilindraje);



// const { marca: miMarca, sistema, cilindraje } = vehiculo;

// console.log(miMarca);
// console.log(sistema);
// console.log(cilindraje);


// const retornaVehiculo = (vehiculo) => {
//     const {  marca, sistema, cilindraje} = vehiculo;
//     console.log(marca, sistema, cilindraje);
// };


// const retornaVehiculo = ({ marca, sistema, cilindraje }) => {
//     console.log(marca, sistema, cilindraje);
// };

// retornaVehiculo(vehiculo);

const retornaVehiculo = ({ marca, sistema, cilindraje }) => {
    return {
        nombreMarca: marca,
        tipoSistema: sistema,        
    }
};

const miVechiculo = retornaVehiculo(vehiculo);

console.log(miVechiculo);

const {nombreMarca, tipoSistema} = retornaVehiculo(vehiculo);

console.log(nombreMarca, tipoSistema);

vehiculo.marca = 'Chevrolet';
console.log(vehiculo);
miVechiculo.nombreMarca = 'Nisan';
console.log(miVechiculo);



const retornaVehiculo2 = ({ marca, sistema, cilindraje }) => {
    return {
        nombreMarca2: marca,
        tipoSistema2: sistema,   
        ubicacion: {
            lat:12.124,
            lon: 14.2342
        }     
    }
};

const {nombreMarca2, tipoSistema2, ubicacion:{lat, lon}} = retornaVehiculo2(vehiculo);

console.log(nombreMarca2, tipoSistema2);
// console.log(ubicacion.lat, ubicacion.lon);
console.log(lat, lon);