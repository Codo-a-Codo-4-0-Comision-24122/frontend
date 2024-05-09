/*
 1- el formulario que te paso tiene varios campos...
 2- tenes ver uno por uno... y validarlos...
 3- Si estan bien... lo mando al backend... y cartel de exito..
 4- si estan mal alerta
*/

const ERROR_COLOR = "red";
const VALID_COLOR = "green";
const DEFAULT_EMPTY = "";

function isEmailValid(email) {
    // Vamos a validar lo siguiente...    
    // 1- ver que no arranque con arroba
    // 2- Que tenga solo 1 arroba...
    // 3- No puede ser la ultima letra la arroba...
    // 4- deberia terminar con .com

    let hasDotCom = email.endsWith(".com"); // Esto es el numero 4...si true entonces 3 es true...

    let arrobaIndex = email.indexOf("@");
    // if arrobaIndex === 0 OR arrobaInde === -1
    let arrobaIncorrecto = (arrobaIndex === 0) || (arrobaIndex === -1)
    if (arrobaIncorrecto) {
        return false;
    }

    // podria pasar que tuviera mas de 1 arroba... ale@@@@@mail.com
    // Falta verificar...
    let arrobaNoRepetido = true;


    return hasDotCom && !arrobaIncorrecto && arrobaNoRepetido;

}

function changeBorderColor(rgb, element) {
    element.style.borderColor = rgb;
}

function conexionBackendAPI() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let fail = Math.random() > 0.5; // de prueba de forma aleatoria a veces es verdadero otras falso

            if (fail) {
                reject("Error: fallo irrecuperable");
            } else {
                resolve("Finalizacion satisfactoria");
            }


        }, 2000
        )

    });
}


export function ValidadorFormulario(event) {

    event.preventDefault(); // a partir de esta linea el comportamiento del evento lo manejo YO - el Dev

    let miFormulario = event.currentTarget;

    let isValid = true;

    for (let index = 0; index < miFormulario.length; index++) {
        const element = miFormulario[index];

        switch (element.type) {
            case "text":
                console.log("Encontre un campo text")
                break;

            case "checkbox":
                break;
            case "email":
                isValid = isEmailValid(element.value)
                break;
            default:
                console.log("Default...")
                break;
        }

        if (!isValid) {
            // podria emitir una alerta SOBRE el campo invalido
            // O cambiarle el color...
            changeBorderColor(ERROR_COLOR, element);
            break; // el for se detiene...
        } else {
            changeBorderColor(VALID_COLOR, element);
        }

    }

    if (isValid) {
        // envio TODO al backend

        conexionBackendAPI()
            .then(() => alert("salio bien"))
            .catch( () => alert("salio mal"))
            .finally( () => alert("Esta completo"));


        /*setTimeout(() => {
            alert("Data enviada correctamente al backend...")
        }, 5000);// 5000 ms == 5 segundos..
        */
    } else {
        //Mostrar cartel de que hay datos a corregir...
    }



}