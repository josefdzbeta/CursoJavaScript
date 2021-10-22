'use strict'
console.log('JS Cargado')

//Objetos
let objeto = {
  atributo: 78,
  nombre: 'Perico Palotes',
  parejas: ['Maria', 'Pedro', 'Macario'],
  metodo2: function(num){
    console.log('Metodo 2:' + num *2);
  }
}
console.log(objeto)
console.log('Me llamo '+ objeto.nombre)
console.log('Una de mis parejas es '+objeto.parejas[1])

function funcion1() {

  document.write('Me encanta JavaScript <br />')

}
funcion1()


//Tipado dinamico
let num = 7 //Decaro num y le asigno 7. Es tipo number
num = funcion1 //Le asigno funcion1. Es tipo function
num() //La ejecuto.

objeto.metodo = funcion1
objeto.metodo()
objeto.metodo2(88)

//Parametros de funciones
function suma(a, b=4){
  return a + b
}
console.log(suma(5,8))
console.log(suma(2))
console.log(suma())

function ejecuta(callback) {

  console.log('Ejecutando');

}
ejecuta(funcion1)

//Excepciones

try {
  let num1 = 45
  console.log(num1*'Zapato');
  ejecuta(funcion2)

} catch (excepcion) {
  console.log('Catch:'+excepcion);
} finally {
  console.log('Ejecuto el finally');

}

try {
  let nombre = 'Miguel'
  console.log(nombre.substr(2,4));
} catch (e) {
  console.log(excepcion);
} finally {
  console.log('Ejecuto el finally');
}

//Arrays
let vector = [1,2,3]
let guarreria = [1,2,'asdasdasd', function(){console.log('pfff')}, true]
let matriz = [

  [1,2,3],
  [4,5,6],
  [7,8,9]

]