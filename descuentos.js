const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = (100 - descuento);
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;


console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})  // con {} se imprime el nombre de los objetos con su valor.

// En forma de funcion

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = (100 - descuento);
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}




// Funcion para el html y preguntar datos al usuario.
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("Resultado");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


// RETOS:

// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

// Déjame tu solución en los comentarios y luego, sí, evalúa mis 3 propuestas.


