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
    console.log(p.innerHTML)

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

function construir(){
    console.log('construyo')
    let div = document.getElementsByClassName('borde')[0]
    //console.log(div)
    div.innerHTML = '<p>Este es un texto <span class=negrita> en negrita </span>. </p> '
    let p = document.createElement('p')
    div.appendChild(p)
    let nodoTexto = document.createTextNode('Este es un texto...')
    p.appendChild(nodoTexto)

    let span = document.createElement('span')
    p.appendChild(span)
    span.classList.add('negrita')
    span.appendChild(document.createTextNode('en negrita'))


    let img = document.createElement('img')
    div.insertBefore(img,p)
    img.setAttribute('src','img/cacatua.jpg')
    //document.body.appendChild(img) en el body
    
}
function destruir(){
    
    //let p = document.querySelector('.borde p')
    let p = document.getElementsByTagName('p')[1]
    //p = document.getElementsByClassName('borde')[0].getElementsByTagName('p')[0]
    p.remove()
}
function destruirTodo(){
    let div = document.getElementsByClassName('borde')[0]
    while(div.firstElementChild){
        div.removeChild(div.firstElementChild) 
    }
}



