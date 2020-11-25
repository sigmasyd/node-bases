//const fs = require('fs');         // propios o preinstalados
//const fs = require('express');  // paquetes externos instalados
//const fs = require('./fs');     // archivos que hemos creado dentro del proyecto
const argv = require('yargs')
  .command('listar','Imprime en consola la tabla de multiplicar',{
    base: {
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
  })
  .help()
  .argv;

const { crearArchivo , listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
console.log(argv);
switch(comando){
  case 'listar':
    console.log("Listar:",argv.base,argv.limite);
    listarTabla(argv.base,argv.limite);
  break;
  case 'crear':
    console.log("Crear",argv.base);
    crearArchivo(argv.base,argv.limite)
      .then( archivo => console.log(`Archivo creado: ${archivo}`) )
      .catch( console.log );
  break;
  default:
    console.log("Comando no reconocido");
}



//let base = '2';

// let {argv} = process;
// console.log(process.argv, argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv , parametro, base);
//let argv2 = process.argv;
//console.log(argv,argv2);
//console.log(argv , argv.base);


