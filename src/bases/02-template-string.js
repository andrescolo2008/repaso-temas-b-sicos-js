console.log('???');

let nombre='andres ';
let apellido= ' corrrea ';

// let nombreCompleto = nombre +''+ apellido;
let nombreCompleto = `
${nombre} 
${apellido}

`;
console.log(nombreCompleto);

const getNombre= (nombre ) =>{
    return ` hola ${nombre}`
}

console.log( nombreCompleto , getNombre(nombre) );
