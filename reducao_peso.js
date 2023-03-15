import { question } from 'readline-sync'

function main(){
    //entrada
    const peso_atual = Number(question('Qual é o se peso atual(kg): '))
    const meta_red = Number(question('Qual é a sua meta de redução(%): '))
    const semanas = Number(question('Em quantas semanas: '))
    const calorias = Number(question('Quanto está disposto a consumir de calorias diariamente: '))
    //processamento
    const red_peso = calcular_percentual(peso_atual, meta_red)
    const red_calorias = converter_peso_em_calorias(red_peso)
    const quantos_dias = converter_semana_em_dias(semanas)
    const deficit_diario = calcular_deficit_diario(red_calorias, quantos_dias)
    const gasto_diario = calcular_gasto_diario(calorias, deficit_diario)
    //saida
    console.log(`Deficit calórico diário: ${deficit_diario.toFixed(2)} kcal.`)
    console.log(`Você deverá gastar diariamente ${gasto_diario.toFixed(2)} kcal com exercícios.`)

}

function calcular_percentual(peso_atual, meta_red){
    const resultado1 = peso_atual * (meta_red/100)
    return resultado1
}
function converter_peso_em_calorias(red_peso){
    const resultado2 = red_peso * 7700
    return resultado2
}

function converter_semana_em_dias(semanas){
    const resultado3 = semanas * 7
    return resultado3
}

function calcular_deficit_diario(red_calorias, quantos_dias){
    const resultado4 = red_calorias / quantos_dias
    return resultado4
}

function calcular_gasto_diario(calorias, deficit_diario){
    const resultado5 = calorias + deficit_diario
    return resultado5
}

main()