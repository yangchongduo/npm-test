var commander = require('commander');
var pkg= require('../package.json')
commander.on('--help', function() {
  console.log('  Basic Examples:');
  console.log('');
});
commander.parse(process.argv);
