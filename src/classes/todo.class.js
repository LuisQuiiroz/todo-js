export class Todo {

    static fromJSON( {tarea, id, completado, creado}){ // desestructuracion de elementos de un arrego
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }   // Con esta funcion estatica se  crea la instancia para poder recuperar los métodos que tiene la clase y poder utilizar 'inprimirClase'

    constructor( tarea ){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}