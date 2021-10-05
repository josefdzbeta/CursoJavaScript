'use strict'


import {Persona} from './persona.js'
import {Trabuco} from './trabuco.js'
import {M16} from './m16.js'
import {Arma} from './arma.js'


Arma.contador = 0 // Atributo estático
Arma.getNumArmas = function(){
    console.log(`Hay ${Arma.contador} no se que`);
}

class App{
    constructor(){
        window.onload = this.iniciar.bind(this)
    }
    iniciar(){

        let p1 = new Persona('Ana')
        let p2 = new Persona('Blas')

        p1.arma = new Trabuco()
        p1.arma.disparar()

        p2.arma1 = new M16()
        p2.arma1.disparar()


        Arma.getNumArmas()
        console.log(Arma.contador)

        //usamos herencia para crear una clase que es un tipo de la clase padre
        //Es obligatorio llamar al constructor de la clase padre y es obligatorio llamarlo antes de hacer nada en nuestro constructor

        let a1 = new Trabuco()
        let a2 = new M16()
        let a3 = new Trabuco()
        let a4 = new Persona() // El objeto es a4 y persona tipo o clase
    }
}
    
//Relación de herencia extiende o deriva de la clase arma
//Relaciones de uso. La clase Persona usa la clase arma
//Crear el menor número de dependencias 
new App()
