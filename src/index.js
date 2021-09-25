const marcas = ['Toyota', 'Nisan', 'Chevrolet'];

// console.log(marcas[0]);
// console.log(marcas[1]);
// console.log(marcas[2]);

// const [ m1 ] = marcas;
// const [ ,m2 ] = marcas;
const [ , ,m3 ] = marcas;

// console.log(m1);
// console.log(m2);
console.log(m3);

const retornaAreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaAreglo();

console.log(letras, numeros);


// Ejercicio

const ejercicio = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
};

// const arr = ejercicio('Toyota');
// console.log(arr);

const  [nombre, setEjercicio]= ejercicio('Toyota');


// primera forma de llamar la funcion
// arr[1]();

// ejercicio
console.log(nombre);
setEjercicio();
