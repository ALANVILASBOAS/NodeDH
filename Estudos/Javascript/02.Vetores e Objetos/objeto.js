var dados = {
    nome: 'Alan Vilas Boas',
    idade: 30,
    email: 'alan07.vb@gmail.com',
    casado: false,

   };

// Chamando a propriedade 'email' do objeto 'dados' e copiando para outro objeto.
let emailProfissional = (dados.email); 
console.log(emailProfissional);

// ou

//criado objeto sem nome que chama diretamente as propriedades 'nome' e 'email' do objeto 'dados'.
var {nome, email} = dados;
console.log(nome,email);