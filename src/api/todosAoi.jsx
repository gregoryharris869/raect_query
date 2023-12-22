import axios from "axios";

const todosApi = axios.create({
  baseURL: "htp://localhost:3500",
});

export const getTodos = async (todo) => {
  const response = await todosApi.get("/todos", todo);
  return response.data;
};

export const addTodos = async (todo) => {
  return await todosApi.post("/todos", todo);
};

export const updateTodos = async (todo) => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodos = async ({ id }) => {
  return await todosApi.delete(`/todos/${id}`, id);
};

export default todosApi;
