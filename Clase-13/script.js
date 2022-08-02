class Producto {
    constructor(nombre, marca ,precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("Cafe", "Le Cafe", 430, 10)
const producto2 = new Producto("Arroz", "Arrocin", 120, 3)
const producto3 = new Producto("Arroz", "Arrocin", 120, 3)
const producto4 = new Producto("Arroz", "Arrocin", 120, 3)
const producto5 = new Producto("Arroz", "Arrocin", 120, 3)

const productos = [producto1, producto2, producto3, producto4, producto5]

const botonCarrito = document.getElementById("carrito")
const divProductos = document.getElementById("divProductos")

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
        <div class="card border-secondary mb-3" id="producto${indice}" style="max-width: 20rem; margin:3px">
            <div class="card-header">${producto.nombre}</div>
                <div class="card-body">
                    <h4 class="card-title">${producto.marca}</h4>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">${producto.stock}</p>
                    <button class="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
                </div>
        </div>
    `
})

productos.forEach((producto, indice) => {
    document.getElementById(`producto${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to bottom left, #30655A, #0229BA)",
            },
            onClick: function(){
                console.log("Diste click")
            } // Callback after click
          }).showToast();
    })
})

botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra finalizada', '', 'success')
        } 
      })
})

