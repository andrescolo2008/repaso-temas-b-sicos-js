console.log('hola mundo');

const   personajes =['Gokú',' Vegeta', 'trunks'];

const [, , p3 ]= personajes 

console.log(p3);

const retornaArreglo= ( ) =>{
    return ['abc',123];
}
 const	[letras,numeros] = retornaArreglo();
 console.log(letras,numeros);

 // tarea
 //1. el primer valor del arr se llamará nombre.
 //2. se llamará setNombre
 
 const useState=( valor)=>{
    return [valor,()=>{console.log('hola mundo ')}];
 }
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [nombre,setNombre]= useState('Goku');

 console.log(nombre);
 
 setNombre();
