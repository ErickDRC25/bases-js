    
//Variables primitivas son los datos que no se pueden dividir en partes más pequeñas
//string, number, boolean, null, undefined, symbol

//variables no primitivas son los datos que se pueden dividir en partes más pequeñas
//array, object, function,date, regex  y set


let nombre="Erick Romero";
console.log(nombre);


nombre="Abihail Consuelo";
console.log(nombre);

console.log(typeof nombre); //string

nombre[0]="A"; //no se puede cambiar un caracter de una cadena
console.log(nombre); //Erick Romero

//los primitivos son inmutables
//los primitivos son copiados por valor
//los primitivos no se pueden cambiar   


let edad = 25;
console.log(edad);
edad=30;
console.log(edad);

console.log(typeof edad); //number

edad[0]="3"; //no se puede cambiar un caracter de un numero
console.log(edad); //30



let personaje = {
    nombre: "Erick Romero",
    edad: 25,
    habilidades: ["JavaScript", "HTML", "CSS"],
    direccion: {
        calle: "jr Loreto 177",
        ciudad: "Lima",
        pais: "Peru"
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};


personaje.nombre = "Abihail Consuelo";
console.log('nombre',personaje.nombre); //Abihail Consuelo
console.log('edad',personaje.edad); //25


console.log('******************************************************')
let listaPersonajes = ['Deadpool', 'Capitan Peru', 'Sentry'];
console.log('listapersonajes',listaPersonajes); 

listaPersonajes[0] = "Capitan OÑOOO";
console.log('listapersonajes',listaPersonajes); //Capitan OÑOOO, Capitan Peru, Sentry




