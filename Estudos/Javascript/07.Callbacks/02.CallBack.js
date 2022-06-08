function adicionarHttp(url) {
    return "http://" + url;
};

function processar(listaSite,funcao){
    let novaLista = [];
    listaSite.forEach(function(elemento) { //for each: para cada elemento no array
        novaLista.push(funcao(elemento)) 
    });
    return novaLista;
};


console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp))