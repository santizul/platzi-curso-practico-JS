// Media aritmetica: (x1, x2, x3, x4)/4  ->  No refleja la realidad cuando un dato es extremadamente mayor a la mayoria de datos.

// Mediana: (x1, (x2), x3) o cuando es par (x1, (x2, x3)/2, x4) -> se toma el valor del medio de menor a mayor. 
/// En caso de ser par se toman los 2 valores de la mitad y se divide entre 2. De esta manera es posible tener en cuenta
//// un dato exageradamente mayor.

// Moda: La moda se representa con el numero o los numeros que se repita o repitan la mayor cantidad de veces en una lista.
/// La lista puede contener numeros o cualquier otro valor como texto, etc...


function calcularMedia(lista) {
    let sumaLista = 0;  // la palabra reservada let indica que la variable no sera constante sino variable precisamente.

    for(let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
    }

    const promedioLista = sumaLista / lista.length;

    return promedioLista; // el return es muy importante para imprimir los valores deseados.
}

calcularMedia([34, 38, 29, 7]);


// funcion pero con metodo de array.reduce en vez de for:

function calcularMedia(lista) {
    const sumaLista = lista.reduce(     // con este metodo se ejecuta una funcion reductora que va tomando cada valor de un array.
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista; // el return es muy importante para imprimir los valores deseados.
}

calcularMedia([34, 38, 29, 7]);