const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', tareaCompletada);
    return i;
};

const tareaCompletada = (e) => {
    const elemento = e.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
};

export default checkComplete;