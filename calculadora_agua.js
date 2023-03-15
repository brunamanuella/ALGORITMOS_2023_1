import { question } from "readline-sync"

function main(){

    //entrada
    const peso = Number(question('Qual é o seu peso? '))
    const atividade = question('Sua atividade física diária, é moderada ou intensa? ')

    //processamento
    const ativmoderada = calcular_agua_ativ_moderada(peso)
    const ativintensa = calcular_agua_ativ_intensa(peso)

    //saída
    console.log(`A quantidade de agua recomendada para quem faz atividade fisica moderada de acordo com o seu peso é de:  ${ativmoderada} ml por dia`)
    console.log(`A quantidade de agua recomendada para quem faz atividade fisica intensa de acordo com o seu peso é de:  ${ativintensa} ml por dia`)
}

    function calcular_agua_ativ_moderada(peso) {
        const quant_agua = peso * 35
        return quant_agua
    }
    
    function calcular_agua_ativ_intensa(peso) {
        const quant_agua = peso * 45
        return quant_agua
    }

    main()
