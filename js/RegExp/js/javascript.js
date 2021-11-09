/**
 * @author Jose Angel Fernandez Betancourt
 * @license GPL V3 2021
 */

'use strict'

window.onload = iniciar

function iniciar(){
    document.getElementById('iIP').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp('(\d{1,3}.){3}\d{1,3}')
    if(!exp1.test(document.getElementById('iIP').value)){
        console.log("IP erronea")
    }

}
