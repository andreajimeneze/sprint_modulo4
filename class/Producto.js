export class Producto{
    constructor(){
    }
    obtenerProductos(){
        return fetch("https://bsite.net/metalflap/td-producto")
        .then(response => response.json())
        .then(data => data.filter(productos => productos.idSucursal == 2))
}

    crearProducto(){
        fetch("https://bsite.net/metalflap/td-producto")
        
    }


}
