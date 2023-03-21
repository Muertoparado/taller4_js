let opcion = parseInt(prompt("---------MENU------------ \n1. Lectura de datos \n2. Crear objeto \n3. Mostrar objeto \n4. Crear array \n5. Mostrar array \n6. Elimina primer elemento del array\n7. Elimina último elemento del array\n8. Elimina cualquier elemento del array\n9. Agregar elemento al comienzo del array\n10. Agrega elementos al final del array \n11. crear array conn objetos \n12. Iterar array con objetos con For \n13. Iterar array con objetos con ForEach \n14. Iterar array con objetos con Map y crear copia \n15. Proceso personal \n0. SALIR................................................................"));

do{
    switch(opcion){
        case 1:
            console.log("op1");
            dato();
            break;
        case 2:
            const obj={};
            var cont=0;
            crearObjeto();
            break;
        case 3:
            mostrarObjeto();
            break;
        case 4:
            crearArray();
            break;
        case 5:
            mostrarArray();
            break;
        case 6:
            eliminarPrimerElemento();
            break;
        case 7:
            eliminarUltimoElemento();
            break;
        case 8:
            eliminarCualquierElemento();
            break;
        case 9:
            agregarElementoAlInicio();
            break;
        case 10:
            agregarElementosAlFinal();
            break;
        case 11:
            crearArrayConObjetos();
            break;
        case 12:
            iterarArrayConObjetosConFor();
            break;
        case 13:
            iterarArrayConObjetosConForEach();
            break;
        case 14:
            iterarArrayConObjetosConMap();
            break;
        case 15:
            procesoPersonal();
            break;

            default:
                console.log("OPCION INVALIDA");

    }

}while(opcion!=0);

function dato(){
    let dat=prompt("digite caracter");
    do{
        if (typeof dat === 'string') {
            console.log('value is a string');
            alert('value is a string');
          } else if (typeof dat === 'number') {
            console.log('value is a number');
            alert('value is a number');
          } else {
            console.log('value is not a string or a number');
            alert('value is not a string or a number');
          }
    
    }while(confirm);
    
}


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

function mostrarObjeto(){
    do{
        let index=Number(prompt("ingrese el index del objeto"))
        resul=obj[Object.keys(obj)[index]];
        alert(resul);
        console.log(resul);

    }while(confirm`buscar otro objeto`)
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

    

