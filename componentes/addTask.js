import eliminar from './eliminar.js';
import checkComplete from './check.js';
import { displayTask } from './displayTask.js';

export const addTask = (e) => {
    const lista = document.querySelector('[data-list]');
    crearTarea(e, lista);
}

//arrou function 
const crearTarea = (e, lista) => {
    e.preventDefault();
    const input = document.querySelector('[data-form-input]');
    
    const tasks = {
        value: input.value,
        date: fechaTask(),
        complete: false,
        id: uuid.v4()
    }

    if (tasks.value === '' || tasks.date === '') { 
        return
    }

    lista.innerHTML = '';
    permanentDate(tasks);
    displayTask();
    input.value = '';
};

const permanentDate = ({value, date, complete, id}) => {
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    const taskObj = { 
        value,
        date,
        complete,
        id
    }
    taskList.push(taskObj);
    localStorage.setItem('task', JSON.stringify(taskList));
}

export const crearCard = ({value, date, complete, id}) => {
    const tarea = document.createElement('LI');
    tarea.classList.add('card');
    
    const contenidoTarea = document.createElement('DIV');
    const check = checkComplete(id);
    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    contenidoTarea.appendChild(check);

    const tituloTarea = document.createElement('SPAN');
    tituloTarea.classList.add('task');
    tituloTarea.innerText = value;

    const dataElement = document.createElement('SPAN');
    dataElement.innerHTML = date;
    
    contenidoTarea.appendChild(tituloTarea);
    tarea.appendChild(contenidoTarea);
    tarea.appendChild(dataElement);
    tarea.appendChild(eliminar());

    return tarea;
};

const fechaTask = () => {
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    if (date === '') {
        return '';
    } else {
        const dateFormat = moment(date).format('DD/MM/YYYY');
        calendar.value = '';
        return dateFormat;
    }
    
}
