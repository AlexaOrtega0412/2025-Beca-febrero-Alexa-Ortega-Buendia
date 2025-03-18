let botonSend = document.getElementById("sendbutton");
let productTable = document.getElementById("productTable").getElementsByTagName("tbody")[0];
let productForm = document.getElementById("productForm");

botonSend.addEventListener("click", function (event) {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    const disponibilidad = document.getElementById("disponibilidad").value;

    let newRow = productTable.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = nombre;
    cell2.innerHTML = precio;
    cell3.innerHTML = descripcion;
    cell4.innerHTML = disponibilidad;

    if(disponibilidad === "disponible"){
        cell4.classList.add("disponible");
    } else if(disponibilidad === "agotado"){
        cell4.classList.add("agotado");
    }

    productForm.reset();
});