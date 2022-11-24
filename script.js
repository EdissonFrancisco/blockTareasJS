import { addTask } from "./componentes/addTask.js";
import { displayTask } from "./componentes/displayTask.js";

const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', addTask);

displayTask();