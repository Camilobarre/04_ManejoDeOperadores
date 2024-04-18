//Tipos de datos en JavaScript

console.groupCollapsed('Tipos de datos en JavaScript');
let variable1 = 156
let variable2 = 854
let variable3 = "hola mundo"
let variable4 = true
let variable5 = undefined
let variable6 = null
let variable7 = ["hola", "como", "estas", "en", "este", "dia"]
let variable8 = {
    "hola": "hola",
    "hola": "hola",
    "como": "como"
}
let variable9 = function name() { }

console.log("Variable 1:", typeof variable1)
console.log("Variable 2:", typeof variable2)
console.log("Variable 3:", typeof variable3)
console.log("Variable 4:", typeof variable4)
console.log("Variable 5:", typeof variable5)
console.log("Variable 6:", typeof variable6)
console.log("Variable 7:", typeof variable7)
console.log("Variable 8:", typeof variable8)
console.log("Variable 9:", typeof variable9)
console.groupEnd();

//Operadores aritméticos

console.groupCollapsed("Operadores Aritméticos");
let numero1 = 15
let numero2 = 4

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let residuo = numero1 % numero2

console.log("Suma:", suma)
console.log("Resta:", resta)
console.log("Multiplicación:", multiplicacion)
console.log("División:", division)
console.log("Potencia:", potencia)
console.log("Residuo:", residuo)
console.groupEnd();

//Operadores de incremento y decremento
console.groupCollapsed("Operadores de incremento y decremento");
//Incremento
let numeroQueVaAIncrementar = 10
let numeroQueVaADecrecer = 100

numeroQueVaAIncrementar++ //11 El operador ++ incrementa una unidad a la vez
numeroQueVaAIncrementar++ //12
numeroQueVaAIncrementar++ //13
numeroQueVaAIncrementar++ //14
numeroQueVaAIncrementar++ //15
numeroQueVaAIncrementar += 2 //17
numeroQueVaAIncrementar += 2 //19
numeroQueVaAIncrementar++ //20

numeroQueVaADecrecer-- //99 El operador -- decrece una unidad a la vez
numeroQueVaADecrecer-- //98
numeroQueVaADecrecer-- //97
numeroQueVaADecrecer-- //96
numeroQueVaADecrecer-- //95
numeroQueVaADecrecer -= 40 //55
numeroQueVaADecrecer -= 40 //15
numeroQueVaADecrecer-- //14
console.log(numeroQueVaAIncrementar)
console.log(numeroQueVaADecrecer)

console.groupEnd();

//Operadores de comparación
console.groupCollapsed("Operadores de Comparación");

console.log(5 + 9 == 20); //False

//Comparador de igualdad == o ===
console.log(4 == 4); //True
console.log(4 == "4"); //True Dos iguales compara solo el valor
console.log(4 === "4"); //False Tres iguales compara valor y tipo
console.log("Hola mundo" == "hola mundo"); //False

//Comparador de diferencia != o !==
console.log(2 != 9); //True
console.log(2 != 2); //False;
console.log(2 !== "2"); //True

const contraseña = "12345"
const contraseñaConfirmacion = "12345"

if (contraseña === contraseñaConfirmacion) {
    console.error("Usuario Registrado");
}

//Comparador mayor que
console.log((8 > 5)); //True
console.log(8 > 8); //False
console.log(8 >= 8); //True

//Comparador menor que
console.log((8 < 5)); //True
console.log(8 < 8); //False
console.log(8 <= 8); //True

// let edad = 12
// if (edad<18){
//     console.error("Tiene peligro de que lo coja bienestar familiar");
// }
// if (edad>=18){
//     console.warn("Puedes ingerir alcohol pero te puede agarrar el ejercito");
// }
console.groupEnd();

//Operadores lógicos
console.groupCollapsed("Operadores Lógicos")

//Operador AND (&)
//          True  +(and)   True = True
console.log(1 < 5 && 8 > 2); //True
//                   False             True           False
console.log("usuario" == "admin" && "1234" == 1234 && "rol" == true); //False

//Operador OR (|)
//           False    True    False   False
console.log(1 > 6 || 5 > 1 || 8 < 2 || 9 > 50); //True

//Mezclado
//                             False                            True 
//                   False       &&      True           True      %%       True
console.log(("usuario" == "Usuario" && 5 > 2) || ("rol" === "rol" && 6 == "6")); //True

//Operador NOT (!)
let variable=false
console.log(!variable) // True

console.groupEnd();