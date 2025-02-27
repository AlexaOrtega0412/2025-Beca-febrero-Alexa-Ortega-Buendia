document.getElementById("getAPIBtn").addEventListener('click', function () {
    let listado = document.getElementById("pokeGrid");
    listado.innerHTML = "";

    fetch('https://pokeapi.co/api/v2/pokemon?limit=32&offset=0')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {
                let imgContainerID = `imgContainer${item.name}`;

                let card = document.createElement("div");
                card.classList.add("pokeCard");

                // Todas las tarjetas inician volteadas
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <div id="${imgContainerID}" class="contenedorInfoImagen"></div>
                        </div>
                        <div class="card-back"></div>
                    </div>
                `;

                listado.appendChild(card);
                getDataPoke(item.url, imgContainerID);

                // Evento para voltear la tarjeta (ahora quitar la clase flipped)
                card.addEventListener("click", function () {
                    card.classList.toggle("flipped");
                });
            });
        })
        .catch(error => console.error(error));
});

function getDataPoke(url, imgContainerID) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let imgContainer = document.getElementById(imgContainerID);
            imgContainer.innerHTML = `<img src="${data.sprites.front_shiny}" width="100"/>`;
        })
        .catch(error => console.error(error));
}



