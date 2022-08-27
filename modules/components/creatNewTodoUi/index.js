const todoUl = document.getElementById("todoMainUl");
import { deletBtnHandeler } from "../deletBtnHandeler/index.js";
import { checkBtnHandeler } from "../checkBtn/index.js";
import { editBtnHandeler } from "../editBtnHandeler/index.js";
export function creatNewTodoUi(title, desc, id, check) {
  const listItem = document.createElement("li");
  const listTitle = document.createElement("h3");
  const inputTitle = document.createElement("input");
  listTitle.appendChild(inputTitle);
  inputTitle.className = "input-styles title";
  inputTitle.value = title;
  inputTitle.disabled;
  const listPara = document.createElement("p");
  const paraInput = document.createElement("input");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  listItem.appendChild(listTitle);
  paraInput.value = desc;
  paraInput.disabled;
  paraInput.className = "input-styles";
  listPara.appendChild(paraInput);
  listItem.appendChild(listPara);
  todoUl.style.listStyle = "none";
  todoUl.appendChild(listItem);
  delBtn.innerHTML = "Delete";
  editBtn.setAttribute("class", "");
  delBtn.setAttribute("class", "btn btn-outline-secondary me-2");
  listItem.appendChild(delBtn);
  editBtn.innerHTML = "Edit";
  editBtn.setAttribute("class", "btn");
  editBtn.setAttribute("class", "btn btn-outline-warning me-2");
  listItem.appendChild(editBtn);
  checkBtn.innerHTML = "Check";
  checkBtn.setAttribute("class", "btn");
  checkBtn.setAttribute("class", "btn btn-success");
  listItem.appendChild(checkBtn);
  delBtn.id = id;
  if (check) {
    inputTitle.setAttribute("class", "text-primary input-styles");
    paraInput.setAttribute("class", "text-primary input-styles");
  }
  deletBtnHandeler(delBtn);
  checkBtnHandeler(delBtn, checkBtn);
  editBtnHandeler(delBtn, editBtn, inputTitle, paraInput);
}
