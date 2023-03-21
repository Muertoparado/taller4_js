
crearObjeto();
const obj={};
var cont=0;

function crearObjeto(){
   do{
    cont++;
   
    let nomb=prompt(`Nombre objeto #${cont}`);
    var obj = new Object();
    /* let nom=Object.fromEntries(new FormData(e.target)); */
    obj[`${nomb}`]={};
    console.log(obj);
    
   }while(confirm("Desea ingresar otro objeto"));
} 
/* 
function mostrarObjeto(){
    do{

    }while(``)
}


elimprimelements();
let primele=arr.shift();


function eliminarUltimo{
    let ultimo= array.pop();
}
elimcualquiera()
let elemelim=arr.splice(pos,1)

añadir comienzo arr()
let newelem=arr.unshift()

añadir elemento al final array 
    let nuevo= arr.push();

 */

    

