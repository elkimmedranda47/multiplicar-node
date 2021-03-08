//require
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./');
//objeto gloval que esta disponible a lo largo de la aplicasion
//console.log(module);


const argv = require('./config/yargs.js').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');







let comando = argv._[0];

//console.log(comando);
//console.log(argv.base);








switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado: ${colors.green(archivo)}`); })
            .catch(e => { console.log(e); })
        break;

    default:
        console.log('Comando no reconocido ');
}






//console.log(process.argv);

//let argv = process.argv;

//let paramentro = argv[2];

//let base = paramentro.split('=')[1];
//console.log(base);
//**************************************** */
//console.log(argv.base);
//console.log('limite', argv.limite);

/*
crearArchivo(base)
    .then(archivo => { console.log(`Archivo creado: ${archivo}`); })
    .catch(e => { console.log(e); })

    */