import { menuApp } from './core/menu.js';
import scanf from 'scanf';

var listaTarea = [];

do {
  console.log(menuApp);
  console.log('Ingrese una opcion: ');
  var opcion = scanf('%d');
  var salir = 5;
  var continuar;
  console.clear()

  switch (opcion) {
    case (1):
      console.log('---Crear tareas---\n');
      console.log('Nombre de Tarea: ');
      var tituloTarea = scanf('%S');

      let buscarTitulo = listaTarea.find(buscarTitulo => buscarTitulo.titulo === tituloTarea);

      if (buscarTitulo) {
        console.log('Este titulo ya existe en la lista')
        console.table(listaTarea)
        console.log('\n')
      } else {
        console.log('Descripcion de Tarea:')
        var descripcionTarea = scanf('%S');
        console.log('\n');

        var nuevaTarea = {
          titulo: tituloTarea,
          descripcion: descripcionTarea
        }
        listaTarea.push(nuevaTarea);
      }

      console.log('Enter para ir al Menú..');
      continuar = scanf('%s');
      console.clear();
      break;

    case (2):
      console.log('Lista de Tareas');
      console.table(listaTarea)

      console.log('Enter para continuar..');
      continuar = scanf('%s');
      console.clear();
      break;

    case (3):
      console.log('Actualizar tareas');
      console.table(listaTarea)

      console.log('Ingresar Indice del registro a Actualizar')
      var indiceTarea = scanf('%d');

      console.log('Actualizar Titulo: Si - No\n')
      let opcion = scanf('%S')

      if (opcion === 'si') {
        console.log('-----> Nuevo Titulo');
        let nuevoTitulo = scanf('%S');
        listaTarea[indiceTarea].titulo = nuevoTitulo;
      } else {
        console.log('...')
      }

      console.log('Actualizar Descripcion: Si - No');
      let opcion2 = scanf('%S')
      if (opcion2 === 'si') {
        console.log('-----> Nueva Descripcion');
        let nuevaDescripcion = scanf('%S');
        listaTarea[indiceTarea].titulo = nuevaDescripcion;
      } else {
        console.log('...');
      }
      console.clear();
      console.log('Registros Actualizados con Exito !!\n');
      console.table(listaTarea);
      console.log('\n');
      console.log('Enter para continuar..');
      continuar = scanf('%s');
      console.clear();
      break;

    case (4):
      console.log('Eliminar tareas');
      console.table(listaTarea)

      console.log('Ingresar Indice del registro a Eliminar')
      var indiceTarea = scanf('%d');

      console.log(`Desea eliminar el Indice ${indiceTarea} si - no\n`);
      console.log(listaTarea[indiceTarea]);
      let opcion3 = scanf('%S')
      if (opcion3 === 'si') {
        listaTarea.splice(indiceTarea, 1);
        console.clear();
        console.log('-----> Registro Eliminado con Exito');
        console.table(listaTarea)
      } else {
        console.log('...');
      }
      console.log('Enter para ir al Menú..');
      continuar = scanf('%s');
      console.clear();
      break;

    default:
      console.log('Gracias !');
  }

} while (opcion != parseInt(salir));

