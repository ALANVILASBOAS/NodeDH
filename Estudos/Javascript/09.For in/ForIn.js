//for In é usado em OBJETOS

let carro = {
    nome: "fox",
    ano: "2011"
}

for(let prop in carro){ // vai passar por cada propriedade do objeto carro
    console.log(prop); // nome, ano - retorna os nomes das propriedades
    console.log(carro[prop]) //fox, 2011 - retorna os valores das propriedades
}

