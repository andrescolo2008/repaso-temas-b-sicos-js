console.log('hola mundo');

const saludar =  (nombre ) =>{

    return  `hola  soy ${nombre}`;
}

const saludar2 =  (nombre ) => `hola  soy ${nombre}`;
const saludar3=  ( ) => `hola  nosoy nadie`;


console.log(saludar('Vegeta'));

console.log(saludar2('Goku'));
console.log(saludar3('bulma'));

const getUser= ( ) =>({
    uid:'abccc1',
    username:'Carioca_2023'
});
const user=getUser();
console.log(user);
// tarea

const getUsuarioActivo= ( nombre) =>({   
        uid:'000001',
        username:nombre
  
});
const usuarioActivo=getUsuarioActivo('Andres');
console.log(usuarioActivo);







