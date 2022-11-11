import checkComplete from './componentes/check.js';
import eliminar from './componentes/eliminar.js';

(() => {
    const btn = document.querySelector('[data-form-btn]');

    //arrou function 
    const crearTarea = (e) => {
        e.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const lista = document.querySelector('[data-list]');
        lista.appendChild(crearCard(value));
        input.value = '';
    };

    btn.addEventListener('click', crearTarea);

    const crearCard = (value) => {
        const tarea = document.createElement('LI');
        tarea.classList.add('card');
        
        const contenidoTarea = document.createElement('DIV');
        contenidoTarea.appendChild(checkComplete());

        const tituloTarea = document.createElement('SPAM');
        tituloTarea.classList.add('task');
        tituloTarea.innerText = value;
        
        contenidoTarea.appendChild(tituloTarea);

        tarea.appendChild(contenidoTarea);
        tarea.appendChild(eliminar());
        return tarea;
    };

})();