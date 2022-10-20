import TodoItem from "./TodoItem";
import todos from "./todos";

const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul>
            {
                todos.map(todo => {
                  return(<TodoItem key={todo.title} todo={todo}/>);
                })
            }
            </ul>
        </>
    );
}

export default TodoList;