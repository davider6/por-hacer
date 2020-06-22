// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear tarea');
        let crear = porHacer.crear(argv.description);
        console.log(crear);
        break;
    case 'listar':
        let tareas = porHacer.listarTareas();
        console.log('======== Por Hacer ======='.green);
        for (let tarea of tareas) {
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Completada: ${tarea.completado}`);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.description, argv.completado);
        console.log(`Tarea actualizada: ${actualizar}`);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.description);
        console.log(`Tarea borrada: ${borrar}`);
        break;
    default:
        console.log('Comando desconocido');
}