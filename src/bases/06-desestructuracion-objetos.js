console.log('hola mundo');

const persona ={
    nombre: 'Tony',
    edad:45,
    clave:'Ironman',
    rango:'soldado'
};

const {nombre,edad,clave} = persona;

// console.log(nombre);

const useContext = ({clave,nombre,edad,rango='capitán'} ) =>{
    // console.log(nombre,edad,rango);
    return{
        nombreClave:clave,
        anios: edad,
        location:{
            lat:1112223,
            lng:334456
        }
    }
    
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave,anios,location:{lat,lng}}= useContext(persona)
// const avenger = useContext(persona);
// const {nombreClave,anios} = avenger
console.log(nombreClave,anios,lat,lng);
console.log(lat,lng);



