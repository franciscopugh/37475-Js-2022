class Producto {
    constructor(nombre = "Predeterminado", marca = "Predeterminado", precio = 1, stock = 1) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

function buscarProducto(productos) {
    let nombreProducto = prompt("Ingrese un nombre de producto")

    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto)

    if(productoBuscado == undefined) {
        console.log("Producto no encontrado")
    } else {
        console.log(productoBuscado)
    }
}

function buscarProductos(productos) {
    let precio = parseFloat(prompt("Ingrese un precio"))
    let productosBuscados = productos.filter(producto => producto.precio >= precio)

    if(productosBuscados.length == 0) {
        console.log("No hay productos con dichas caracteristicas")
    } else {
        console.log(productosBuscados)
    }
} 

function ordenarProductos(productos) {

    let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if(metodoOrdenamiento === 1) {
        console.log(productos.sort((a,b) => a.precio-b.precio))
    } else if(metodoOrdenamiento === 2) {
        console.log(productos.sort((a,b) => b.precio-a.precio))
    }
    
}
/*
const producto1 = new Producto("Cafe", "Cafecito", 100, 20)
const producto2 = new Producto("Te", "Tecito", 120, 25)
const producto3 = new Producto("Arroz", "Arrocin", 200, 10)
const producto4 = new Producto("Fideos", "Fideito", 80, 30)

const productos = [producto1, producto2, producto3, producto4]*/
const productos = []

const mts = 1000

let precio, stock, nombre, marca, continua, respuesta
//Solicitud de datos al usuario
do {
    
    do {
        nombre = prompt("Ingrese un nombre de producto").toLowerCase()
        marca = prompt("Ingrese marca de producto").toLowerCase()
    
    } while((nombre.length == 0 || marca.length == 0))
   
    //Validacion precio y stock validos
    do {
        precio = parseFloat(prompt("Ingrese un precio de producto")) 
        stock = parseInt(prompt("Ingrese stock de producto"))

    }while((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0))

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
    continua = prompt("¿Desea ingresar mas productos?").toLowerCase()
} while(continua != "no")


do {
    respuesta = parseInt(prompt(`Ingrese numero para:
        1- Buscar un producto
        2- Buscar productos por precio
        3- Ordenar de menor a mayor
    `))
} while(respuesta <1 || respuesta >3)


switch(respuesta) {
    case 1:
        buscarProducto(productos)
        break
    case 2:
        buscarProductos(productos)
        break
    case 3:
        ordenarProductos(productos)
        break
    default:
        alert("Opcion no valida")
        break
}