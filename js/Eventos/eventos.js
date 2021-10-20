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
    
    let seta = document.getElementById('setaPrueba')
    seta.style.top = `${evento.clientY - 25}px`
    seta.style.left = `${evento.clientX - 25}px`
  
    seta.setAttribute('src', 'img/seta.png')
    seta.classList.add('setas')

    document.body.appendChild(seta)


    

}