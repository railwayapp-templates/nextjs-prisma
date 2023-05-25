import useSWR, { mutate } from "swr";
import { Todo } from '@prisma/client'

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const todoPath = "/api/todos";

export const useTodos = () => useSWR<Todo[]>(todoPath, fetcher);

export const createTodo = async (text: string) => {
  mutate(
    todoPath,
    todos => [{ text, completed: false, id: "new-todo" }, ...todos],
    false,
  );
  await fetch(todoPath, {
    method: "POST",
    body: JSON.stringify({ text }),
  });

  mutate(todoPath);
};

export const toggleTodo = async (todo: Todo) => {
  mutate(
    todoPath,
    todos =>
      todos.map(t =>
        t.id === todo.id ? { ...todo, completed: !t.completed } : t,
      ),
    false,
  );
  await fetch(`${todoPath}?todoId=${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: !todo.completed }),
  });
  mutate(todoPath);
};

export const deleteTodo = async (id: string) => {
  mutate(todoPath, todos => todos.filter(t => t.id !== id), false);
  await fetch(`${todoPath}?todoId=${id}`, { method: "DELETE" });
  mutate(todoPath);
};
