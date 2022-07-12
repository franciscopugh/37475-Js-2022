/*const parrafo1 = document.getElementById("parrafo1")
const parrafos = document.getElementsByClassName('parrafos')[0]
const parrafosP = document.getElementsByTagName(`p`)[0]

const user = {username: "Pancho", password: "123"}

parrafo1.innerText = `Hola ${user.username}, buenos dias!`
parrafos.innerHTML += "<p>Hola coders</p>"*/


class Producto {
    constructor(id, nombre, marca, precio,stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Yerba Mate", "La yerbita", 400, 20)
const producto2 = new Producto(2, "Fideos", "Fidein", 100, 25)
const producto3 = new Producto(3, "Cafe", "Le Cafe", 500, 22)
const producto4 = new Producto(4, "Arroz", "Arrocin", 200, 15)
const producto5 = new Producto(5, "Lentejas", "Lentejin", 250, 30)

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById('productos')

productos.forEach(productoArray => {
    divProductos.innerHTML += `
        <div class="card productos" id="producto${productoArray.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.marca}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
                <p class="card-text">Stock: ${productoArray.stock}</p>

        </div>
        </div>
    
    `
})