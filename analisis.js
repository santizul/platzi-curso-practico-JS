// Funciones helpers

function esPar(numerito) {
    return (numerito % 2 ===0);
  }


//Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = (personitaMitad1 + personitaMitad2) / 2;

        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }   
}

//Mediana general

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%. El siplce posiciona desde donde queremos cortar dentro del array y cuantos elementos queremos sacar.

const sipliceStart = (salariosColSorted.length * 90) / 100;
const sipliceCount = salariosColSorted.length - sipliceStart; // con esto obtenemos el numero de elementos cortados.

const salariosColTop10 = salariosColSorted.splice (sipliceStart, sipliceCount);

const medianaColTop10 = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaColTop10,
}); // Las llaves sirven para describir el objeto con su nombre y valor.

// RETO:
/// Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…
////El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.