/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(1000)

//  INICIO     FIN    INICIO A MI FIN
for(let i = 1; i <= 100;i++) { // i += 1  i = i + 1
 
    // 2 / 2 = 1 resto = 0
    // 3 / 2 = 1 resto = 1
    if(i % 2 !== 0) {
        continue
    }

    console.log(i)
}

let acumulador = 0

/*0 + 1 +2 +3 +4 +5 +6 +7+ 8+ 9+ 10
  1  + 2
  3 + 3
  6+ 4
  10 + 5
  15 + 6
  21
for(let i = 1; i <= 100; i++) {
    acumulador += i  //acumulador = acumulador + i
}

console.log(acumulador)

let repetir = true

while(repetir) {
    let palabra = prompt("Ingrese No para terminar").toLowerCase() //No NO nO no

    if(palabra === "no") {
       repetir = false //break
    }
}
*/
let numero1, numero2, operacion

//isNaN(numero) = verdadero si numero es NaN, falso sino

 
//5                 NaN
        //F            V      V   

/*
    isNaN(numero1) || isNaN(numero2)
        V           V       V
        V           V        F 
        F           V       V
        F           F       F  
*/

do {
    numero1 = parseFloat(prompt("Ingrese un numero")) //5 
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion (+, -, *, /)")
}while(isNaN(numero1) || isNaN(numero2)) //isNaN(5) = false isNaN(NaN) = true

switch(operacion) {
    case "+":
        alert(numero1 + numero2);
        break;
    case "-":
        alert(numero1 - numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    default:
        alert("Operacion no valida")
        break
}
