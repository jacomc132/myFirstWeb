
let f1=prompt("Escribe la fruta 1");
let f2=prompt("Escribe la fruta 2");
let f3=prompt("Escribe la fruta 3");
let f4=prompt("Escribe la fruta 4");
let f5=prompt("Escribe la fruta 5");
let frutas=[f1,f2,f3,f4,f5];
var miFuncion=function(array){
   for(let i=0;i<array.length;i++){
       console.log(frutas[i]);
   } 
        
    }


miFuncion(frutas);
