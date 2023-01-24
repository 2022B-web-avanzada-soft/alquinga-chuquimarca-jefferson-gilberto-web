// /01-javascript
//  01-variables.js

// variables mutables e inmutable
// las mutables: son las que pueden ser reasignadas =
var numeroUno = 1;
let numeroDos = 2;
numeroUno =12;
numeroDos =8;
numeroUno =false;
numeroDos =true;

// Inmutables

const configuracionArchivos = 'PDF';
//configuracionArchivos = 'XML' ;
// vamos a preferir CONST > LET >NUNCA VAR!

//Tipos de variables(primitivas)
const numero =1; // number
const sueldo =1.2; // number
const  texto ='Adrian'; // "Adrian " String
const apellidos ="Eguez"; // String
const booleano =true; // boolean
const hijos =null; // object
const zapatos =1; // undefined


console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

// Truty Falsy
if (true === true){
    console.log("Es Verdadero");

}else{
    console.log("Es Falso");

}
if (true== false){
    console.log("Es Falso");

} // node 01-variables.js
if (""){
    console.log("String vacio Es verdadero");

}else{
    console.log("Es Falso");

}
if ("Adrian"){
    console.log("String con datos Es truty");

}else{
    console.log("String con datos Falso");}