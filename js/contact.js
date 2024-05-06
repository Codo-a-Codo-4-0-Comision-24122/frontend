/*
 1- el usuario llena todos los datos...
 2- el usuario apreta submit o enviar o el boton o el que sea de la accion del formulario... <- ACA es lo importante...
 3- LEO todos los campos cargados... y los reviso uno por uno para validarlos...
*/
import { ValidadorFormulario } from './funciones.js';


// Necesito leer / prestarle atencion al form

let formularios = document.getElementsByClassName("row g-3");

console.log(formularios); // miFormulario es un array de 1 solo elemento...
console.log(formularios[0]); // Asi se accede al primer elmento de un array...


let miFormulario = formularios[0]; // elgiendo 1 formulario, el unico.. pero el que me interesa..

console.log(miFormulario);


miFormulario.onsubmit = ValidadorFormulario; // Tengo que escribir una funcion... que sera llamada cuando alguien aprete el boton submit..