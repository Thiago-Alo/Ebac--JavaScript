import carros from './carros.js';
console.log(carros)

//FILTER MODELO VERSA
const filterModelo = carros.filter((modelos) => {
    return modelos.modelo === 'Versa';
})

console.log(filterModelo.length)
let qtdModelos = filterModelo.length;

let exibir = '';

carros.forEach(modelos => {
    exibir += modelos.modelo + ', '
})


// REDUCE TOTAL KM
const somaKm = carros.reduce((acumulador, carro) => {
    return acumulador + carro.km
},0);

console.log(somaKm); 

//MAP MARCA E KM
const marcasKm = carros.map(carro => {
    return { marca: carro.marca, km: carro.km };
});

const tabela = document.getElementById('tabela-carros');

		marcasKm.forEach(carro => {
			const tr = document.createElement('tr');
			const tdMarca = document.createElement('td');
			tdMarca.textContent = carro.marca;
			const tdKm = document.createElement('td');
			tdKm.textContent = carro.km;

			tr.appendChild(tdMarca);
			tr.appendChild(tdKm);

			tabela.appendChild(tr);
		});

document.getElementById('main').innerHTML = 
'Os nossos modelos disponiveis são: <br>' + exibir +
'<br> Temos '+ qtdModelos + ' carros com o modelo Versa'+
'<br> Os Km totais dos nossos carros são = ' + somaKm + ' km'+
'<br> Os Km por cada marca ' 