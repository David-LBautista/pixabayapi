const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
const paginacion = document.querySelector('#paginacion');




window.onload = () => {
    form.addEventListener('submit', validarFormulario);


};

function validarFormulario(e) {
    e.preventDefault();

    const termino = document.querySelector('#termino').value;

    if (termino === '') {
        mostrarAlerta('Agrega un termino de busqueda');
        return;
    }
}

function mostrarAlerta(mensaje) {
    const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = ` 
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;
    form.appendChild(alerta);
}