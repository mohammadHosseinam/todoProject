import { renderNewTodoList } from "../rerenderNewTodos/index.js";
import { locattedTodos } from "../locattedTodos/index.js";
import {updateSavedTodos} from "../../controller/handleCreatNewTodo.js";
const todoUl = document.getElementById("todoMainUl");
export function checkBtnHandeler(btn, checkBtn) {
  checkBtn.addEventListener("click", () => {
    const checkedTodo = locattedTodos().filter(
      (item) => item.id === Number(btn.id)
    );
    const ChangedCheckedTodo = {
      ...checkedTodo[0],
      check: true,
    };
    const uncheckedTodo = locattedTodos().filter(
      (item) => item.id !== Number(btn.id)
    );
    const newTodoChecked = [...uncheckedTodo, ChangedCheckedTodo];
    updateSavedTodos(newTodoChecked)
    localStorage.setItem("todosList", JSON.stringify(newTodoChecked));
    todoUl.innerHTML = "";
    renderNewTodoList();
  });
}
