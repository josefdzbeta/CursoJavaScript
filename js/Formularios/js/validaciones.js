/**Validaciones JS
Script para validar un Formulario

@author Jose Angel Fernandez Betancourt
@license GPL V3 2021  
**/


'use strict'

const formulario = document.getElementById('formulario'); // Para acceder al formulario
const inputs = document.querySelectorAll('#formulario input'); // Para almacenar todos los inputs del formulario 

//Expresiones Regulares
const expresiones = {
	iNombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    iApellidos: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	iEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	iTelefono: /^\d{9}$/, // 9 numeros.
    iNIF: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i //DNI 
}
//Inicializamos los campos a falso
const campos = {
    iNombre: false,
    iApellidos: false,
    iEmail: false,
    iNIF: false,
    iTelefono: false
}

 
const validarFormulario = (evento) => { 
    switch (evento.target.name) {
        case "iNombre":
            //Pasamos expresion regular, el input que recibe el evento y por último el campo.
            validarCampo(expresiones.iNombre, evento.target, 'iNombre')
        break
        case "iApellidos":
            validarCampo(expresiones.iApellidos, evento.target, 'iApellidos')
        break
        case "iEmail":
            validarCampo(expresiones.iEmail, evento.target, 'iEmail')
        break
        case "iNIF":
            validarCampo(expresiones.iNIF, evento.target, 'iNIF')
        break
        case "iTelefono":
            validarCampo(expresiones.iTelefono, evento.target, 'iTelefono')
        break
    }
}
const validarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)){ //Comprobamos si la expresion regular es válida 
        document.getElementById(`${campo}`).classList.remove('incorrecto') //Quitamos la clase incorrecto
        document.getElementById(`${campo}`).classList.add('correcto')
        campos[campo] = true
    }else{
        document.getElementById(`${campo}`).classList.add('incorrecto')
        document.getElementById(`${campo}`).classList.remove('correcto')
        campos[campo] = false
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario) // Ejecutar función al levantar una tecla
    input.addEventListener('blur', validarFormulario) // Ejecutar función al pinchar fuera del formulario 
   
})

//Comprobamos que todo está correcto, al hacer submit, se reinicia el formulario 
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const iPolitica = document.getElementById('iPolitica')
    //Si los campos son verdaderos, entonces los datos están bien y podemos enviar el formulario
	if(campos.iNombre && campos.iApellidos && campos.iNIF && campos.iEmail && campos.iTelefono && iPolitica.checked){
        formulario.reset()
        alert('Tus datos han sido enviados correctamente')
	}else{
        alert('Introduzca los datos correctamente')
    }

})


