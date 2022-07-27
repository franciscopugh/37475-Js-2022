/*let numero = 9

if(numero >= 10) {
    console.log("Mayor que 10")
} else {
    console.log("Menor de 10")
}

let respuesta = (numero % 2 == 0) ? "Numero par" : ""

console.log(respuesta)

let desayuno = ""

let desayunoFinal = (desayuno == "cafe") ? "Cafe con leche" : (desayuno == "te") ? "Te con leche" : (desayuno == "chocolatada") ? "Chocolatada con leche" : "Mate"

console.log(desayunoFinal)

localStorage.setItem('aaa', JSON.stringify([{hola: "Hola"}]))

const productos = JSON.parse(localStorage.getItem("aaa")) ?? []

console.log(productos)

let nombre = undefined

console.log(nombre ?? "Nombre no valido")

const producto1 = {
    nombre: "Arroz",
    precio: 100
}
const producto2 = {
    nombre: "Cafe",
    precio: 400
}
const producto3 = {
    nombre: "Te",
    precio: 200
}
const producto4 = {
    nombre: "Fideos",
    precio: undefined
}

const productos = [ producto1, producto2, producto3, producto4]

let acumulador = 0
productos.forEach((producto) => {
    acumulador += producto.precio ?? 0
})

console.log(acumulador)

const persona1 = null

console.log(persona1?.sueldo ?? 0)

class Gato {
    constructor(nombre, color, raza, edad) {
        this.n = nombre
        this.c = color
        this.r  = raza
        this.e = edad
    }

    maullar() {
        console.log("Miau miau")
    }
}

const gato1 = new Gato("Stray", "Naranja", "Naranjoso", 2)
const gatitos = [gato1]
function mostrarNombre({n:nombre}) {
    console.log(nombre)
}

function mostrarRazaColor({r:raza, c:color}) {
    console.log(raza, color)
}

function mostrarEdad({e:edad}) {
    console.log(edad)
}

mostrarEdad(gato1)
mostrarNombre(gato1)
mostrarRazaColor(gato1)
*/
//0x0001 = {}
const persona1 = {
    nombre: "Pancho",
    apellido: "Perez",
    edad: 43,
    peso: 80,
    animales : [
        {nombre: "Pelusa", raza: "Naranjoso"},
        {nombre: "Copito de nieve", raza: "Blanco"}
    ]
}

const persona2 = structuredClone(persona1)

console.log(persona1)
console.log(persona2)

persona2.apellido = "Sanchez"
persona2.animales[1] = null

console.log(persona1)
console.log(persona2)

