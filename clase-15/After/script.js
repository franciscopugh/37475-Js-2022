const tableId = document.getElementById("tableId")
const boton1 = document.getElementById("boton1")
/*fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        tBody.innerHTML += `
            <tr id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.nombre}</td>
                <td>${producto.marca}</td>
                <td>${producto.modelo}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><img src="./img/${producto.img}"></td>
                <td><button class="btn btn-dark"> Comprar </button>
            </tr>
        `
    })
})
*/

async function mostrarProductos() {
    const productos = await fetch('./json/productos.json')
    const productosParseados = await productos.json()
    tableId.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Imagen</th>
                <th scope="col"></th>
            </tr>
        </thead>
            <tbody id="tBody">

            </tbody>
        </table>
    
    `
    productosParseados.forEach((producto, indice) => {
        tBody.innerHTML += `
            <tr id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.nombre}</td>
                <td>${producto.marca}</td>
                <td>${producto.modelo}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><img src="./img/${producto.img}"></td>
                <td><button class="btn btn-dark"> Comprar </button>
            </tr>
        `
})}


boton1.addEventListener('click', mostrarProductos)

boton1.addEventListener('click', () => {
    mostrarProductos()
})
