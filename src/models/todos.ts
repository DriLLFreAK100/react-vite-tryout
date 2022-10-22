import { v4 as uuidv4 } from 'uuid';
import { define } from '../hooks/useModel'

type TodoStatus = 'created' | 'in-progress' | 'completed'

type Todo = {
  id: string | number;
  name: string;
  description?: string;
  status: TodoStatus;
}

type State = {
  editingName: string;
  todos: Todo[];
}

const initialState: State = {
  editingName: '',
  todos: [],
}

export default define({
  state: {
    ...initialState
  },
  actions: {
    handleCreate: (state: State) => {
      if (state.editingName) {
        state.todos = [...state.todos, {
          id: uuidv4(),
          name: state.editingName,
          status: 'created'
        }]

        state.editingName = '';
      }
      return { ...state };
    },
    handleSetEditingName: (state: State, value: string) => {
      return {
        ...state,
        editingName: value
      };
    },
    handleDelete: (state: State, id: string | number) => {
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== id),
      };
    },
  }
});
