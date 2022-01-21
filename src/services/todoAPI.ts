import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TODO_API,
});

type GetTodosRequestType = {
  is_complete?: boolean;
  name?: string;
};

export const CreateTodo = (name: string) => api.post('todos', { name });

export const GetTodos = ({ is_complete, name }: GetTodosRequestType) =>
  api.get(`/todos/`, {
    params: { name, is_complete },
  });

export const FindById = (id: string) => api.get(`todos/${id}`);

export const DeleteTodo = (id: string) => api.delete(`todos/${id}`);

export const UpdateTodoCompleted = (id: string, is_complete: boolean) =>
  api.patch(`todos/${id}`, {
    is_complete: is_complete,
  });
