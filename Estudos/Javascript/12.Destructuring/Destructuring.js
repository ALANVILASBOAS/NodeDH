// ----- DESISTRUTURAÇÃO PARA OBJETO -----
let pessoa = {
    nome: 'alan',
    idade: 30
}

//Desistruturação
//cria variaveis com o nome das propriedades do objeto;
const {nome,idade} = pessoa; 

/* é a mesma coisa que:
nome = pessoa.nome;
idade = pessoa.idade; */


console.log(nome)


// ----- DESISTRUTURAÇÃO PARA ARRAY -----
let listaDeCompras = ['pão','leite','açucar',22]

//cria variaveis com o nome da sua escolha, simbolizando os índices do array;
const [a,b,c,d] = listaDeCompras;

/* é a mesma coisa que:
a=listaDeCompras[0];
b=listaDeCompras[1];
c=listaDeCompras[2];
d=listaDeCompras[3]; */


console.log(a,b,c,d)