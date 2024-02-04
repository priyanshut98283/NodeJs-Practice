import chalk from 'chalk';
import validator from 'validator';

const log = console.log;

// Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.red.underline.inverse("Success"));

// if(validator.isEmail('foo@bar.com')){
//     log(chalk.green.underline.inverse("Right Email!"))
// }
// else{
//     log(chalk.red.underline.inverse("Not a email!"))
// }

const res=validator.isEmail('foo@bar.com');
log(res?chalk.green.underline.inverse("Right Email!"):
chalk.red.underline.inverse("Not a email!"))
