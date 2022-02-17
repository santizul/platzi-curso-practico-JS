const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {    // pregunta si el elemento ya esta dentro del array.
            lista1Count[elemento] += 1; // sumar 1 al mismo elemento.
        } else {
            lista1Count[elemento] = 1; // cuando no existe decimos que ese elemento ha aparecido solo una vez.
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(   //funcion RARISIMA que, ordena los valores de la lista. Repasarla.
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

moda;

// Reto: funcion que admita cualquier lista y encontrar una solucion mas simple, sin dar tanta vuelta.

// Otro reto: Responde las siguientes preguntas en los comentarios:
// ¿Cuál tipo de promedio elegiste para trabajar?
// ¿Qué casos de uso tiene tu tipo de promedio?
// ¿Cómo traduces su fórmula a código JavaScript?