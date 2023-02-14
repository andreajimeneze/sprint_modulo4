import { Producto } from "./class/Producto.js"

const producto = new Producto()

var catalogo = await producto.obtenerProductos()

function mostrarProductos() {
    
    catalogo.forEach(producto => {
        let filaPdtos = document.createElement("tr");
        filaPdtos.innerHTML =
            `   <th>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><img src="${producto.link}" style="height: 100px;"></td>
            <td>${producto.etiqueta}</td>
            <td>${producto.stock}</td>
            <td><button class="btn btn-success" id="btnEditar_${producto.id}">Editar</button></td>
            <td><button class="btn btn-danger" id="btnEliminar_${producto.id}">Eliminar</button></td>
            </th>`

     $("#filasPdtos").append(filaPdtos)
    })

}
mostrarProductos()

$("#btnEditar").on("click", function(){
    window.open("http://www.google.com", "_blank", "width:500px, height:500px");
})

