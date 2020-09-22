//comando p/ conversão monetária 

let nomeFuncionario = window.prompt('Digite o nome do funcionário')
let salarioFuncionario = Number(window.prompt('Digite o salário do funcionário')).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

// toLocaleString('PT-BR', {style: 'currency', currency: 'BRL'})

//a primeira string 'pt-BR' é apenas p/ localização, pode ser apenas p/ localização interna.
//inserir a sigla da moeda em currency: p/ alteração, por exemplo dolar => currency: 'USD' || EUR p/ euro, etc..

document.write(`O funcionário ${nomeFuncionario} possui um salário de ${salarioFuncionario}`)
