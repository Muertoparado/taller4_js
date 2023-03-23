var obj={};
var cont=0;
let arr=[];
var ar='';
var x='';
var cont2=0;
let objarr={};
ob='';
menu();
function menu(){
let opcion = parseInt(prompt("---------MENU------------ \n1. Lectura de datos \n2. Crear objeto \n3. Mostrar objeto \n4. Crear array \n5. Mostrar array \n6. Elimina primer elemento del array\n7. Elimina último elemento del array\n8. Elimina cualquier elemento del array\n9. Agregar elemento al comienzo del array\n10. Agrega elementos al final del array \n11. crear array conn objetos \n12. Iterar array con objetos con For \n13. Iterar array con objetos con ForEach \n14. Iterar array con objetos con Map y crear copia \n15. Proceso personal \n0. SALIR................................................................"));
x=opcion;
}
do{
    switch(x){
        case 1:
            console.log("op1");
            dato();
            break;
        case 2:
            console.log("op2");
            crearObjeto();
            break;
        case 3:
            console.log("op3");
            mostrarObjeto();
            break;
        case 4:
            console.log("op4");
            crearArray();   
            break;
        case 5:
            console.log("op5");
            mostrarArray();
            break;
        case 6:
            console.log("op6");
            eliminarPrimerElemento();
            break;
        case 7:
            console.log("op7");
            eliminarUltimoElemento();
            break;
        case 8:
            console.log("op8");
            eliminarCualquierElemento();
            break;
        case 9:
            console.log("op9");
            agregarElementoAlInicio();
            break;
        case 10:
            console.log("op10");
            agregarElementosAlFinal();
            break;
        case 11:
            console.log("op11");
            crearArrayConObjetos();
            break;
        case 12:
            console.log("op12");
            iterarArrayConObjetosConFor();
            break;
        case 13:
            console.log("op13");
            iterarArrayConObjetosConForEach();
            break;
        case 14:
            console.log("op14");
            iterarArrayConObjetosConMap();
            break;
        case 15:
            console.log("op15");
            procesoPersonal();
            break;
        default:
            console.log("OPCION INVALIDA");

    }
    menu();
}while(x!=0);


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
   /* do{ */
    
   /*  let nomb=prompt(`Nombre objeto #${cont}`); */
    var obj = new Object();
    /* let nom=Object.fromEntries(new FormData(e.target)); */
    /* obj[`${nomb}`]=[]; */
    console.log(obj);
   
  /*     } while(confirm("Desea ingresar otro objeto")); */
   
} 

function mostrarObjeto(){
    /* do{
        let index=Number(prompt("ingrese el index del objeto"))
        resul=obj[Object.keys(obj)[index]];
        alert(resul);
        console.log(resul);

    }while(confirm`buscar otro objeto`)
     */
    console.log(obj);
    
}
function crearArray(){
let nombre= prompt("Nombre array"); 
        /* do{  */
            /* let elemt= prompt("elemento array") */
            let arr = new Array();
      /*   }while(confirm("otro elemento array")) */
      window[nombre] = arr
      ar=arr;/*
      ar[nombre];
    console.log(ar); */
    console.log(`array ${nombre}creado`);
    
}

function mostrarArray(){
     /*  do{ 
        let index=Number(prompt("ingrese el index del array"))
        resul=obj[Object.keys(obj)[index]]; 
        alert(resul);
        console.log(resul);
     }while(confirm`buscar otro objeto`) */
     console.log(ar);
 }
 

function eliminarPrimerElemento(){
    console.log("primer elemento eliminado");
    ar.shift();
    console.log(ar);
}

function eliminarUltimoElemento() {
    console.log("ultimo elemento eliminado");
    ar.pop();
    console.log(ar);
}
 function eliminarCualquierElemento(){
    console.log("cualquier elemento eliminado");
    let num=Number(prompt("index de elemento a eliminar"));
    ar.splice(num,1);
    console.log(ar);
 }

function agregarElementoAlInicio(){
    console.log("agregar elemento inicio");
    let elem=prompt("elemento a agregar")
    ar.unshift(`${elem}`);
    console.log(ar);
}

function agregarElementosAlFinal(){
    console.log("agregar elemento final");
    let elem=prompt("elemento a agregar")
    ar.push(elem);
    console.log(ar);
} 

function crearArrayConObjetos(){
    let cont2=0;
    console.log("crear array con objetos");
    let arrobj=new Array();
    do{
        cont2++;
        let aobj=prompt(`Nombre objeto #${cont2}`);
        var objarr = new Object(aobj);
        /* intento de nombre fallido en todos los casos arrobj[aobj]= */
        arrobj.push(objarr);
        ob=arrobj;
    }while(confirm('agregar otro objeto'))
    console.log(arrobj);
    
    return cont2;
}

function iterarArrayConObjetosConFor(){
}

function iterarArrayConObjetosConForEach(){
}

function iterarArrayConObjetosConMap(){
}

function procesoPersonal(){
    console.log("proceso personal");
}

    

