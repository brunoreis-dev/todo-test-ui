import {
  CreateTodo,
  DeleteTodo,
  GetTodos,
  UpdateTodoCompleted,
} from '@services/todoAPI';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ToDoContextData {
  tasks: Task[];
  handleCreateNewTask: (title: string) => void;
  handleToggleTaskCompletion: (id: string, is_complete: boolean) => void;
  handleRemoveTask: (id: string) => void;
  handleSearchTodos: (id: string, is_complete: boolean) => void;
}

const ToDoContext = createContext<ToDoContextData>({} as ToDoContextData);

type Task = {
  id: string;
  name: string;
  is_complete: boolean;
};

type ToDoProviderProps = {
  children: ReactNode;
};

export function ToDoProvider({ children }: ToDoProviderProps): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchName, setSearchName] = useState('');
  const [searchCompleted, serSearchCompleted] = useState(false);

  async function handleCreateNewTask(name: string) {
    if (!name) return;

    await CreateTodo(name);

    if (searchName && !searchCompleted) {
      const response = await GetTodos({ name: searchName });
      setTasks(response.data);
      return;
    }

    if (searchCompleted && !searchName) {
      const response = await GetTodos({ is_complete: searchCompleted });
      setTasks(response.data);
      return;
    }

    if (searchCompleted && searchName) {
      const response = await GetTodos({
        name: searchName,
        is_complete: searchCompleted,
      });
      setTasks(response.data);
      return;
    }

    const response = await GetTodos({});

    setTasks(response.data);
  }

  async function handleSearchTodos(name: string, is_complete: boolean) {
    setSearchName(name);
    serSearchCompleted(is_complete);

    if (is_complete && !name) {
      const response = await GetTodos({ is_complete });
      setTasks(response.data);
      return;
    }

    if (name && !is_complete) {
      const response = await GetTodos({ name });
      setTasks(response.data);
      return;
    }

    const response = await GetTodos({ name, is_complete });
    setTasks(response.data);
  }

  async function handleToggleTaskCompletion(id: string, is_complete: boolean) {
    await UpdateTodoCompleted(id, is_complete);

    if (searchName && !searchCompleted) {
      const response = await GetTodos({ name: searchName });
      setTasks(response.data);
      return;
    }

    if (searchCompleted && !searchName) {
      const response = await GetTodos({ is_complete: searchCompleted });
      setTasks(response.data);
      return;
    }

    if (searchCompleted && searchName) {
      const response = await GetTodos({
        name: searchName,
        is_complete: searchCompleted,
      });
      setTasks(response.data);
      return;
    }

    const response = await GetTodos({});

    setTasks(response.data);
  }

  async function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    await DeleteTodo(id);

    setTasks(filteredTasks);
  }

  useEffect(() => {
    async function getTodos() {
      const response = await GetTodos({});

      setTasks(response.data);
    }

    getTodos();
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        handleRemoveTask,
        handleCreateNewTask,
        handleToggleTaskCompletion,
        handleSearchTodos,
        tasks,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export function useTodo(): ToDoContextData {
  const context = useContext(ToDoContext);

  return context;
}
