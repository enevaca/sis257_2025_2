"use strict";
// Esto es un comentario
/* Esto es un comentario
  en múltiples líneas
*/
Object.defineProperty(exports, "__esModule", { value: true });
const poo_1 = require("./poo");
// Tipos de datos
// Boolean
let esActivo = true; // let: El ámbito es local, funciona dentro del scope (función, ciclo, if, {})
var esActivo2 = false; // var: El ámbito es en todo el archivo
const esActivo3 = true; // const: Para constantes
// Number
let entero = 15;
let enteroLargo = 1234567890222222;
let real = 3.1416;
let binario = 0b101;
let octal = 0o11;
let hexadecimal = 0xC;
// String
let sigla = 'SIS257';
let materia = 'Desarrollo de Aplicación Int/Internet II';
let concatenar = sigla + ' - ' + materia;
let concatenar2 = `${sigla} - ${materia}`;
let mayusculas = materia.toUpperCase();
let minusculas = materia.toLowerCase();
let reemplazo = materia.replace(/ /g, '#');
let repetir = sigla.repeat(3);
let sinEspaciosExtremos = ('     ' + materia).trim();
let subcadena = materia.substring(5, 10);
let separar = materia.split(' ');
let longitudCadena = materia.length;
// Array
let array = ['uno', 'dos', 'tres', 'cuatro'];
let arrayNumerico = [1, 2, 3, 4];
let longitudArray = array.length;
let doble = arrayNumerico.map(n => n * 2);
let factorial = arrayNumerico.reduce((prev, curr) => prev * curr);
let revertir = arrayNumerico.reverse();
let impares = arrayNumerico.filter(n => n % 2 == 1);
array.shift(); // Elimina el primer elemento
array.pop(); // Elimina el último elemento
array.push('cinco'); // Inserta un nuevo elemento
// Tuple
let tuple = [true, 7.5, 'Hola', [8, 9, 10]];
// Enum
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
;
var color;
(function (color) {
    color["red"] = "Rojo";
    color["yellow"] = "Amarillo";
    color["blue"] = "Azul";
})(color || (color = {}));
;
var tipo;
(function (tipo) {
    tipo[tipo["par"] = 0] = "par";
    tipo[tipo["impar"] = 1] = "impar";
})(tipo || (tipo = {}));
;
// Any
let cualquiera = 'Cualquier valor';
cualquiera = 89;
// Object
let objeto = { nombre: 'Juan', apellido: 'Pérez', celular: 71717171 };
// Estructuras de Control
let contiene;
if (arrayNumerico.includes(3))
    contiene = true;
else
    contiene = false;
contiene = arrayNumerico.includes(3) ? true : false;
contiene = arrayNumerico.includes(3);
for (let i in array)
    console.log('for in: ' + i); // Obtiene las posiciones
for (let i of array)
    console.log('for of: ' + i); // Obtiene los valores
array.forEach(i => console.log('forEach: ' + i)); // Obtiene los valores
// Ámbito de la variable
if (materia.includes('Desarrollo')) {
    let local = true;
    var global = true;
    console.log(local);
}
let auto = { placa: '33-5DD6', chasis: '4AD5F4A5DF45ASD4F' };
// Funcionanes
function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}
saludo('Juan');
// POO
var persona = new poo_1.Persona('12345', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171);
persona.saludar();
var estudiante = new poo_1.Estudiante('54321', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171, '26-6656');
estudiante.saludar();
console.log(auto);
//# sourceMappingURL=index.js.map