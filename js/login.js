import { Login, checkLocalStorage } from './funciones.js';
import { User } from './user.js';

let formularios = document.getElementsByTagName("form");

let miFormulario = formularios[0];

miFormulario.onsubmit = Login

if ( checkLocalStorage() ) {
    miFormulario.style.display = 'none';
} else {
    // faltaria poner cartel de bienvenida si ya esta guardado en el local storage...
}

/* Pruebas de la clase User*/

let myUser = new User(JSON.parse('{\
    "lastName": "Ernser",\
    "maidenName": "Feeney",\
    "age": 23,\
    "gender": "male", \
    "email": "ckensleyk@pen.io",\
    "username": "ckensleyk"\
    }') 
);

let myOject = {
    id: 15,
    username: "kminchelle",
    email: "kminchelle@qq.com",
    firstName: "Jeanne",
    lastName: "Halvorson",
    gender: "female"
}

JSON.stringify(myOject); // vuelve a string

console.log(myUser.age);
console.log(myUser.Saludo());