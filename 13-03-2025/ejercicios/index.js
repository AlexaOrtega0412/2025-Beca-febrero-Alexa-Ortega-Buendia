document.addEventListener('DOMContentLoaded', function() {
    const trueFalseTable = document.querySelector('#trueFalseTable');
    const falseFalseTable = document.querySelector('#falseFalseTable');
    const falseTrueTable = document.querySelector('#falseTrueTable');
    const trueTrueTable = document.querySelector('#trueTrueTable');
    const orFalseFalseTable = document.querySelector('#orFalseFalseTable');
    const orFalseTrueTable = document.querySelector('#orFalseTrueTable');
    const orTrueFalseTable = document.querySelector('#orTrueFalseTable');
    const orTrueTrueTable = document.querySelector('#orTrueTrueTable');
    const notFalseTable = document.querySelector('#notFalseTable');
    const notTrueTable = document.querySelector('#notTrueTable');

    function addRow(tableBody, operation, result) {
        const row = document.createElement('tr');
        const operationCell = document.createElement('td');
        const resultCell = document.createElement('td');

        operationCell.textContent = operation;
        resultCell.textContent = String(result);

        if (result === true) {
            resultCell.classList.add('true-result');
        } else {
            resultCell.classList.add('false-result');
        }

        row.appendChild(operationCell);
        row.appendChild(resultCell);
        tableBody.appendChild(row);
    }

// INICIA LA SECCION DE AND 
    // true && false = false
    addRow(trueFalseTable, "10 && ''", (10 && ''));
    addRow(trueFalseTable, "[] && !!''", [] && !!'');
    addRow(trueFalseTable, "true && false", true && false);
    addRow(trueFalseTable, "10 > 5 && 3 < 1", 10 > 5 && 3 < 1);
    addRow(trueFalseTable, "\"manzana\" == \"manzana\" && \"rojo\" != \"rojo\"", "manzana" == "manzana" && "rojo" != "rojo");
    addRow(trueFalseTable, "1 && 0", 1 && 0);
    addRow(trueFalseTable, "true && null", true && null);
    addRow(trueFalseTable, "{a:1} && false", {a:1} && false);
    addRow(trueFalseTable, "[1,2,3] && \"\"", [1,2,3] && "");
    addRow(trueFalseTable, "typeof \"hola\" == \"string\" && 10 < 5", typeof "hola" == "string" && 10 < 5);

    // false && false = false
    addRow(falseFalseTable, "NaN && undefined", NaN && undefined);
    addRow(falseFalseTable, "0n && NaN", 0n && NaN);
    addRow(falseFalseTable, "[undefined] && [0]", [undefined] && [0]);
    addRow(falseFalseTable, "!true && !true", !true && !true);
    addRow(falseFalseTable, "10 === \"10\" && null === undefined", 10 === "10" && null === undefined);
    addRow(falseFalseTable, "10 % 3 === 0 && 15 / 4 > 5", 10 % 3 === 0 && 15 / 4 > 5);
    addRow(falseFalseTable, "\"2\" > \"12\" && 1 + \"1\" === 2", "2" > "12" && 1 + "1" === 2);

    // false && true = false
    let x = 5;
    addRow(falseTrueTable, "x > 10 && x === 5", x > 10 && x === 5);
    addRow(falseTrueTable, "[NaN] && 10 > 5", (![NaN] && 10 > 5));
    addRow(falseTrueTable, "!!false && 2 > 1", !!false && 2 > 1);
    addRow(falseTrueTable, "10 != 10 && 1 < 2", 10 != 10 && 1 < 2);
    addRow(falseTrueTable, "\"\" == \"algo\" && true", "" == "algo" && true);
    addRow(falseTrueTable, "5 * 2 == 11 && 10 / 2 == 5", 5 * 2 == 11 && 10 / 2 == 5);

    // true && true = true
    addRow(trueTrueTable, "true && true", true && true);
    addRow(trueTrueTable, "10 > 5 && 3 > 1", 10 > 5 && 3 > 1);
    addRow(trueTrueTable, "\"manzana\" == \"manzana\" && \"rojo\" == \"rojo\"", "manzana" == "manzana" && "rojo" == "rojo");
    addRow(trueTrueTable, "1 && 1", (!!1 && !!1));
    addRow(trueTrueTable, "{a:1} && {b:2}", (!!{a:1} && !!{b:2}));
    addRow(trueTrueTable, "[1,2,3] && \"hola\"", ([1,2,3] && !!"hola"));
    addRow(trueTrueTable, "typeof \"hola\" == \"string\" && 10 > 5", typeof "hola" == "string" && 10 > 5);

// INICIA LA SECCION DE OR

// false || false = false
addRow(orFalseFalseTable, "NaN || undefined", NaN || undefined);
addRow(orFalseFalseTable, "0n || NaN", 0n || NaN);
addRow(orFalseFalseTable, "[undefined] || [0]", [undefined] || [0]);
addRow(orFalseFalseTable, "!true || !true", !true || !true);
addRow(orFalseFalseTable, "10 === \"10\" || null === undefined", 10 === "10" || null === undefined);
addRow(orFalseFalseTable, "10 % 3 === 0 || 15 / 4 > 5", 10 % 3 === 0 || 15 / 4 > 5);
addRow(orFalseFalseTable, "\"2\" > \"12\" || 1 + \"1\" === 2", "2" > "12" || 1 + "1" === 2);

// false || true = true
let a = 5;
    addRow(orFalseTrueTable, "a > 10 || a === 5", a > 10 || a === 5);
    addRow(orFalseTrueTable, "[NaN] || 10 > 5", (![NaN] || 10 > 5));
    addRow(orFalseTrueTable, "!!false || 2 > 1", !!false || 2 > 1);
    addRow(orFalseTrueTable, "10 != 10 || 1 < 2", 10 != 10 || 1 < 2);
    addRow(orFalseTrueTable, "\"\" == \"algo\" || true", "" == "algo" || true);
    addRow(orFalseTrueTable, "5 * 2 == 11 || 10 / 2 == 5", 5 * 2 == 11 || 10 / 2 == 5);

// true || false = true
    addRow(orTrueFalseTable, "10 || ''", (10 || ''));
    addRow(orTrueFalseTable, "[] || !!''", [] || !!'');
    addRow(orTrueFalseTable, "true || false", true || false);
    addRow(orTrueFalseTable, "10 > 5 || 3 < 1", 10 > 5 || 3 < 1);
    addRow(orTrueFalseTable, "\"manzana\" == \"manzana\" || \"rojo\" != \"rojo\"", "manzana" == "manzana" || "rojo" != "rojo");
    addRow(orTrueFalseTable, "1 || 0", 1 || 0);
    addRow(orTrueFalseTable, "true || null", true || null);
    addRow(orTrueFalseTable, "{a:1} || false", {a:1} || false);
    addRow(orTrueFalseTable, "[1,2,3]|| \"\"", [1,2,3] || "");
    addRow(orTrueFalseTable, "typeof \"hola\" == \"string\" || 10 < 5", typeof "hola" == "string" || 10 < 5);

// true || true = true
    addRow(orTrueTrueTable, "true || true", true || true);
    addRow(orTrueTrueTable, "10 > 5 || 3 > 1", 10 > 5 || 3 > 1);
    addRow(orTrueTrueTable, "\"manzana\" == \"manzana\" || \"rojo\" == \"rojo\"", "manzana" == "manzana" || "rojo" == "rojo");
    addRow(orTrueTrueTable, "1 || 1", (!!1 || !!1));
    addRow(orTrueTrueTable, "{a:1} || {b:2}", (!!{a:1} || !!{b:2}));
    addRow(orTrueTrueTable, "[1,2,3] || \"hola\"", ([1,2,3] || !!"hola"));
    addRow(orTrueTrueTable, "typeof \"hola\" == \"string\" || 10 > 5", typeof "hola" == "string" || 10 > 5);


//INICIA LA SECCION DE NOT

// !False = True
    addRow(notFalseTable, "!false", !false);
    addRow(notFalseTable, "!''", !'');
    addRow(notFalseTable, "!null",!null);
    addRow(notFalseTable, "!undefined",!undefined);
    addRow(notFalseTable, "!!'dnjnd'", !!'dnjnd');
    addRow(notFalseTable, "!!{}", !!{});
    addRow(notFalseTable, "!!-1", !!-1);
// !True = False
addRow(notTrueTable, "!true", !true);
addRow(notTrueTable, "![1,2,3,4]", ![1,2,3,4]);
addRow(notTrueTable, "!'sjnjd'", !'sjnjd');
addRow(notTrueTable, "!!undefined", !!undefined);
addRow(notTrueTable, "!-1",!-1 );

// Funciones para los botones
window.mostrarAnd = function() {
    mostrarOperador('AND');
};

window.mostrarOr = function() {
    mostrarOperador('OR');
};

window.mostrarNot = function() {
    mostrarOperador('NOT');
};

function mostrarOperador(operador) {
    const tableSections = document.querySelectorAll('.table-section');

    tableSections.forEach(section => {
        if (section.dataset.operador === operador) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
const tableSections = document.querySelectorAll('.table-section');
tableSections.forEach(section => {
    section.style.display = 'none';
});

// Mostrar solo las tablas de AND al inicio
mostrarOperador('AND');
});