let description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

let completed = {
    alias: 'c',
    demand: true,
    desc: 'Marca como p=pendiente o c=completada la tarea'
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tareas por hacer', {})
    .command('crear', 'Crea una nueva tarea por hacer', {
        description
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        description
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        description,
        completed
    })
    .help()
    .argv;

module.exports = {
    argv
}