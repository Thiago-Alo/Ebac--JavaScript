import months from './months.js';

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum
let somaMeses = meses.reduce( (prev, next) => {
    return prev + next
})
console.log(somaMeses);
// Reduce - função  SOMA todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})
console.log(sumMonthDays);
// Map - funções em arrays de retorno individual (cada valor array)
let valorIndividual = [10, 15, 7, 8, 9]

let years = valorIndividual.map( (valor => {
    return valor * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '
