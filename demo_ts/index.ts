// Esto es un comentario
/* Esto es un comentario
  en múltiples líneas
*/

import { Estudiante, Persona } from "./poo";

// Tipos de datos
// Boolean
let esActivo: boolean = true; // let: El ámbito es local, funciona dentro del scope (función, ciclo, if, {})
var esActivo2: boolean = false; // var: El ámbito es en todo el archivo
const esActivo3: boolean = true; // const: Para constantes

// Number
let entero: number = 15;
let enteroLargo: number = 1234567890222222;
let real: number = 3.1416;
let binario: number = 0b101;
let octal: number = 0o11;
let hexadecimal: number = 0xC;

// String
let sigla: string = 'SIS257';
let materia: string = 'Desarrollo de Aplicación Int/Internet II';
let concatenar: string = sigla + ' - ' + materia;
let concatenar2: string = `${sigla} - ${materia}`;
let mayusculas: string = materia.toUpperCase();
let minusculas: string = materia.toLowerCase();
let reemplazo: string = materia.replace(/ /g, '#');
let repetir: string = sigla.repeat(3);
let sinEspaciosExtremos: string = ('     ' + materia).trim();
let subcadena: string = materia.substring(5, 10);
let separar: string[] = materia.split(' ');
let longitudCadena: number = materia.length;

// Array
let array: string[] = ['uno', 'dos', 'tres', 'cuatro'];
let arrayNumerico: number[] = [1, 2, 3, 4];
let longitudArray = array.length;
let doble: number[] = arrayNumerico.map(n => n * 2);
let factorial: number = arrayNumerico.reduce((prev, curr) => prev * curr);
let revertir: number[] = arrayNumerico.reverse();
let impares: number[] = arrayNumerico.filter(n => n % 2 == 1);
array.shift(); // Elimina el primer elemento
array.pop(); // Elimina el último elemento
array.push('cinco'); // Inserta un nuevo elemento

// Tuple
let tuple = [true, 7.5, 'Hola', [8, 9, 10]];

// Enum
enum sexo { M = 'Masculino', F = 'Femenino' };
enum color { red = 'Rojo', yellow = 'Amarillo', blue = 'Azul' };
enum tipo { par = 0, impar = 1 };

// Any
let cualquiera: any = 'Cualquier valor';
cualquiera = 89;

// Object
let objeto: object = { nombre: 'Juan', apellido: 'Pérez', celular: 71717171 };

// Estructuras de Control
let contiene: boolean;
if (arrayNumerico.includes(3)) contiene = true;
else contiene = false;
contiene = arrayNumerico.includes(3) ? true : false;
contiene = arrayNumerico.includes(3);

for (let i in  array) console.log('for in: ' + i); // Obtiene las posiciones
for (let i of array) console.log('for of: ' + i);  // Obtiene los valores
array.forEach(i => console.log('forEach: ' + i));  // Obtiene los valores

// Ámbito de la variable
if (materia.includes('Desarrollo')) {
  let local: boolean = true;
  var global: boolean = true;
  console.log(local);
}
//console.log(local); // Error, no se reconoce
//console.log(global);

// Interfaces
interface IVehiculo {
  placa: string,
  chasis: string,
}
let auto: IVehiculo = { placa: '33-5DD6', chasis: '4AD5F4A5DF45ASD4F'};

// Funcionanes
function saludo(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
saludo('Juan');

// POO
var persona = new Persona('12345', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171);
persona.saludar();

var estudiante = new Estudiante('54321', 'Juan', 'Pérez', 'López', new Date(2006, 5, 26), 71717171, '26-6656');
estudiante.saludar();

console.log(auto);
