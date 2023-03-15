/*A taxa metabólica basal (TMB) é a quantidade de energia necessária para a manutenção das funções vitais do organismo ao longo de 24 horas. Ela é medida em calorias, que é a energia extraída pelo nosso corpo a partir dos macronutrientes (carboidratos, proteínas e gorduras totais).*/

import { question } from "readline-sync"

function main(){

    //entrada
    const peso = Number(question('Qual é o seu peso: '))
    const altura = Number(question('Qual é a sua altura: '))
    const idade = Number(question('Qual é a sua idade: '))

    //processamento
    const tmb_f = Math.floor(calcular_tmb_f(peso, altura, idade))

    //saida
    console.log(`o valor da taxa metabólica basal (TMB) para o sexo feminino é de: ${tmb_f}`)
}

function calcular_tmb_f(peso, altura, idade){
    const resultado_f = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade)
    return resultado_f
}

main()