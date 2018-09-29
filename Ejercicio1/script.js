/*Variables*/
var inventario = [];
var ventas = [];
var negocio = "La Jefecita";
var owner = {
    nombre: "Michelle",
    ocupacion : "Estudiante"
};


/* Creacion de objetos por medio de funciones */ 
function Producto(codigo="",descripcion="",tipo="",precioC=0.0,precioV=0.0,cant=0){
    this.codigo=codigo;
    this.descripcion=descripcion;
    this.tipo=tipo;
    this.precioC=precioC;
    this.precioV=precioV;
    this.cant = cant;
}



function crearProducto(){
    var codigo=prompt("Ingrese codigo de producto: ");
    var descripcion= prompt("Ingrese descripcion del producto: ");
    var tipo = prompt("ingrese tipo de producto: ");
    var precioC= parseFloat(prompt("Ingrese Precio de Compra: "));
    var precioV = parseFloat( prompt("Ingrese precio de venta: "));
    var cant = parseInt(prompt("Ingrese cantidad de productos a inventar: "));
    return new Producto(codigo,descripcion,tipo,precioC,precioV,cant);
}

function inventar(){
    inventario.push(crearProducto());
}


function changeStock(codigo="",cant=0){
    if(inventario.length==0){
        console.log("No tienes inventario almacenado!");
    }
    for(let producto in inventario){
        if(producto.codigo==codigo){
            producto.cant=cant;
        }
        else{
            console.log("Imposible encontrar producto");
        }
    }

}



function modificarStock(){
    var codigo=prompt("Ingrese codigo de producto a modificar stock: ");
    var cant = prompt("Ingrese nuevo stock * Usted va a establecer un nuevo stock* :");
    changeStock(codigo,cant);
}


function mostrarInv() {
    if(inventario.length==0){
        console.log("Inventario vacio duh");
    }else{

    inventario.forEach(product => {
     console.log("Codigo :" + product.codigo + " Descripcion: " + product.descripcion + " Tipo: " + product.tipo + " Precio Venta: " + product.precioV + " Precio Compra: " + product.precioC + " Stock: " + product.cant);
    });
}

}


function mostrarProductosVacios(){
    if(inventario.length==0){
        console.log("Inventario vacio duh");
    }else{

    inventario.forEach(product => {
        if(product.cant==0){
     console.log("Codigo :" + product.codigo + " Descripcion: " + product.descripcion + " Tipo: " + product.tipo + " Precio Venta: " + product.precioV + " Precio Compra: " + product.precioC + " Stock: " + product.cant);
    }});
}
}