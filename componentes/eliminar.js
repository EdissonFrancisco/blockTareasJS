import { displayTask } from "./displayTask.js";

displayTask
const eliminar = (id) => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click',  () => eliminarTarea(id));
    return i;
};

const eliminarTarea = (id) => {
    const lista = document.querySelector('[data-list]');
    const tareas = JSON.parse(localStorage.getItem('task'));
    const index = tareas.findIndex((item) => item.id === id);
    tareas.splice(index, 1);
    lista.innerHTML = '';
    localStorage.setItem('task', JSON.stringify(tareas));
    displayTask();
}

export default eliminar;