/**Validaciones JS
Script para validar un Formulario

@author Jose Angel Fernandez Betancourt
@license GPL V3 2021  
**/


'use strict'


const formulario = document.getElementById('formulario'); // Para acceder al formulario
const inputs = document.querySelectorAll('#formulario input'); // Para almacenar todos los inputs del formulario 

const expresiones = {

	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	iEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	iTelefono: /^\d{9}$/ // 9 numeros.
}


const validarFormulario = (evento) => {
    switch (evento.target.name) {
        case "iNombre":
           validarCampo(expresiones.nombre, e.target, evento.target.name)
        break
        case "iApellidos":
            validarCampo(expresiones.iApellidos, e.target, evento.target.name)
        break
        case "iEmail":
            validarCampo(expresiones.iEmail, e.target, evento.target.name)
        break
        case "iNIF":
            validarCampo(expresiones.iNIF, e.target, evento.target.name)
        break
        case "iTelefono":
            validarCampo(expresiones.iTelefono, e.target, evento.target.name)
        break
    }
}
const validarCampo = (expresion, input, campo) => {
    if(expresion.nombre.test(input.value)){ //Comprobamos si la expresion regular es valida 

        document.getElementById('iNombre').classList.remove('incorrecto') //Quitamos la clase incorrecto
        document.getElementById('iNombre').classList.add('correcto')
    
    }else{
        document.getElementById('iNombre').classList.add('incorrecto')
        document.getElementById('iNombre').classList.remove('correcto')
    
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario) // Ejecutar funcion al levantar una tecla
    input.addEventListener('blur', validarFormulario) // Ejecutar funcion al pinchar fuera del formulario 
        
   
})




