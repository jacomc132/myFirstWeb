//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado*4;
};
function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();
//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1Triangulo,lado2Triangulo,baseTriangulo){
    return lado1Triangulo+lado2Triangulo+baseTriangulo;
}
function areaTriangulo(baseTriangulo,alturaTriangulo){
    return baseTriangulo*alturaTriangulo/2;
}

  console.groupEnd();

  //codigo del circulo
  console.group("Circulo");
let pi=Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(diametroCirculo){
    return diametroCirculo*pi;
}
function areaCirculo(radio){
    return pi*(radio*radio);
}
  console.groupEnd();

//Codigo del triangulo isosceles

function perimetroTrianguloIso(lado1Triangulo,lado2Triangulo,baseTriangulo){
    if(lado1Triangulo==lado2Triangulo){
        return lado1Triangulo+lado2Triangulo+baseTriangulo;
    }
    else {
        return "Para que sea isosceles, el lado1 y lado2 deben ser iguales";
    }
}
//Aqui interactuamos con el html

//Cuadrado
function calcularPerimetroCuadrado(){
    
    const input= document.getElementById("inputCuadrado");
    const value=input.value;
    if(value){
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);}
    else{
        alert("Porfavor inserte un valor");
    }
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    if(value){
    const area=areaCuadrado(value);
    alert(area);}
    else{
        alert("Porfavor inserte un valor");
    }

}

//Triángulo 

function calcularPerimetroTriangulo(){
    const input1=document.getElementById("input1Triangulo");
    const value1=parseInt(input1.value);

    const input2=document.getElementById("input2Triangulo");
    const value2=parseInt(input2.value);

    const input3=document.getElementById("input3Triangulo");
    const value3=parseInt(input3.value);
    if(value1 && value2 && value3){
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert(perimetro);}
    else{
        alert("Falta uno o más valores, para calcular el perímetro se necesita el lado1, lado2 y la base");
    }
}

function calcularAreaTriangulo(){
    const input3=document.getElementById("input3Triangulo");
    const baseTriangle=parseInt(input3.value);
    const input4=document.getElementById("input4Triangulo");
    const heightTriangulo=parseInt(input4.value);


    if(heightTriangulo && baseTriangle){
    let area=areaTriangulo(baseTriangle,heightTriangulo);
    alert(area);}
    else{
        alert("Falta uno o más valores, para calcular el área se necesita base y altura");
    }


}

//Triangulo Isosceles

function calcularPerimetroTrianguloIso(){
    const input1=document.getElementById("input1TrianguloIso");
    const value1=parseInt(input1.value);

    const input2=document.getElementById("input2TrianguloIso");
    const value2=parseInt(input2.value);

    const input3=document.getElementById("input3TrianguloIso");
    const value3=parseInt(input3.value);
    if(value1 && value2 && value3){
    const perimetro=perimetroTrianguloIso(value1,value2,value3);
    alert(perimetro);
}
    else{
        alert("Faltan uno o más valores, para calcular el perímetro de un triángulo isosceles se necesita el lado1, lado2 y la base.");
    }
}

function calcularAlturaTrianguloIso(){
    const input1=document.getElementById("input1TrianguloIso");
    const value1=parseInt(input1.value);
    const input2=document.getElementById("input2TrianguloIso");
    const value2=parseInt(input2.value);
    const input3=document.getElementById("input3TrianguloIso");
    const value3=parseInt(input3.value);
    if(value1 && value2 && value3){
        if(value1==value2){
        let alturaTrianguloIso=Math.sqrt((value1*value1)-((value3/2)*(value3/2)));
        alert(alturaTrianguloIso);
        }
        else if(value1!=value2){
        alert("Para que sea isosceles, el lado1 y lado2 deben ser iguales");
        }
    }
    else{
        alert("Faltan uno o más valores, para calcular la altura de un triángulo isosceles se necesita el lado1, lado2 y la base.")
    }
}

function calcularAreaTrianguloIso(){

}
  
