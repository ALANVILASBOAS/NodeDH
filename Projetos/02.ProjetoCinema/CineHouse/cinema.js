//Módulo 2: Introdução a Node e Javascript
    //Revisão de funções, condicionais e Arrays (26/05)

const catalogo22 = require('./database/catalogo.json')

let objeto22 = JSON.stringify(catalogo22);
console.log(objeto22)



//-----variável com array de objetos-----
var catalogo =
[
    {codigo:111111,titulo:'A Socieda Do Anel',duracao:1,atores:['ator1','ator2','ator3'],ano:2001,cartaz:false},
    {codigo:222222,titulo:'As Duas Torres',duracao:2,atores:['atorA','atorB','atorC'],ano:2002,cartaz:false},
    {codigo:333333,titulo:'O Retorno do Rei',duracao:2,atores:['atorX','atorY','atorZ'],ano:2003,cartaz:true}
]

console.log(catalogo)
//-----1. Adicionar Filme-----
/* A função deve receber os parâmetros com as informações necessárias para
criar um objeto do tipo Filme.*/

function adicionarFilme(cod,tit,dur,ato,ano,car){
    catalogo.push({'codigo':cod,'titulo':tit,'duracao':dur,'atores':ato,'ano':ano, 'Cartaz':car})
    return catalogo
}
console.log(adicionarFilme(444444,'As Quatro torres',3,['atorAlfa','atorBeta','atorGama'],2022,true))


//-----2. Buscar Filme-----
/* A função deve receber como parâmetro o número identificador do filme e fazer
busca no array de catálogo e ao fim retornar o objeto encontrado.
Preferencialmente, retorne de forma mais amigável ao usuário final (pode
utilizar console para não retornar apenas o objeto).*/

function buscarFilme(cod){
    let resultCod = catalogo.find(({codigo})=>codigo==cod)
    let userCart ='';
    if (resultCod.cartaz===true){userCart = 'está em cartaz'
    } else if(resultCod.cartaz===false){userCart = 'não está em cartaz,'
    }
    return '\n Procurando filme de código '+resultCod.codigo+'...\n Resultado encontrado:'+
    '\n Titulo: '+resultCod.titulo+'\n Duração: '+resultCod.duracao+'\n Atores: '+resultCod.atores+'\n Ano: '+resultCod.ano+'\n Atualmente o filme '+userCart
}
console.log(buscarFilme(222222))

//Para referencia, explicação do uso do '.find':
//https://www.codegrepper.com/code-examples/javascript/array.find+javascript



//-----3. Alterar Status Em Cartaz-----
/*A função deve receber como parâmetro o número identificador do filme
escolhido, buscar o filme com base no parâmetro recebido e alterar o status
existente da propriedade em Cartaz (se estava como true, alterar para false, e
vice e versa).*/

function alterarCartaz(cod2){
    let resultCod = catalogo.find(({codigo})=>codigo==cod2)
    let userCart ='';
    if (resultCod.cartaz===true){userCart = !resultCod.cartaz
    } else if(resultCod.cartaz===false){userCart = !resultCod.cartaz
    }
    return '\n Propriedade do cartaz alterado para: '+userCart
}
console.log(alterarCartaz(111111))







