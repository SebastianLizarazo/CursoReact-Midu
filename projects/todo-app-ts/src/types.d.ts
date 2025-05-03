//el .d del nombre del archivo indica que el archivo no va a tener codigo
//sino que va a tener las declaraciones de los tipos
export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type ListOfTodos = Todo[] 