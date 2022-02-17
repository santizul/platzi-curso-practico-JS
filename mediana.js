const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2); // reduciendo los decimales se busca bien la posicion del elemento en el array.

function esPar(numerito) {
    if (numerito % 2 === 0) {   // si el numero divido entre 2 da residuo 0
        return true;
    }   else {
        return false;
    }
}

if (esPar(lista1.length))   {
    const elemento1 = lista1[mitadLista1 - 1];  // elemento anterior a la mitad de la lista.
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = (elemento1 + elemento2) / 2;

    mediana = promedioElemento1y2;

}   else {
    mediana = lista1[mitadLista1]
}

// Reto: convertir esto en una funcion que admita cualquier lista. Y que esa lista se ordene automaticamente, usando metodo sort de arrays.
/// tambien se puede usar for para ordenar los datos.



