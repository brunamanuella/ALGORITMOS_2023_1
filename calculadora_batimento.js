import { question } from 'readline-sync'

function main(){
    //entrada
    const idade = Number(question('Qual é a sua idade? '))

    //processamento
    const frequencia_cardiaca_maxima = calcular_frequencia_maxima(idade)
    const freq_card_pativmoderada_min = calcular_freq_card_pativmoderada_min(frequencia_cardiaca_maxima)
    const freq_card_pativmoderada_max = calcular_freq_card_pativmoderada_max(frequencia_cardiaca_maxima)
    const freq_card_pativintensa_min = calcular_freq_card_pativintensa_min(frequencia_cardiaca_maxima)
    const freq_card_pativintensa_max = calcular_freq_card_pativintensa_max(frequencia_cardiaca_maxima)

    //saida
    console.log(`A sua frequência cardíaca máxima é de: ${frequencia_cardiaca_maxima} bpm`)
    console.log(`A faixa de batimentos ideais para atividade fisica moderada é de: ${freq_card_pativmoderada_min.toFixed(2)} bpm - ${freq_card_pativmoderada_max.toFixed(2)} bpm`)
    console.log(`A faixa de batimentos ideais para atividade fisica intensa é de: ${freq_card_pativintensa_min.toFixed(2)} bpm - ${freq_card_pativintensa_max.toFixed(2)} bpm`)
}

function calcular_frequencia_maxima(idade){
    const resul1 = 220 - idade
    return resul1
}

function calcular_freq_card_pativmoderada_min(frequencia_cardiaca_maxima){
    const resul2 = 0.5 * frequencia_cardiaca_maxima
    return resul2
}
function calcular_freq_card_pativmoderada_max(frequencia_cardiaca_maxima){
    const resul3 = 0.7 * frequencia_cardiaca_maxima
    return resul3
}
function calcular_freq_card_pativintensa_min(frequencia_cardiaca_maxima){
    const resul4 = 0.7 * frequencia_cardiaca_maxima
    return resul4
}
function calcular_freq_card_pativintensa_max(frequencia_cardiaca_maxima){
    const resul5 = 0.85 * frequencia_cardiaca_maxima
    return resul5
}

main()