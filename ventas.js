const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0; 
    
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.1);
    }
    return comision;
}

function calcular() {
    // Recuperar componentes
    let componenteSueldoBase = document.getElementById("txtSueldoBase"); 
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    // Recuperar valores
    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let precioProductoStr = componentePrecio.value; 

    // Convertir a números
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr); 
    let precioProducto = parseFloat(precioProductoStr);

    // Llamar a la función (Sin comillas y con variables correctas)
    let comisionTotal = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comisionTotal;

    // Mostrar resultados
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");
    
    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comisionTotal;
    spTotal.textContent = total;
}