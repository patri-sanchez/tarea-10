// let nombre="silvina";
// let apellido="sanchez";
// console.log(nombre +" "+ apellido);

// let numberone=120;
// let numbertwo=20;
// let resultsuma= numberone + numbertwo;
// let resultresta= numberone - numbertwo;
// let resultmulti= numberone * numbertwo;
// let resuldivision= numberone / numbertwo;
// console.log("suma",resultsuma);
// console.log ("resta",resultresta);
// console.log ("multiplicacion",resultmulti);
// console.log ("division",resuldivision);
 
// let nota = 3;
// if (nota <4) {
//     console.log("aplazado");
// }else if (nota <7){
//     console.log("desaprobado");
// }else if (nota<9) {
//     console.log("aprobado");
// }else {   console.log("sobresaliente");
// }

// let nombres= ["diego","anabel,esteban"]
// console.log(nombres);
// console.log (nombres[0]);
// console.log(nombres[2]);
// console.log("cantidad de nombres:",nombres.length);
// for (let i=0; i<nombres.length; i++){ console.log(nombres[i])
// }
 
// let topping="oreo"
// let precio=0;
// let preciofinal=0
// let helado=500;

// if(topping == "oreo") {
//     precio=10;
// } else if(topping=="kitkat"){ precio=15;
// } else if(topping=="kinder"){precio=25;
// }else { console.log("no tenemos este topping");
// }

// preciofinal=helado+precio;
// console.log("helado cuesta $"+ preciofinal)

// let menu="pescado,carne,verdura"
// switch(menu)
// {
// case "carne":
// console.log("vino tinto");
// break
// case"pescado":
// console.log("vino blanco");
// break
// case "verdura":
// console.log("agua");
// }



// let dulces=("chocolate","caramelo","chupetin","chicle")
// dulces.push("alfajor");
// for(let i=0; i<dulces.length; i++){
//   console.log(dulces [i])
// }

// let num=1;
// let sum=0;
// while (num<=10) {
//     sum+num;
//     num++;
// }

// var resultado;
// let numero1=3
// let numero2=5
// function venis_y_vas(){
//     resultado=numero1+numero2;
//     alert("el resultado es" + resultado);
// }venis_y_vas();

// // Solicita al usuario que introduzca un número entero
// let numero = prompt("Introduce un número entero");

// // Llama a la función parImpar y guarda el resultado
// let resultado = parImpar(numero);

// // Muestra el resto en una alerta
// alert("El número " + numero + " es " + resto);

// // Define la función parImpar
// function parImpar(numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// }
let nombresito=prompt ("ingrese su nombre");
function saludo(){
    if(nombresito){
        alert("bienvenido " + nombresito);
    }
        else {
                alert("debe ingresar un nombre");
            }
        }
    

saludo();
