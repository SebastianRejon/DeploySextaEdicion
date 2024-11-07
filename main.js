/* CAPTURAS DE EVENTOS */
const butacaTocada=document.getElementById("butacas");
butacaTocada.addEventListener("click",cambioClase);
const finalizarTocado=document.getElementById("finalizar");
finalizarTocado.addEventListener("click",informeVenta);
/* FUNCIONES */
/* FUNCIONES DE VISTAS*/
function creaAsientos(){
    let asientos=document.getElementById("butacas");
    let f=0;
    let c=0;
    let z=0;
    asientos.innerHTML="";
    for (i=0;i<100;i++){
        let asiento=document.createElement("p");
        asiento.id=i;
        if (butacas[f][c]=="X"){
            asiento.className="asiento__tocado";
        }else{
            asiento.className="asiento";
        }
        asiento.innerHTML=butacas[f][c];
        asientos.appendChild(asiento);
        c++;
        if (c>9){
            f++;
            c=0;
        }   
    }
}
function CoordenadasVenta(e){
    let dato=e.target.id,x,y;
    if (dato.length==2){
        x=Number(dato[0]);
        y=Number(dato[1]);
    }else{
        x=0;
        y=Number(dato[0]);
    }
    console.log("x:",x, " y:",y);
    venta(x,y);
}
function cambioClase(event){
    CoordenadasVenta(event);
    creaAsientos();
}
/* FIN FUNCIONES DE VISTAS*/
/* FUNCINES VALIDACION */
function validaPrecio(){
    let p=parseFloat(prompt("Precio Funcion: "));
    while (p<0){
        p=parseFloat(prompt("Err precio Funcion: "));
    }
    return p;
}
function validaButaca(){
    let b=parseFloat(prompt("fila/butaca [0-9/ -1 fin carga]: "));
    while (b<-1 || b>9){
        b=parseFloat(prompt("fila/butaca [0-9/ -1 fin carga]: "));
    }
    return b; 
}
/* FIN FUNCINES VALIDACION */
function setButacas(){
    let i,j;
    let fila;
    for (i=0;i<10;i++){
        fila=[];
        for (j=0;j<10;j++){
            fila.push("L");
        }
        butacas.push(fila);
    }
} 
function setDatosFuncion(){
    let nombreFuncion,precioFuncion;
    nombreFuncion=prompt("Nombre Funcion");
    precioFuncion=validaPrecio();
    datosFuncion.push(nombreFuncion);
    datosFuncion.push(precioFuncion);
}
// VIEJA FUNCION DE VENTA LOGICA
// function venta(){
//     let fila,butaca;
//     fila=validaButaca();
//     while (fila!=-1){
//         butaca=validaButaca();
//         if(butacas[fila][butaca]=="L"){
//             console.log("Precio: ",datosFuncion[1]);
//             butacas[fila][butaca]="X";
//             cantButacasVendidas=cantButacasVendidas+1;
//             ganancias=ganancias+datosFuncion[1];
//         }else{
//             alert("Butaca Ocupada");
//         }
//         fila=validaButaca();
//     }
// }
function venta(x,y){
    if(butacas[x][y]=="L"){
        butacas[x][y]="X";
        console.log("Precio: ",datosFuncion[1]);
        cantButacasVendidas=cantButacasVendidas+1;
        ganancias=ganancias+datosFuncion[1];
    }else{
        alert("Butaca Ocupada");
    }
}
function informeVenta(){
    console.log("Funcion: ",datosFuncion[0]);
    console.log("Butacas Vendidas: ",cantButacasVendidas);
    console.log("Ganancia: ",ganancias);
}
function principal(){
    setButacas();
    creaAsientos();
    setDatosFuncion();
}
/* FIN FUNCIONES */
/* DECLARAR ARREGLOS Y DEMAS VAR*/
let butacas=[];
let datosFuncion=[];
let cantButacasVendidas=0;
let ganancias=0;
/* PROGRAMA PRINCIPAL (LLAMADA A LA FUNCION DESENCADENADORA DEL SISTEMA)*/
principal();

/*
CAMINO CRITICO
venta:
-perdir fila y butaca
-verificar que no esten venidas
-indicar precio a pagar
-sumar a ganancias
-cambiar L por X
- para terminar voy a utilizar (por el momento) un nro de fila -1
- terminado el proceso de venta:
    - informar butacas vendidas
    - ganancia

FUNCIONES DE VALIDACIONES
FUNCIONES DE CONEXION CON HTML    
*/
