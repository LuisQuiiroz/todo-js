import { todoList } from '..';
import { Todo } from '../classes';

// Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const  crearTodoHtml = ( todo ) =>{
    const todoHtml =`
    <li class="${(todo.completado ? 'completed' : '')}" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado ? 'checked' : '')}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = todoHtml;

    divTodoList.appendChild( div.firstElementChild );

    return div.firstElementChild;

}

//Eventos
txtInput.addEventListener('keyup', ( event ) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){

        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo( nuevoTodo );
        // console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';

    }
});

divTodoList.addEventListener('click', (event) =>{
    const nombreElemento = event.target.localName;//label, input, button
    const todoElemento = event.target.parentElement.parentElement;// se obtiene el li
    const todoId = todoElemento.getAttribute('data-id'); //obtiene el atributo data-id

    if( nombreElemento.includes( 'input' ) ){
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed'); //Si ya esta la clase,la quita, si no la agrega
    } else if ( nombreElemento.includes( 'button' )){ //Hay que borrar el todo
        todoList.eliminarTodo( todoId ); //Lo elimina del arreglo
        divTodoList.removeChild( todoElemento ); //Remueve el elemento HTML acorde al al boton seleccionado
    }

    console.log(todoList);
});

btnBorrar.addEventListener('click', () =>{
    todoList.eliminarCompletados(); // Los elimina del arreglos que está en la clase
    
    //For inverso
    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        const elemento = divTodoList.children[i];
        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text; // Todos, Pendientes, Completados
    if( !filtro ){ return; } //Undefined

    anchorFiltros.forEach( elem => elem.classList.remove('selected')); // Remueve la clase 'selected' del cada <a> del HTML, correspondientes a la clase 'filters' del ul
    event.target.classList.add('selected');


    for(const elemento of divTodoList.children){ // Recorre cada todo que haya en el html
        elemento.classList.remove('hidden');  // Remueve la clase hidden
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden'); // Si estan completados, los oculta
                }
            break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden'); // Los que no están completados, los oculta
                }
        }
    }
});