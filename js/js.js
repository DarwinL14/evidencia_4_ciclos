//evidencia 4 ciclos
//1. Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.?

let numeros = [];

for (i=0; i<=9; i++){
    var x = prompt("ingrese 10 números");
    numeros[i] = x;
}

document.write(numeros);

//2. Cree un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)?
/*
let num =prompt("ingrese un número del 1 al 10");
for (i=1; i<=12; i++){
        let resultado = num * i;
        document.write(num + " x " + i  + " = " + resultado + "<br>");
    }*/


/*//3. factorial
    let contador = 1;
    let factorial = 1;
    let numero = prompt("escriba el número");
    while (contador <= numero){
        factorial =  factorial * contador;
        contador = contador + 1
    }
    document.write("el factorial de " + numero + " es " + factorial);*/
/*
    //4. saldo de cuenta
    let num_cuenta = prompt("ingrese su número de cuenta");
    let name = prompt("ingrese su nombre");
    let saldo = prompt("ingrese su saldo actual");
    */