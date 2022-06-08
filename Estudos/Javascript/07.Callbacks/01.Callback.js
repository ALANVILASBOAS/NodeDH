const somar = (A, B )=> A + B;

const diminuir = (A, B )=> A - B;

const multiplicar = (A, B )=> A * B;

const dividir = (A, B )=> A / B;

//a função calculadora está recebendo as funções acima como parametro
const calculadora=(num1,num2,operacao)=>operacao(num1,num2); // e depois está chamando a função soma que tbm tem A e B como parametros




console.log(calculadora(10, 20, somar))
console.log(calculadora(10, 20, diminuir))
console.log(calculadora(10, 20, multiplicar))
console.log(calculadora(10, 20, dividir))