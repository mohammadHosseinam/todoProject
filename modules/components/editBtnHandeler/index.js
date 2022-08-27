import { renderNewTodoList } from "../rerenderNewTodos/index.js";
import { locattedTodos } from "../locattedTodos/index.js";
import {updateSavedTodos} from "../../controller/handleCreatNewTodo.js";
const todoUl = document.getElementById("todoMainUl");
export function editBtnHandeler(btn, editBtn, inputTitle, paraInput) {
  editBtn.addEventListener("click", () => {
    inputTitle.disabled = false;
    inputTitle.select();
    inputTitle.style.backgroundColor = "blue";
    paraInput.disabled = false;
    paraInput.select();
    paraInput.style.backgroundColor = "blue";
    editBtn.innerHTML = "save";
    editBtn.addEventListener("click", () => {
      const editedTodo = locattedTodos().filter(
        (item) => item.id === Number(btn.id)
      );
      const uneditedTodos = locattedTodos().filter(
        (item) => item.id !== Number(btn.id)
      );
      const newEditedTodo = {
        ...editedTodo[0],
        title: inputTitle.value,
        desc: paraInput.value,
      };
      const editedTodoAndOthers = [...uneditedTodos, newEditedTodo];
    updateSavedTodos(editedTodoAndOthers)
      localStorage.setItem("todosList", JSON.stringify(editedTodoAndOthers));
      todoUl.innerHTML = "";
      renderNewTodoList();
    });
  });
}
