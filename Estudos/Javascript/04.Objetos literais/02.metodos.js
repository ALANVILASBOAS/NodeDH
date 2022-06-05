// --- metodos ---
// metodos são funções dentro de objetos

let meuPais = {
    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasilia",

     //estrutura de um metodo
    nacionalidade: function(){
        return `Sou do ${this.nome}`  //usamos 'this' para chamar propriedade em metodos.
    }
};

console.log(meuPais.nacionalidade());