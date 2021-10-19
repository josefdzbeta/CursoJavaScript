/* dom.js
    Ejercicicios Guiados de DOM.
    Autor: Jose Angel Fernandez Betancourt
    licencia: GPL v3 o superior.
    2021.
*/

//API -- APLICATION PROGRAMMING INTERFACE
//DOM -- DOCUMENT OBJECT MODEL

'use strict'

function ejecutar(){
    // console.log("Funciona")
    // let input /*variable*/ = document.getElementById('iNombre')
    // console.log(input)
    let campos = document.getElementsByTagName('input')
    console.log(campos[2].value)

    let p = document.querySelectorAll('.c1')
    console.log(p.outerHTML)

    let spans = document.querySelectorAll('.c1 span')
    console.log(spans)

    
    //document.getElemtsByClassName
    
    //Modificacion del DOM
    spans[1].innerHTML = 'Viva la Pepa!'

    //Modificar atributos de estilo
    spans[0].style.color = 'blue'
    spans[0].style.fontSize = '20pt'
    setInterval(mover,40) 
}

let posicion=0
function mover(){
   let p = document.getElementById('correCaminos')
   p.style.left=`${posicion}px`
   posicion+=1
}
    



