const eliminar = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', eliminarTarea);
    return i;
};

const eliminarTarea = (e) => {
    const elemento = e.target.parentElement;
    elemento.remove();
}

export default eliminar;