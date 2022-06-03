const fs = require('fs');
let moment = require('moment');
const superHeroes = require('./heroes');

let dados  = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format('MMM do YY')

console.log(superHeroes);
console.log(data)


