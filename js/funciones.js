/*
 1- el formulario que te paso tiene varios campos...
 2- tenes ver uno por uno... y validarlos...
 3- Si estan bien... lo mando al backend... y cartel de exito..
 4- si estan mal alerta
*/

function isEmailValid ( emial ){
        return false;
}

export function ValidadorFormulario( event ) {
    
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

        if ( ! isValid) {
            // podria emitir una alerta SOBRE el campo invalido
            // O cambiarle el color...
            break; // el for se detiene...
        }

    }

    if ( isValid){
        // envio TODO al backend
    } else {
        //Mostrar cartel de que hay datos a corregir...
    }



}