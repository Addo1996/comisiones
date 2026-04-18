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
    //let componenteSueldoBase = document.getElementById("txtSueldoBase"); 
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    // Recuperar valores
    //ya no se utilizaron estas funciones que se estan comentado ya que se realizo otra funcion en utilitarios.
    //let sueldoBaseStr = componenteSueldoBase.value;
    //let numeroVentasStr = componenteVentas.value;
    //let precioProductoStr = componentePrecio.value; 
    //let sueldoBaseStr=recuperartext("txtSueldoBase");
    //let numeroVentasStr=recuperartext("txtVentas");
    //let precioProductoStr=recuperartext("txtPrecio")
 

    // Convertir a números
    let sueldoBase = recuperarFloat("txtSueldoBase")
    let numeroVentas = recuperarFloat("txtVentas"); 
    let precioProducto = recuperarFloat("txtPrecio");

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