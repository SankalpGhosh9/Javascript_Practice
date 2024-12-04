const chalk = require ("chalk");
console.log(chalk.green.inverse("Hello World"));


const validator = require('validator');
console.log(validator.isEmail('foo@bar.com')); 
console.log(validator.isCurrency('445.90')); 
console.log(validator.isDivisibleBy('34',2)); 
console.log(validator.isAlphanumeric('tftswq5er'));