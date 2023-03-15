/*O Índice de Adiposidade Corporal, mais conhecido como IAC, é um método utilizado para medir a gordura corporal. Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura.*/

import {question} from 'readline-sync'

function main(){
    //entrada
    const quadril = Number(question('qual é a largura do seu quadril em (cm) '))
    const altura = Number(question('Qual é a sua altura (cm) '))

    //processamento
    const iac = calcular_iac(quadril, altura)
    const quadril_min = calcular_quadril_min(altura)
    const quadril_max = calcular_quadril_max(altura)

    //saida
    console.log(`seu Índice de Adiposidade Corporal (IAC) é de: ${Math.floor(iac)}`)
    console.log(`para ficar na faixa normal seu quadril deve ter  ${Math.floor(quadril_min)} no mínimo e no máximo ${Math.floor(quadril_max)}`)
}

function calcular_iac(quadril, altura){
    const resultado = (quadril / ((altura * Math.sqrt(altura)) / 1000 )) - 18
    return resultado
}

function calcular_quadril_min(altura){
    const quadrilmin = ((altura * Math.sqrt(altura) / 1000)) * (9 + 18)
    return quadrilmin
}

function calcular_quadril_max(altura){
    const quadrilmax = ((altura * Math.sqrt(altura) / 1000)) * (20.9 + 18)
    return quadrilmax
}

main()