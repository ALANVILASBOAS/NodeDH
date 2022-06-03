var jogador1 = 0;
var jogador2 = 3;
var placar="";
//if ternário - se as condições são verdadeiras (?), imprima "isso"(:) senão "isso";
jogador1 > -1 && jogador2 > -1 ? console.log('Jogadores válidos'):console.log('Jogadores inválidos');


if(jogador1>0){
    console.log('jogador1 marcou 1 ponto');
}else if(jogador2>0){
    console.log('jogador2 marcou 1 ponto');
}else{
    console.log('ninguem marcou ponto');
};
