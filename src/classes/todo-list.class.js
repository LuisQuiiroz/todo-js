import {Todo} from './todo.class';

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter(todo => todo.id != id); //Hace un nuevo arreglo y guarda todas las tareas en 'this.todos' excepto el 'todo.id' que conicida con el 'id'
        // Se recibe un 'id' y se regresa un nuevo arreglo excluyendo o filtrando el 'todo' que coincida con ese 'id'
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for(const todo of this.todos){
            // console.log(todo.id, id);
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado); // Retorna todos los que no esten completados
        this.guardarLocalStorage();
        
    }
    guardarLocalStorage(){
        localStorage.setItem( 'todo', JSON.stringify(this.todos) );
        // JSON.stringify(): Convierte el arreglo de 'todos' a un JSON perfecto
    }
    cargarLocalStorage(){
        // if( localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo') );
        //     // Convierte el json, que es un string, en un arreglo
        //     console.log('Cargar Local:', this.todos);
        // }else{
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse( localStorage.getItem('todo') ) // retorna un arreglo de objetos
                    : []; // retorna un arreglo vacio
        // this.todos = this.todos.map( obj => Todo.fromJSON(obj));
        this.todos = this.todos.map(Todo.fromJSON);
        // map() permite barrer cada uno de los elementos que estan dentro de un arreglo y retorna un nuevo arreglo con cada uno de sus objetos mutados
    }
}