const input = document.querySelector('#input-search');

const frutas = [
    "perro",
    "gato",
    "cisne",
    "caballo",
    "vaca"
];

let listaFiltrada =[]; 

// Crea una lista para las opciones
const ol = document.getElementById('animales');


input.addEventListener('input', () => {
    const texto = input.value;

    listaFiltrada = frutas.filter((element) => element.includes(texto));
    ol.innerHTML = '';
    listaFiltrada.forEach((option) => {
        const li = document.createElement('li');
        li.innerText = option;

        //Redirecciona al hacer click en la opcion
        li.addEventListener('click', () => {
            window.location.href = https://www.google.com/search?q=${option};
        });
        ol.appendChild(li);
    });

    console.log(listaFiltrada);

});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && listaFiltrada.includes(input.value.toLowerCase())) {
        window.location.href = https://www.google.com/search?q=${input.value.toLowerCase()};
    }
});


input.addEventListener('blur', () => {
    setTimeout(() => ol.innerHTML = '', 100);
});