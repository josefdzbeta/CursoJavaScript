'use strict'
console.log('Cargando JS')

let fecha = new Date()
console.log(fecha)

let fecha2 = new Date(2021,8,29)
console.log(fecha2)

const meses=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio']
const semana=['domingo','lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' ]

let hoy = `Hoy es ${semana[fecha.getDay()]} del mes ${fecha.getMonth()+1}`
//let hoy = `Hoy es ${fecha.getDay()} del mes ${fecha.getMonth()+1}`
console.log(hoy)

let ms1 = fecha.getTime()
console.log('Desde los beatles han pasado '+ms1+' ms')

let dentro5Dias = ms1 + 5*24*60*60*1000

dentro5Dias = new Date(dentro5Dias)
console.log(dentro5Dias)

//5 dias, 24 horas al dia, 60 minutos en cada hora, 60 segundos en cada minutos, 1000 milisegundos en cada segundo. 


///////////////OBJETO STRING/////////////////

let nombre1 = 'Ana'
let nombre2 = 'Angel'
let nombre3 = 'Abel'
if(nombre2>nombre1){
    console.log(nombre2 + 'Es mayor que '+ nombre1);
}else{
    console.log('no')
}

let texto = 'En un lugar de La Mancha, de cuyo nombre no quiero...'

console.log(texto.charAt(6))
console.log(texto.indexOf('l'))

//La posición de la primera E después de la coma
console.log(texto.indexOf('e', texto.indexOf(',')))
console.log(texto.includes('La Mancha'))
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.substr(4,10)) //4 Posicion inicial y 10 la longitud


/////////////////Objeto Math//////////////////////
console.log(Math.floor(Math.PI))
let entrada = '42zapato' 
console.log(isNaN(entrada))
console.log(Number.parseInt(entrada))
entrada ='3.1415PiñaColada'
console.log(Number.parseFloat(entrada));

/*Listas = elementos ordenados y con repetición
Conjuntos = sin orden ni repetición
Mapas = Conjunto de parejas clave y valor */ 

// Conjunto - Set

let amigos = new Set() // Lo normal es meter objetos

class Amigo{}

const ana = new Amigo()
const juan = new Amigo()
const draco = new Amigo()

amigos.add('Ana')
amigos.add('Juan')
amigos.add('Conde Draco')
console.log(amigos)

console.log(amigos.size);

for (let amigo of amigos){
    console.log(amigo)
}
//Diferencia entre array y conjunto 
amigos = []
amigos.push(ana)
amigos.push(juan)
amigos.push(draco)
amigos.push(draco)

console.log(amigos.length)

for (let i = 0; i < amigos.length; i++) {
    
    console.log(amigos[i])
    
}

//Mapas
let coches = new Map()
coches.set('BA-9282-ZT', 'Porsche')
coches.set('TO-666-JO', 'Seat Ibiza')
coches.set('ABC-DEF', 'Tesla Turbo Volador')


//Symbol sirve para identificar 
/*
class Usuario{
    Usuario.ADMIN = symbol()
    Usuario.PRINGUI = symbol()
    Usuario.GESTOR = symbol()

}
*/

