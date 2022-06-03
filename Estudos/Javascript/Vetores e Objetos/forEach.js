
let listaDeEmails = [
    'alan07.vb@gmail.com',
    'alan07_vb@hotmail.com',
    'alan.franco.vilas@hotmail.com',
    'allanvilasboas@gmail.com'];



// Em forEach é esperado outra função, o qual podem ter de 1 a 3 parametros, e elas serão chamadas se simplesmente nomeá-las. A ordem dos parametros são: itens, index, array completo

// exemplo: Percorra cada item do array listaDeEmails, e para cada item:
//envie um "Olá"
listaDeEmails.forEach(() => {
    console.log("Olá")
}) 

// exemplo: Percorra cada item do array listaDeEmails, e para cada item:
//item será representado por "email".
//o n° de índice será representado por "index".
//o array total será representado por "full"
//imprima "email" (que agora representa os itens do array)
//imprima "index" (que agora representa o n° de índice do array)
//imprima "full" (que agora o array inteiro)
listaDeEmails.forEach(function(email,index,full){
    console.log(email,index,full)
}) 


