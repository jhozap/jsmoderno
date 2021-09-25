import { heroes } from './Data/heroes';

// console.log(heroes);

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// };

const getHeroeById = (id) =>  heroes.find( (heroe) => heroe.id === id);

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>  heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('DC'))