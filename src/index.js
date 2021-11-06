import './styles.css';

import { Todo, TodoList } from './classes'; //Busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));
// todoList.todos.forEach(crearTodoHtml);


// const newTodo = new Todo('Aprendiendo cosas');
// todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();// NO se puede imprimir porque el localStorage guarda la informacion dentro de un arreglo de objetos, por lo que se necetisa convertir los objetos del arreglo en arreglos

console.log('todos', todoList.todos);


// const tarea = new Todo("Aprender JavaScript");
// todoList.nuevoTodo( tarea );
// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('my-key', '1234'); // Los datos se mantienen indefinidametne.
// sessionStorage.setItem('my-key', '1234'); // Los datos se eliminan al cerrar el navegador

// setTimeout(() =>{
//     localStorage.removeItem('my-key');
// }, 1500);
