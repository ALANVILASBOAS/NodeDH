let carro = {
    marca:"Fiat",
    modelo:"Uno",
}

//criando uma nova função com propriedades próprias
//que se pareceça com o objeto acima usando um construtor:

function Carro(valorMarca,valorModelo){ 
    this.marca = valorMarca     
    this.modelo = valorMarca
}

console.log(carro);
console.log(new Carro('Renault','Clio'));