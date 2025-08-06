//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log("Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5")
console.log("Hola Grupo")


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
let string='Roxi';
console.log(string);// una variable de texto

let number = 52;
console.log(number);

let violeta = true;
console.log(violeta);

let casa = null;
console.log(casa);

let sinDefinir;
console.log(sinDefinir);

let lapices = {bolis:6, libros:'blanca nieves',coches: true};
console.log(lapices.libros);

let lista = ['Jose', 'pablo' , 'Luis', 'Maria'];
console.log(lista);







//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let sum = 2 + 8;
console.log(sum);





//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let reste = 40 - 19;
console.log(reste);


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let vasosRefrescos = 5 * 4;
console.log(vasosRefrescos);


//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let pizzas = 16 / 4;
console.log(pizzas);



//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let piano = 1;
let bombos = 1;
let instrumentos = (piano == bombos);
console.log(instrumentos);//PREGUNTAR A LA PROFESORA PORQUE ME DA FALSO



// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let comprobacion = (piano != bombos);
console.log(comprobacion);

let numberSix = '8';
let numberSeven = '8';
console.log(numberSix == numberSeven);





//Ejercicio 10: completa el ejercicio

let num1 = 15
let num2 = 20

console.log( num1 <= num2);



//Ejercicio 11: completa el ejercicio

let num3 = 1
let num4 = "1"

console.log(num3 === num4);



//Ejercicio 12: completa el ejercicio

let num8 = 12;
let num9 = "12";
console.log(num8 == num9);



//OPERADORES DE CADENAS
let nombre = "Roxi";
let apellido = "Felm";
let nombreCompleto = nombre + " " + apellido;
console.log("nombre de coder:", nombreCompleto);


//OPERADORES LÓGICOS
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

 let a = 6;
 let b = 3;

let res = (a < 10) && (b > 1); // true
console.log(res);

let res2 = (a < 10) && (b < 1); // false
console.log(res2);

let res3 = (a == 5) || (b == 5); // false
console.log(res3);

let res4 = (a == 6) || (b == 0); // true
console.log(res4);

let res5 = (a == 0) || (b == 3); // true
console.log(res5);

let res6 = (a == 6) && (b == 3);//true
console.log(res6); 
