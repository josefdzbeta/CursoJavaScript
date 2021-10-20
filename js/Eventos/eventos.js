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
    seta.style.left = `${evento.clientX - 25}px`
    let body = document.getElementsByTagName('body')[0]
    body.appendChild(seta)
  


    

}