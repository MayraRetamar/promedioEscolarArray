let alumnos: string = prompt("Ingrese el nombre del alumno");
let notas: number[] = new Array(3);
let indice: number;
let suma: number = 0;
let promedio: number = 0;

for (indice = 0; indice < 3; indice++) {
  notas[indice] = Number(prompt("Ingrese las notas del alumno " + indice));
  suma += notas[indice];
}
console.log("Las notas del alumno " + alumnos + " son ");
promedio = suma / 3;
console.log("El promedio es " + promedio);
