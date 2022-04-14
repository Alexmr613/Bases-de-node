const argv = require('yargs')
   .option('b', {
      alias : 'base',
      type : 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
   } )
   .option ('l',{
      alias :'listar',
      type : 'boolean',
      default : false,
      describe : 'Muestra la lista de la tabla creada '
    
   })
   .option('h',{
      alias: 'hasta',
      type :'number',
      describe: 'El numero hasta el que se multiplicara'
   })
   .check((argv, options)=>{
      if(isNaN(argv.base)){
         throw 'La base tiene que ser un numero '
      }
      return true;
   })
   .argv;
   module.exports = argv;