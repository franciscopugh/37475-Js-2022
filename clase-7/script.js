/*const impuestoPais = (producto) => producto * 0.30
const impuestoRetenciones = (producto) => producto * 0.35
const impuestoIVA = (producto) => producto * 0.21
const impuestoX = (producto) => producto * 0.10

function calcularImpuestos(producto) {
    return producto + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIVA(producto) + impuestoX(producto) 
}

let precioFinal = calcularImpuestos(100)

console.log(precioFinal)

const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese una edad")), parseFloat(prompt("Ingrese un sueldo")))

console.log(persona1)*/

class Persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo =sueldo
    }
}

const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000)
const persona2 = new Persona(2, "Maria", "Martinez", 22, 15000)
const persona3 = new Persona(3, "Pedro", "Parker", 28, 12000)
const persona4 = new Persona(4, "Fernanda", "Fernandez", 32, 18000)
const persona5 = new Persona(5, "Pedro", "Carles", 34, 19000)

const personas = [persona1, persona2, persona3, persona4, persona5]

//const personaArray = (persona) => console.log(persona)
/*personas.forEach(persona => {
    persona.sueldo *= 1.30
    console.log(persona)
})

let nombreABuscar = prompt("Ingrese un nombre")
let apellidoABuscar = prompt("Ingrese un apellido")

console.log(personas.find(persona => persona.nombre == nombreABuscar && persona.apellido == apellidoABuscar))

const personasFiltradas = personas.filter(persona => persona.sueldo > 20000)
console.log(personasFiltradas)
personasFiltradas.forEach(persona => {
    console.log(persona)
})

let consulta = personas.some(persona => persona.sueldo >20000)

if(consulta) {
    console.log(personas.filter(personas => personas.sueldo > 20000))
} else {
    nsole.log("No existen personas cuyo sueldo sea mayor a 15000")
}
const sueldosId = personas.map(persona => persona = {sueldo: persona.sueldo, id: persona.id})


const sueldos = personas.map(persona => persona.sueldo)
/*
let acumulador = 0
sueldos.forEach(sueldo => {
    acumulador += sueldo
})
console.log(sueldos)

const sueldosAcum = sueldos.slice(0,3)

let acumulador = sueldosAcum.reduce((prev, act) => prev + act, 0)

console.log(acumulador)

const caracteres = ['h', 'o', 'l', 'a']

console.log(caracteres.reduce((prev, act) => prev + act, ''))*/

const sueldos = personas.map(persona => persona.sueldo)

console.log(sueldos)
console.log(sueldos.sort((sueldo1,sueldo2) => sueldo1-sueldo2))
console.log(sueldos.sort((sueldo1,sueldo2) => sueldo2-sueldo1))
