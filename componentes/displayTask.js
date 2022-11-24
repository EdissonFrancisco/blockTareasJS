import { crearCard } from "./addTask.js";
import { orderDates, uniqueDate } from "../services/date.js";
import dataElement from "./dataElement.js";

export function displayTask() {

    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    const dates = uniqueDate(taskList);
    
    orderDates(dates);

    dates.forEach((date) => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dataElement(date));
        taskList.forEach((task) => {
            const taskMoment = moment(task.date, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskMoment);
            if (diff === 0) {
                list.appendChild(crearCard(task));
            }
        });
    });


}