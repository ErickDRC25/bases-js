//funciones y funcion de flecha

function saludar(){
    console.log("Hola, soy una funcion");

    // const numeros=[1,2,3];
    // console.log(numeros);
    // return[numeros];
}

saludar();


const saludar2=function(){
    console.log("Hola desde saludar2")
}

saludar2();



//funciones de flecha

console.log("*******FUNCIONES FLECHA**************")
const saludar3=()=>{
    console.log("Hola desde saludar3")
}
saludar3();


const saludar4=()=> console.log("Hola desde saludar4")

saludar4();

console.log("*********************")

function suma(a,b){
    console.log(a+b);
}

suma(2,3);


const suma2 =(a,b)=>console.log(a+b);
suma2(1,1);


const getAleatorio= () => Math.random();
console.log(getAleatorio());
