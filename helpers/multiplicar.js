const fs = require('fs');
const colors = require('colors')

const creararchivo = (base = 5, listar, hasta =10 )=>{
  return new Promise ((rese,r)=>{
   if (listar){
   console.log('============'.green)
   
    console.log(`Tabla del ${base}`.green)
    console.log('============='.green)
   }
   let str = '';
   let consola='';
   for(let i = 1 ;i <= hasta ; i++){
     consola += `${base} ${'x'.green} ${i} = ${base * i}\n`.gray;
      str += `${base} x ${i} = ${base * i}\n`;
   }
  if (listar){ 
   console.log (consola)}
   fs.writeFileSync(`./resultados/tabla del ${base}.txt`, str ) ;

   rese(`Tabla de ${base}.txt creado`.cyan)

});}
module.exports = {
    creararchivo
}
