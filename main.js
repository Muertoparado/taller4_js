var obj={};
var cont=0;
let arr=[];
do{
    let opcion = parseInt(prompt("---------MENU------------ \n1. Lectura de datos \n2. Crear objeto \n3. Mostrar objeto \n4. Crear array \n5. Mostrar array \n6. Elimina primer elemento del array\n7. Elimina último elemento del array\n8. Elimina cualquier elemento del array\n9. Agregar elemento al comienzo del array\n10. Agrega elementos al final del array \n11. crear array conn objetos \n12. Iterar array con objetos con For \n13. Iterar array con objetos con ForEach \n14. Iterar array con objetos con Map y crear copia \n15. Proceso personal \n0. SALIR................................................................"));


    
    switch(opcion){
        case 1:
            console.log("op1");
            dato();
            break;
        case 2:
            
            crearObjeto();
            console.log("op2");
            menu();
            break;
        case 3:
            mostrarObjeto();
            break;
        case 4:
            crearArray();
            /* alert(`array creado nombre ${arr}`) */
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
    
    do{
        let dat=prompt("digite caracter");
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
    
    }while(confirm("ingreasar otro dato"));
    menu();
    
}


function crearObjeto(){
   do{
    cont+=1;
   
    let nomb=prompt(`Nombre objeto #${cont}`);
    var obj = new Object();
    /* let nom=Object.fromEntries(new FormData(e.target)); */
    obj[`${nomb}`]=[];
    console.log(obj);
    
   }while(confirm("Desea ingresar otro objeto"));
   /* menu(); */
   return cont;
} 

function mostrarObjeto(){
    do{
        let index=Number(prompt("ingrese el index del objeto"))
        resul=obj[Object.keys(obj)[index]];
        alert(resul);
        console.log(resul);

    }while(confirm`buscar otro objeto`)
    /* menu(); */
}
function crearArray(){
    let nomarr= prompt('Nombre array')
        do{ 
            let elemt= prompt("elemento array")
            let nomarr = new Array(elemt);
        }while(confirm("otro elemento array"))
    console.log(nomarr);
    
}

function mostrarArray(){
      do{
        let index=Number(prompt("ingrese el index del array"))
        resul=obj[Object.keys(obj)[index]];
        alert(resul);
        console.log(resul);

    }while(confirm`buscar otro objeto`)
   /*  menu(); */

 }
 /*

function eliminarPrimerElemento(){
    let primele=arr.shift();
    menu();

}

function eliminarUltimoElemento() {
    let ultimo= array.pop();
    menu();
}
 function eliminarCualquierElemento(){
    let elemelim=arr.splice(pos,1)
    menu();
 }

function agregarElementoAlInicio(){
    let newelem=arr.unshift()
}

function agregarElementosAlFinal(){


    let nuevo= arr.push();

} */

    

