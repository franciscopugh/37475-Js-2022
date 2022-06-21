//Desayuno es igual a Cafe
/*let desayuno = prompt("Ingrese su desayuno").toLowerCase() //CAFE = cafe

if(desayuno == "cafe") { //Desayuno es igual a Cafe?
    console.log("Desayuno cafe con leche");
} else if(desayuno == "te") {
    console.log("Desayuno te con leche");
} else if(desayuno == "chocolatada") {
    console.log("Desayuno chocolatada");
} else {
    console.log("Desayuno mate mirando una pared")
}*/

//parseFloat() paso string a numero flotanto, o sea con coma
//parseInt() paso string a numeros enteros, o sea elimino decimales


/*
    5 == "5" //Mismo valor
    "5" + "5" = "55"
    5 + 5 = 10
    "5" + 5 = "55"

    == "Se utiliza para valor"
    === "Se utiliza para valor y tipo"
    



if(5 === "5") {
    console.log("V")
} else {
    console.log("F")
}

//NaN cuando no me ingresan un numero
let numero = parseFloat(prompt("Ingrese un numero"))

console.log(numero)

if(isNaN(numero)) { //Verdadero si numero es NaN
    alert("Numero no valido")
} else {
    console.log(numero + 5)
}

let numero1 = 3
let numero2 = 2


if(numero1 === 5 || numero2 === 10) {
    console.log("V")
} else {
    console.log("F")
}

/*
    numero1     ||      numero2
        V       V          V         
        V       V          F
        F       V          V
        F       F          F



if(numero1 === 5 && numero2 === 10) {
    console.log("V")
} else {
    console.log("F")
}


    numero1     &&      numero2
        V        V         V         
        V        F         F
        F        F         V
        F        F         F


1 a 5 "Desaprobado"
6 o 7 "Aprobado Bien"
8 o 9 "Aprobado Muy bien"
10 "Aprobado Excelente"
*/

let nota = parseInt(prompt("Ingrese una nota"))

let desaprobado = (nota >= 1 && nota <= 5)
let bien = (nota === 6 || nota === 7)
let muyBien = (nota === 8 || nota === 9)
let excelente = (nota === 10)

if(desaprobado) {
    alert("Alumno/a desaprobado")
} else if(bien) { //nota >= 6 && nota <= 7
    alert("Alumno/a aprobado con nota de Bien")
} else if(muyBien) {
    alert("Alumno/a aprobado con nota de Muy Bien")
} else if(excelente) {
    alert("Alumno/a aprobado con nota de Excelente")
} else {
    alert("Nota no valida")
}

if(nota >= 1 && nota <= 10) {
    if(nota <= 5) {
        alert("Alumno/a desaprobado")
    } else if(nota <= 7) {
        alert("Alumno/a aprobado con nota de Bien")
    } else if(nota <= 9) {
        alert("Alumno/a aprobado con nota de Muy Bien")
    } else {
        alert("Alumno/a aprobado con nota de Excelente")
    }
} else {
    alert("Nota no valida")
}