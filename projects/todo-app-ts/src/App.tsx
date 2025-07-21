import React from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: true,
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false,
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = React.useState(mockTodos)
  const {filterSelected, setFilterSelected} = React.useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo =>{
      if(todo.id === id){
        return {
          ...todo, 
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos =todos.filter(todo => {
    if (filterSelected=== TODO_FILTERS.ACTIVE) return !todo.completed //Muestra los que no estan completados
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed //Muestra los que estan completados
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  } 

  return(
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
