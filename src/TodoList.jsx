import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}){
  return(
    <ol className="list">
      {todos.length===0  && "No todos"}
      {
        todos.map(todo=>{
          return(
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })
      }
    </ol>
  )
  
}