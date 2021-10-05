import {Arma} from './arma.js'
export class Trabuco extends Arma{

    constructor(){
        super()
        this.cargador=1
         //Super hacer referencia a la clase padre 
    }
    disparar() {
        console.log('!!!PATA PUUUUMMM!!!')
    }
}