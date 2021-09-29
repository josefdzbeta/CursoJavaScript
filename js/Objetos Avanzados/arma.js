class Arma{
    constructor(){
        this.cargador = 6
        this.balas=0
        Arma.contador ++ //atributo estático 
    }

    cargar(balas){
        this.balas += balas
        if(this.balas > this.cargador){
            this.balas = this.cargador
        }
    }
    disparar(){
        console.log('PUUMM')
    }
    static getNumArmas(){
        console.log(`Hay ${Armas.contador} armas ahora.`);
    }
}