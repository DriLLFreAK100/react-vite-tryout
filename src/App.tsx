import useModel from './hooks/useModel';
import todosModel from './models/todos';
import './App.css'

const App = () => {
  const [{ editingName, todos }, actions] = useModel(todosModel);

  return (
    <>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.name} <button onClick={() => actions.handleDelete(todo.id)}>Delete</button>
          </li>
        ))}

      </ul>
      <div>
        <input aria-label="todo-name-input" value={editingName} onChange={e => actions.handleSetEditingName(e.target.value)} />
        <button onClick={actions.handleCreate}>Save</button>
      </div>
    </>
  );
}

export default App
