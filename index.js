let num1 = 2
let num2 = 6
if (num1 > num2) {
alert = num1 + (" es mas grande ")    
} else {
    alert = num2 + ("es mas grande")
}
let number = 1
if (number > 0) {
  alert = ("este numero es positivo")  
}
if (number == 0) {
  alert = ("este numero es cero")  
}
if (number < 0) {
  alert = ("este numero es negativo")  
}
const verificarParInpar = (numero) => {
    if ((numero / 2) == (numero/2) ){
        alert('El numero es par')
    }else {
        alert('El numero es inpar')
    }


const verificarEdad = (numeroEdad) => {
    if(verificarEdad<18){
        alert('Eres Menor De Edad')
    }else{
        alert('Eres Mayor de edad')
    }


const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

const consultarDiaDeLaSemana = (dia) => {
+
alert('El dia es ' + dias[Number(dia)])

let volverAConsultar = confirm('Quieres hacer otro calculo?')
if (volverAConsultar){
    volverAConsultar(prompt('Ingresa un número de la semana y te dire cual dia es'))
}

}


volverAConsultar(prompt('Ingresa un número de la semana y te dire cual dia es'))

const numeroDivisiblePor3Y5 = (numero) => {

    if ((numero / 3) == Math.round((numero / 3)) && (numero / 5) == Math.round((numero / 5)) ){
        alert('El numero si es divisible por 3 y 5')
    }else {
        alert('El numero no es divisible')
    }


const determinarNumero = (numero) {
    if (numero > 0 && numero < 100){
        alert('El Numero Ingresado Es Positivo y Menor A 100')
    }else {
        alert('El Numero No Cumple Con Los Requisitos')
    }


const jubilarse = (edad, genero) =>{

    genero = genero.toLowerCase()
    if (edad > 60 && genero == 'mujer') {
        alert('Te Puedes Jubilar')
    }else if ( edad > 65 && genero == 'hombre'){
        alert('Te Puedes Jubilar')
    }else{
        alert('No Te Puedes jubilar')
    }

}
let numero1 = (Number(prompt("ingresa tu edad")))
let numero2 = (Number(prompt("ingresa tu edad")))
let numero3 = (Number(prompt("ingresa tu edad")))
if ((numero1 == numero2) || (numero1 == numero3) || (numero2==numero3)) {
    alert ("hay dos numero iguales")
} else if (numero1==numero2==numero3){
    alert ("los tres numeros son iguales")
}else{ 
 alert ("no hay numeros iguales")
}   
let division= (Number(prompt = ("ingrese un numero")))
if ((division /4) && (division /6)) {
    alert ("este numero es divisible por 4 y por 6 ")
} 
if ((division /9) && (division/12)) {
    alert("este numero es divisible por 9 y por 12")
}
let edad1 = (Number(prompt("ingresa tu edad")))
let edad2 = (Number(prompt("ingresa tu edad")))
let edad3 = (Number(prompt("ingresa tu edad")))
if ((edad1 => 18) || (edad2 => 18) || (edad3 => 18)){
    alert ("hay una edad o mas que es mayor a 18")
} else {
    alert ("no hay ninguna edad mayor a 18")
}