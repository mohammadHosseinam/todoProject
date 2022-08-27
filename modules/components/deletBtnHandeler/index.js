import { renderNewTodoList } from "../rerenderNewTodos/index.js";
import { locattedTodos } from "../locattedTodos/index.js";
import {updateSavedTodos} from "../../controller/handleCreatNewTodo.js";
const todoUl = document.getElementById("todoMainUl");
export function deletBtnHandeler(btn) {
  btn.addEventListener("click", () => {
    const filterdTodos = locattedTodos().filter(
      (item) => Number(btn.id) !== item.id
    );
    updateSavedTodos(filterdTodos)
    localStorage.setItem("todosList", JSON.stringify(filterdTodos));
    todoUl.innerHTML = "";
    renderNewTodoList();
  });
}
