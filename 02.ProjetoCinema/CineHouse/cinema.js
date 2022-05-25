//Módulo 2: Introdução a Node e Javascript
    //Revisão de funções, condicionais e Arrays (26/05)

//-----variável com array de objetos-----
var catalogo =
[
    {codigo:111111,titulo:'A Socieda Do Anel',duracao:1,atores:['ator1','ator2','ator3'],ano:2001,cartaz:false},
    {codigo:222222,titulo:'As Duas Torres',duracao:2,atores:['atorA','atorB','atorC'],ano:2002,cartaz:false},
    {codigo:333333,titulo:'O Retorno do Rei',duracao:2,atores:['atorX','atorY','atorZ'],ano:2003,cartaz:true}
]

//-----1. Adicionar filme-----
/*A função deve receber os parâmetros com as informações necessárias para
criar um objeto do tipo Filme.*/

function adicionarFilme(cod,tit,dur,ato,ano,car){
    catalogo.push({'codigo':cod,'titulo':tit,'duracao':dur,'atores':ato,'ano':ano, 'Cartaz':car})
    return catalogo
}
console.log(adicionarFilme('444444','As Quatro torres',3,['atorAlfa','atorBeta','atorGama'],2022,true))


//-----2. Buscar filme-----



//-----3. Alterar Status Em Cartaz-----
//codando...




