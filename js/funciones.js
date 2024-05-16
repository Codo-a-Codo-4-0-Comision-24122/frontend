/*
 1- el formulario que te paso tiene varios campos...
 2- tenes ver uno por uno... y validarlos...
 3- Si estan bien... lo mando al backend... y cartel de exito..
 4- si estan mal alerta
*/

const ERROR_COLOR = "red";
const VALID_COLOR = "green";
const DEFAULT_EMPTY = "";
const URL_LOGIN = "https://dummyjson.com/auth/login";

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


export function Login(event) {
    event.preventDefault(); // a partir de esta linea el comportamiento del evento lo manejo YO - el Dev
    let miFormulario = event.currentTarget;
    let usernameHTMLElement = document.getElementById("username");
    let passwordHTMLElement = document.getElementById("password");
    let submitHTMLElement = document.getElementById("submit");
    let messageHTMLElement = document.getElementById("message");

    submitHTMLElement.disabled = true;

    /// preparo un json para enviar al backend...
    let data = {
        username: usernameHTMLElement.value,
        password: passwordHTMLElement.value
    }

    //DATA es un objeto en javascript

    // Request necesita convertir ese objeto en JSON...
    let request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    let finalMessage = "";

    fetch( URL_LOGIN , request )
        .then((respuesta) => respuesta.json() )
        .then( (res) => {
            // Este res es la promesa de convertir la respuesta en json
            console.log(res);
            /* Si la respuesta es correcta deberia tener algo como
            {
                "id": 15,"username": "kminchelle",
                "email": "kminchelle@qq.com",
                "firstName": "Jeanne",
                "lastName": "Halvorson",
                "gender": "female"
            }

            Y si fuera incorrecta  tendria

            {
                message: "elporque es incorrecto.."
            }
            */

            if(res.hasOwnProperty("message")){
                console.log("Algo malo salio...");
                finalMessage = res.message;
            } else {
                finalMessage = "Welcome " + res.firstName;
                miFormulario.style.display = 'none';
                //si esta todo bien guardo info en el localstorage...
                localStorage.setItem("name" , res.firstName);
                localStorage.setItem("isLogged", "true");
            }

        })
        .catch( () => alert("salio mal"))
        .finally( () => {
            alert("Esta completo");
            submitHTMLElement.disabled = false;
            messageHTMLElement.innerHTML = finalMessage;
        });

}

// Si esta guardada la info devuelve true y sino false
export function checkLocalStorage( ) {
    let isLogged = localStorage.getItem("isLogged"); // convertirlo booleano
    let name = localStorage.getItem("name"); //No necesito convertirlo

    let existeDataPrevia = (name !== null) && (isLogged !== null);

    return existeDataPrevia;
}