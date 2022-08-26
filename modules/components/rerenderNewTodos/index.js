import {locattedTodos} from "../locattedTodos/index.js";
import {creatTodoLi} from "../creatTodoLi/index.js";
export function renderNewTodoList(){
    locattedTodos().forEach((items) => {
    creatTodoLi(items.title, items.desc, items.id, items.check);
  });
}