//--- construtores ---


let meuPais = {
    nome: "",
    populacao: 202768562,
    capital: "",

    //dando valor as variaveis acima com os parametros do construtor abaixo
    nacionalidade: function(recebeNome,recebeCapital){ 
        this.nome = recebeNome;
        this.capital = recebeCapital
        return `Sou do ${this.nome}, que tem como capital ${this.capital}`
    }
};
console.log(meuPais.nacionalidade("Brasil","Brasília"));

