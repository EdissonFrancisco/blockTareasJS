const checkComplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', (e) => tareaCompletada(e, id));
    return i;
};

const tareaCompletada = (e, id) => {
    const elemento = e.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');

    const tareas = JSON.parse(localStorage.getItem('task'));
    const index = tareas.findIndex((item) => item.id === id);
    tareas[index]['complete'] = !tareas[index]['complete'];
    localStorage.setItem('task', JSON.stringify(tareas));
};

export default checkComplete; 