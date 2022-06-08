let lista=[];

function agregarNumerosLista(){
 let etiquetaValorLista=document.getElementById("inputLista");
 let valorLista=parseFloat(etiquetaValorLista.value);

 if(valorLista){
  lista.push(valorLista);
  }

 let listaActual=document.getElementById("listaActual");
 let listaOrdenada=lista.sort(function(a, b){return a - b});
 listaActual.innerText= "Tu lista es= ["+listaOrdenada+"]";


 document.getElementById("inputLista").value="";
}

function quitarNumeroLista(){
    lista.pop();
    let listaActual=document.getElementById("listaActual");
    let listaOrdenada=lista.sort(function(a, b){return a - b});
    listaActual.innerText= "Tu lista es= ["+listaOrdenada+"]";
    
}

let listaOrdenada=lista.sort(function(a, b){return a - b});


function calcularTendenciaCentral(){
    //Promedio:
    if(lista.length>0){
    let i=0;
    let sumaNumerosProm=0;
    let promedio;
    while(i<lista.length){
         sumaNumerosProm=sumaNumerosProm+lista[i];
        i=i+1;
    }
    promedio=sumaNumerosProm/lista.length;
    let etiquetaResultadoPromedio=document.getElementById("resultadoPromedio");
    etiquetaResultadoPromedio.innerText=promedio;
    //Mediana

    let x=0;
    let cantidadNumerosMed=0;
    let mediana;
    while(x<lista.length){
        cantidadNumerosMed=cantidadNumerosMed+1;
        x=x+1;
    }
    let posicionLista=parseInt(cantidadNumerosMed-(cantidadNumerosMed/2));
    mediana=listaOrdenada[posicionLista];
    let etiquetaResultadoMediana=document.getElementById("resultadoMediana");
    etiquetaResultadoMediana.innerText=mediana;


    //Moda y array modas
    let a;
    let b;
    let contadorElementoActual=0;
    let elementoMaximo=0;
    let moda=[];
    let modaNoRepetida=[];
    
    


    for(a=0;a<lista.length;a++){

        for(b=0;b<lista.length;b++){
            if(lista[a]==lista[b]){
                contadorElementoActual=contadorElementoActual+1;
            }

            if(contadorElementoActual>elementoMaximo){
                elementoMaximo=contadorElementoActual;
                moda.splice(0,moda.length);
                moda.push(lista[a]);
            }
            if (contadorElementoActual==elementoMaximo){
                moda.push(lista[a]);
            }
        
            
        }
        contadorElementoActual=0;
    }
    let etiquetaResultadoRepeticiones=document.getElementById("resultadoRepeticiones");
    etiquetaResultadoRepeticiones.innerText=elementoMaximo;

    //Quitar repeticiones array modas:
    let s=0;
    let d;
    while(s<moda.length){
        d=s+1;
        if(moda[s]!=moda[d]){
            modaNoRepetida.push(moda[s]);
        }
        s=s+1;
    }
    if(modaNoRepetida.length<=3){
    let etiquetaResultadoModa=document.getElementById("modaResult");
    etiquetaResultadoModa.innerText=modaNoRepetida;
    }
    else{
        let etiquetaResultadoModa=document.getElementById("modaResult");
        etiquetaResultadoModa.innerText="No hay modas";

        let etiquetaResultadoRepeticiones=document.getElementById("resultadoRepeticiones");
        etiquetaResultadoRepeticiones.innerText="No hay modas";
    }

    
    }
    
}












































