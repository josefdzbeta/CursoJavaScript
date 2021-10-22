'use strict'

window.onload = iniciar

function iniciar(){
    
    //let img = document.getElementsByTagName('img')[0]
    let mapa = document.getElementById('imgMapa')
    //img.manjeadorClick = manjeadorClick()
    //img.addEventListener('click', manjeadorClick)
    mapa.onclick = ponerSeta
   
    
}

function manjeadorClick(){
    console.log('Tron')
}
function ponerSeta(evento){
    console.log(evento)
    let seta = document.createElement('img')
    seta.setAttribute('src', './img/seta.png')
    seta.classList.add('seta')
    seta.style.top = `${evento.clientY - 25}px`
    seta.oncontextmenu = quitarSeta
    seta.style.left = `${evento.clientX - 25}px`
    document.body.appendChild(seta)
}

function quitarSeta(evento) {
    console.log(evento)
    evento.stopPropagation()
    evento.preventDefault()
    evento.target.remove()
}