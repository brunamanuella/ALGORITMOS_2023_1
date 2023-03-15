import {question} from 'readline-sync'

function main(){
    //entrada
    const distancia = Number(question('diga a distancia em metros: '))
    const velocidade = Number(question('diga a velocidade média em km/h: '))

    //processamento
    const tempo_minutos = calcular_tempo(distancia, velocidade)

    //saida
    console.log(`A prova levará ${tempo_minutos} minutos para ser percorrida`)
}

function calcular_tempo(distancia, velocidade){
    const tempo_min = (distancia / (velocidade * 1000)) * 60
    return tempo_min
}

main ()