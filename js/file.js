
function nuevoContenido() {
 // alert("carga el contenido nuevo");
  document.open();
  document.write("<h1>Aplicacion Sencilla de muestra JavaScript</h1>");
  document.close();
}

function sumar(num1, num2){
    return num1 + num2;
}

function factorial(num1){
    var resultado = 1;
    
    while(num1>1){
        resultado = resultado * num1;
        num1= num1-1;
    }
    return resultado;
}


alert(77);

nuevoContenido();

var m1 = 'Introduce tu Nombre';

var texto = prompt(m1);  //Funcion crea una pequeña ventana de texto para introducir datos

document.write("<h2>Bienvenido "+texto+"</h2>");
console.log(sumar(15,5));
console.log(factorial(4));


console.log('Bienvenido  '+texto);