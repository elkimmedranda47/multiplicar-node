const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')

.command('listar', 'IMPRIME EN CONSOLA LA TABLA DE MULTIPLICAR', opts)

.command('crear', 'PERMITE CREAR TABLAS POR CONSOLA INGRESADO UNA BASE Y UN LIMITE ', opts)


.help()
    .argv;

module.exports = { argv };