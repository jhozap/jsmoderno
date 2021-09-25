import { heroes } from './Data/heroes';
// importacion por defecto
// import heroes from './Data/heroes';

// importacion por defecto + importacion individual
// import heroes, { owners } from './Data/heroes';

// importacion especifica
// import { heroes, owners } from './Data/heroes';


// console.log(owners);


const getHeroeById = (id) =>  heroes.find( (heroe) => heroe.id === id);

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>  heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('DC'));