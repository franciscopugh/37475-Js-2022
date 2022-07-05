/*const valores = []
const cosas = [true, 56, "Hola", false, "Chau", 100]

//cosas = null
cosas[0] = "Saludos"

cosas[10] = "Hola gente"

console.log(cosas[10])
                    //6
for(let i = 0; i < cosas.length; i++) {
    console.log(cosas[i]) //cosas[0] cosas[1] ... cosas[4]
}

console.log(cosas)*/



/*
let nombreEliminar = prompt("Ingrese un nombre a eliminar")

let indice = alumnos.indexOf(nombreEliminar)

if(indice != -1) {
    alumnos.splice(indice,1)
} else {
    alert("Usuario no encontrado")
}
/*
console.log(alumnos)

alumnos.splice(0,alumnos.length)

console.log(alumnos)
/*
alumnos.shift()
let alumnoBrandon = alumnos.pop()
console.log(alumnos)
console.log(alumnoBrandon)

const tutores = ["Samuel"]
console.log(tutores.shift())
console.log( tutores)

const alumnos1 = ["Camilo", "Julieta", "Santiago", "Luca"]

alumnos1.push("Brandon")
alumnos1.unshift("Diego")

const alumnos2 = ["Rocio", "Juan", "Santiago", "Fernando"]
const alumnos3 = ["Luciana", "Miguel", "Felipe"]

const alumnosTotales = alumnos3.concat(alumnos1.concat(alumnos2))

console.log(alumnosTotales)

console.log(alumnosTotales.slice(9,13))

console.log(alumnosTotales.includes("Miguel"))

console.log(alumnosTotales.reverse())

console.log(alumnosTotales)*/

class Perro {
    constructor(id, nombre, color, raza,cachorros) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.raza = raza
        this.cachorros = cachorros
    }

}

const perro1 = new Perro(1, "Cual", "Negro", "Ovejero", ["Cualcito", "Pirata", "Firulais", "Hector", "Tarzan"])
const perro2 = new Perro(2, "Copito de nieve", "Blanco", "Chihuahua", ["Negrito", "Azulcito"])
const perro3 = new Perro(3, "Fatiga", "Marron", "Indefinida", [])
const perro4 = new Perro(4, "Hercules", "Dorada", "Golden", ["Marroncito", "Zafiro", "Pepito"])

const perros = [perro1, perro2, perro3, perro4]

console.log(perros)

console.log(perros[2].raza)