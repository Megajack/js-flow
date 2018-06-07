/**
 * Module dependencies.
 */

var program = require('commander');
var date = new Date();

program
  .version('0.1.0')
  .option('-i, --input [input]')
  .parse(process.argv);

if (program.input === 'date') {
  console.log(date);
} else if (program.input === 'hello') {
  console.log('Hello world');
  setTimeout(function() {
    process.exit(1);
  }, 1000);
}
