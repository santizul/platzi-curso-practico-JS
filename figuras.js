// Codigo del cuadrado
console.group("Cuadrado"); // FORMA DE 

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd(); // AGRUPAR CODIGO EN CONSOLA.

// Codigo del triangulo
console.group("Triangulo"); // FORMA DE 

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

console.group(""); // FORMA DE 


// Codigo del circulo 
console.group("Circulo");

function diametroCirculo(radio) {
    return radio *2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
} 

console.groupEnd();

// Aqui interactuamos con el HTML.

function calcularPerimetroCuadrado {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // muestra el valor obtenido del recuadro.

    const perimetro = areaCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // muestra el valor obtenido del recuadro.

    const area = areaCuadrado(value); // saca el valor del area
    alert(area);    // genera alerta del valor del area.


    // RETO: Crear funciones para triangulos y circulo.
    // En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
}