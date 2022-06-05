//arrow function
//quando é apenas 1 linha, não precisa de chaves
const arrow = ()=>console.log("estou em uma arrow function");

//função sem nome, incluida em uma varável, sem necessidade de return
let soma = (num1,num2) => num1+num2;

//com apenas 1 parámetro, não precisa de parenteses
let somaCinco = num1 => console.log("recebi o número "+num1);

arrow();
console.log(soma(5,6))
somaCinco(5);