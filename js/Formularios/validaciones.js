/**Validaciones JS
Script para validar un Formulario

@author Jose Angel Fernandez Betancourt
@license GPL V3 2021  
**/


'use strict'

window.onload=iniciar

function iniciar() {
    
    let formulario = document.forms[0]
    console.log(formulario)
    formulario.onsubmit = validar
}

function validar(evento) {
    console.log('Estoy validando')
    
    if(!document.getElementById('iPolitica').checked)
    return false
    //Cpmpruebo el campo de nombre
    if (document.getElementById('iNombre').length<3)
    return false

    
    //evento.preventDefault()
    //return false

}
