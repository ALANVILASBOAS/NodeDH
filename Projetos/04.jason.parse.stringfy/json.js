let filmes = [
    {
        nome:'Senhor dos Aneis',
        horas:2,
        idade:2002,
    },
    {
        nome:'O Retorno do Rei',
        horas:1,
        idade:2003,
    }
]

let filmefy = JSON.stringify(filmes) // transforma o objeto em uma string
console.log(filmefy)

let filmeparse = JSON.parse(filmefy) // transforma uma string em um objeto
console.log(filmeparse)

console.log(filmes[0].horas) //trás o elemento horas de um objeto
