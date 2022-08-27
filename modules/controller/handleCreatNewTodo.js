import { creatTodoLi } from "../components/creatTodoLi/index.js";
import { renderNewTodoList } from "../components/rerenderNewTodos/index.js";
import { locattedTodos } from "../components/locattedTodos/index.js";
import {invalideInputErorrFn} from "../components/invalidInputError/index.js";
const todoInputText = document.getElementById("inputText");
const todoTextArea = document.getElementById("textArea");
let savedTodos = []
export function updateSavedTodos(value) {
  savedTodos = value
}
renderNewTodoList();
export const handleCreatNewTodo = (eventa) => {
  eventa.preventDefault();
  const newTodo = {
    title: todoInputText.value,
    desc: todoTextArea.value,
    id: Date.now(),
    check: false,
  };
  if (!newTodo.title) return invalideInputErorrFn();
  creatTodoLi(newTodo.title, newTodo.desc, newTodo.id, newTodo.check);
  savedTodos.push(newTodo);
  localStorage.setItem("todosList", JSON.stringify(savedTodos));
};
