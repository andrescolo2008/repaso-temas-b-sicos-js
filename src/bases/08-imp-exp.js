// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes'

import { heroes,owners } from "../data/heroes";

// console.log(heroes);

const getHeroeById= (id) => heroes.find((heroe)=> heroe.id === id);

    // return id = heroes[id];

 const heroId= getHeroeById(2);
// console.log(heroId);

const getHeroeByOwner= (owner) => heroes.filter(heroe=> heroe.owner=== owner);

    // return id = heroes[id];

 const heroOwner= getHeroeByOwner('DC');
// console.log(heroOwner);

export{
    getHeroeById
}
 



  