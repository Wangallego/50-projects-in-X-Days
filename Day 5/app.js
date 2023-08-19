const listaNumeros = document.getElementById("lista-numeros");
const content = document.querySelector(".content")
function mostrarNumerosProgresivamente() {
    const numerosDel0Al100 = Array.from({ length: 101 }, (_, i) => i);

    let index = 0;

    function eliminarDesenfoqueProgresivamente() {
        let blurAmount = 10; // Valor inicial de desenfoque
        const interval = 300; // Intervalo en milisegundos
        const step = 1; // Paso de cambio en el desenfoque
    
        const desenfocar = setInterval(() => {
            if (blurAmount > 0) {
                blurAmount -= step; // Reduce el desenfoque en el paso especificado
                content.style.filter = `blur(${blurAmount}px)`;
            } else {
                clearInterval(desenfocar); // Detiene el intervalo cuando el desenfoque llega a cero
            }
        }, interval);
    }
    eliminarDesenfoqueProgresivamente();
    function mostrarSiguienteNumero() {
        if (index < numerosDel0Al100.length) {
            const li = document.createElement('li');
            li.textContent = numerosDel0Al100[index] + '%';

            // Vaciar el contenido anterior del elemento <ul>
            listaNumeros.innerHTML = '';

            // Agregar el nuevo número a la lista
            listaNumeros.appendChild(li);

            index++;

            // Configurar el tiempo de espera en milisegundos (3 segundos en este caso)
            setTimeout(mostrarSiguienteNumero, 50);
        }
    }

    mostrarSiguienteNumero(); // Iniciar la función recursiva
}

// Llama a la función para comenzar a mostrar los números progresivamente
mostrarNumerosProgresivamente();
