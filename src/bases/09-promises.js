import { getHeroeById } from "./bases/08-imp-exp";

//console.log('hola mundo');

// const promesa = new Promise((resolve, reject)=> {

// setTimeout ( () =>{

// // console.log('2 segundos después ');
// const p1=getHeroeById(2);
// // console.log(p1);

// resolve(p1);
// reject('No s pudo encontrar el héroe')
// },2000)

// }) 
// promesa.then ((heroe ) =>{
//     console.log('heroe',heroe);
    
// })
// .catch( err =>console.warn(err));

const getHeroeByIdAsync= ( id) =>{

    return new Promise((resolve, reject)=> {

        setTimeout ( () =>{
        
        // console.log('2 segundos después ');
        const p1=getHeroeById(id);
        // console.log(p1);
        if(p1){
            resolve(p1);
        } else {
            reject('No s pudo encontrar el héroe')
        }

        },2000)
        
        }) ;

}

getHeroeByIdAsync(2)
.then (console.table)

.catch( console.warn);