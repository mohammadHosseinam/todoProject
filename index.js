import {handleCreatNewTodo} from "./modules/controller/handleCreatNewTodo.js"
const todoSubmitBtn = document.getElementById("submitBtn")
todoSubmitBtn.addEventListener("click" , handleCreatNewTodo)