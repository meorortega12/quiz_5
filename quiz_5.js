//Ejercicio 1. Crea una función que acepte dos parámetros y devuelva la suma de ambos. Invoca la función con diferentes argumentos y muestra los resultados en la consola.//
function suma (a,b){
    console.log(a+b);
}

suma(1,2);
suma(3,4);
suma(40,55);


//Ejercicio 2. Crea una función que acepte un parámetro con un valor predeterminado. Invoca la función sin argumentos y con un argumento para ver ambos resultados.

function módulo (a, b=2) {
    console.log(a%b);
}

módulo(55);
módulo();

//Ejercicio 3. Usa parametros rest para crear una función que acepte un número indefinido de argumentos y devuelva la multiplicación de todos ellos.

function multiplicación ( ...theargs) {
    let x = 1;
    for(var a of theargs){
        x=x*a;
    }
    return x;
}

console.log(multiplicación(2,4));
console.log(multiplicación(2,4,10));

//Ejercicio 4. Define una función flecha que acepte dos parametros y devuelva su división. Invoca la función y muestra el resultado en la consola.

let division = (a,b) => (a/b);

console.log(division(15,3));
console.log(division(45,3));


/*Hecho por: 
Sergio Gallo,
Manuel León,
Marcos Ortega*/