   
   const argv = require('./config/yargs'); 
const {creararchivo } = require('./helpers/multiplicar');
   console.clear()
   
   
  
    
   
   
   
   console.log (`base ${argv.base}`)

   creararchivo(argv.b, argv.l, argv.h)
  .then(nombre => console.log(`${nombre}`))
  .catch(err => console.log(err));
 