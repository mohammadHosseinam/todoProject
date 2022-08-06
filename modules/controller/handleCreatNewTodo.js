const todoInputText = document.getElementById("inputText");
const todoTextArea = document.getElementById("textArea");
const todoUl = document.getElementById("todoMainUl");
const creatTodoLi = (title, desc, id, check) => {
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
  listPara.appendChild(paraInput)
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
  console.log(listItem)
  if (check){
    inputTitle.setAttribute("class", "text-success input-styles")
    paraInput.setAttribute("class", "text-success input-styles")
  } 
  delBtn.addEventListener("click", () => {
    const filterdTodos = savedTodos.filter(
      (item) => Number(delBtn.id) !== item.id
    );
    localStorage.setItem("todosList", JSON.stringify(filterdTodos));
    location.reload();
  });
  checkBtn.addEventListener("click", () => {
    const checkedTodo = savedTodos.filter(
      (item) => item.id === Number(delBtn.id)
    );
    const ChangedCheckedTodo = {
      ...checkedTodo[0],
      check: true,
    };
    const uncheckedTodo = savedTodos.filter(
      (item) => item.id !== Number(delBtn.id)
    );
    const newTodoChecked = [...uncheckedTodo, ChangedCheckedTodo];
    localStorage.setItem("todosList", JSON.stringify(newTodoChecked));
    location.reload();
  });
  editBtn.addEventListener("click", () => {
    inputTitle.disabled = false;
    inputTitle.select();
    inputTitle.style.backgroundColor = "blue";
    paraInput.disabled = false;
    paraInput.select();
    paraInput.style.backgroundColor = "blue";
    editBtn.innerHTML = "save";
    editBtn.addEventListener("click", () => {
      const editedTodo = savedTodos.filter(
        (item) => item.id === Number(delBtn.id)
      );
      const uneditedTodos = savedTodos.filter((item) =>item.id !== Number(delBtn.id));
      const newEditedTodo = {
        ...editedTodo[0],
        title: inputTitle.value,
        desc: paraInput.value,
      };
      const editedTodoAndOthers = [...uneditedTodos, newEditedTodo];
      localStorage.setItem("todosList", JSON.stringify(editedTodoAndOthers));
      location.reload()
    });
  });
};

const localStorgeSavedTodos = localStorage.getItem("todosList");
const paresedLocalStorgeSavedTodos = JSON.parse(localStorgeSavedTodos) || [];
const savedTodos = [...paresedLocalStorgeSavedTodos];
savedTodos.forEach((items) => {
  creatTodoLi(items.title, items.desc, items.id, items.check);
});

export const handleCreatNewTodo = (eventa) => {
  eventa.preventDefault();
  const newTodo = {
    title: todoInputText.value,
    desc: todoTextArea.value,
    id: Date.now(),
    check: false,
  };
  if (!newTodo.title) return alert("invalid input....");
  creatTodoLi(newTodo.title, newTodo.desc, newTodo.id, newTodo.check);
  savedTodos.push(newTodo);
  localStorage.setItem("todosList", JSON.stringify(savedTodos));
};
