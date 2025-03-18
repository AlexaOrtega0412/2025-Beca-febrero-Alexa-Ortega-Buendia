// Obtener todos los elementos necesarios
const filterSpans = document.querySelectorAll('.filtro span');
const jobItems = document.querySelectorAll('.job-item');
const selectedFiltersContainer = document.querySelector('.selected-filters');

let selectedFilters = [];

// Función para actualizar los trabajos visibles según los filtros
function filterJobs() {
    jobItems.forEach(job => {
        const jobTags = job.querySelectorAll('.job-tags span');
        const jobHasSelectedFilters = selectedFilters.every(filter => {
            return Array.from(jobTags).some(tag => tag.textContent.toLowerCase() === filter.toLowerCase());
        });

        // Mostrar o esconder el trabajo según si tiene todas las etiquetas seleccionadas
        job.style.display = jobHasSelectedFilters ? 'flex' : 'none';
    });
}

// Función para manejar los clics en los filtros
filterSpans.forEach(span => {
    span.addEventListener('click', () => {
        const filterText = span.textContent.trim();

        // Si el filtro ya está seleccionado, lo eliminamos
        if (selectedFilters.includes(filterText)) {
            selectedFilters = selectedFilters.filter(filter => filter !== filterText);
            span.style.backgroundColor = '';  // Cambiar el color de fondo para mostrar que no está seleccionado
        } else {
            // Si no está seleccionado, lo agregamos a la lista
            selectedFilters.push(filterText);
            span.style.backgroundColor = 'hsl(180, 29%, 50%)';  // Cambiar el color de fondo al seleccionarlo
        }

        // Actualizar el contenedor de filtros seleccionados
        updateSelectedFilters();

        // Filtrar los trabajos con los filtros seleccionados
        filterJobs();
    });
});

// Función para actualizar el contenedor de filtros seleccionados
function updateSelectedFilters() {
    // Limpiar el contenedor de filtros seleccionados
    selectedFiltersContainer.innerHTML = '';

    // Crear un span para cada filtro seleccionado
    selectedFilters.forEach(filter => {
        const filterElement = document.createElement('span');
        filterElement.textContent = filter;
        filterElement.addEventListener('click', () => {
            // Eliminar el filtro al hacer clic en él
            selectedFilters = selectedFilters.filter(f => f !== filter);
            filterSpans.forEach(span => {
                if (span.textContent === filter) {
                    span.style.backgroundColor = '';  // Cambiar color de fondo para mostrar que no está seleccionado
                }
            });
            updateSelectedFilters();
            filterJobs();
        });
        selectedFiltersContainer.appendChild(filterElement);
    });
}

// Inicialmente mostrar todos los trabajos
filterJobs();