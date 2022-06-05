// --- objeto literal ---

// : após propriedade
// , após valor
let meuPais = {
    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasilia"
};

// acessar propriedade de um objeto
console.log(`A capital do ${meuPais.nome} é ${meuPais.capital}`)


// outra forma de acessar propriedade de um objeto
console.log(`A capital do ${meuPais['nome']} é ${meuPais['capital']}`)
