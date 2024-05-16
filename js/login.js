import { Login, checkLocalStorage } from './funciones.js';

let formularios = document.getElementsByTagName("form");

let miFormulario = formularios[0];

miFormulario.onsubmit = Login

if ( checkLocalStorage() ) {
    miFormulario.style.display = 'none';
} else {
    // faltaria poner cartel de bienvenida si ya esta guardado en el local storage...
}