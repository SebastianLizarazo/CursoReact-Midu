import { TODO_FILTERS } from "./consts"

//el .d del nombre del archivo indica que el archivo no va a tener codigo

import { TODO_FILTERS } from "./consts"

//sino que va a tener las declaraciones de los tipos
export interface Todo {
    id: string
    title: string
    completed: boolean
}

//tipos de datos que pueden ser usados en el componente
//Hace que solo sea necesario cambiar los tipos desde aquí
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'> 
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[] 

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]