// const nemo = {
//     raza: 'carpa koi',
//     edad: 7
// };
// const pescado2 = {
//     raza: 'carpa koi',
//     edad: 1
// };

class Pescado {
    constructor(raza, edad) {
        this.raza = raza;
        this.edad = edad;
    }
    calcularTiempoRestante() {
        return 12 - this.edad;    
    }
}

const nemo = new Pescado('Payazo', 7);
const dory = new Pescado('Paracanthurus ', 7);

console.log(nemo.calcularTiempoRestante());

