class Finanzas{
    dolaresToEuros(dolares){
        return dolares * 0.99
    }

    eurosToDolares(euros){
        return euros * 1.01
    }
}

let patata = new Finanzas

console.log(patata.dolaresToEuros(3),patata.eurosToDolares(5))