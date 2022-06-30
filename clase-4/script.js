/*function saludar() {
    console.log("Hola, te estoy saludando!")
}

saludar()
saludar()
saludar()*/
/*
//              valores predeterminados
function sumar(numero1 = 0, numero2 = 0) {

    return numero1 + numero2
}

let numero1 = parseFloat(prompt("Ingrese un numero")) // 20
let numero2 = parseFloat(prompt("Ingrese otro numero")) // 30

let x = sumar(20,40)
console.log(x)

function saludar(nombre) {
    //"Hola, me llamo " + nombre + " y te estoy saludando"
    return `Hola, me llamo ${nombre} y te estoy saludando`
}

alert(saludar("Lu"))

const IVA = 1.21

function calcularIVA(precioProducto) {
    //const IVA = 1.30 ESTO NO SE HACE
    return precioProducto * IVA
}

console.log(calcularIVA(100))
console.log(IVA)


function sumar(num1,num2) {
    return num1 + num2
}

function restar(num1,num2) {
    return num1 - num2
}

function dividir(num1,num2) {
    return num1 / num2
}

function multiplicar(num1,num2) {
    return num1 * num2
}

const sumar = function (num1, num2) {
    return num1 + num2
}

const restar = function (num1, num2) {
    return num1 - num2
}

const multiplicar = function (num1, num2) {
    return num1 * num2
}

const dividir = function (num1, num2) {
    return num1 / num2
}*/

const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresame numeros validos :3")
    } 

    if(numero2 === 0 && operacion === "/") {
        alert("No se puede dividir entre cero")
    }

}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion === "/"))

switch(operacion) {
    case "+":
        alert(sumar(numero1, numero2))
        break
    case "-":
        alert(restar(numero1, numero2))
        break
    case "*":
        alert(multiplicar(numero1, numero2))
        break
    case "/":
        alert(dividir(numero1, numero2))
        break
    default:
        alert("Operacion no valida")
        break
}