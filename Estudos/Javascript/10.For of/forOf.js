//for Of é usado em ARRAYS

let serie = ["Friends", "GoT","Breaking Bad"];

for(let valor of serie){ // vai passar por cada propriedade do array carro
    
    console.log(valor); 

}


for(let valor in serie){ // se usar o for In no lugar...
   console.log(valor); // 0,1,2 - retorna o índice
}

