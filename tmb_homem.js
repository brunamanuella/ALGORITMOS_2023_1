/*A taxa metabólica basal (TMB) é a quantidade de energia necessária para a manutenção das funções vitais do organismo ao longo de 24 horas. Ela é medida em calorias, que é a energia extraída pelo nosso corpo a partir dos macronutrientes (carboidratos, proteínas e gorduras totais).*/

import { question } from "readline-sync"

function main(){

    //entrada
    const peso = Number(question('Qual é o seu peso: '))
    const altura = Number(question('Qual é a sua altura: '))
    const idade = Number(question('Qual é a sua idade: '))

    //processamento
    const tmb_m = Math.floor(calcular_tmb_m(peso, altura, idade, genero))

    //saida
    console.log(`o valor da taxa metabólica basal (TMB) para o sexo masculino é de: ${tmb_m}`)
}

function calcular_tmb_m(peso, altura, idade){
    const resultado_m = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade)
    return resultado_m
}

main()