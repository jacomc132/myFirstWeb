var respuesta=prompt("cúanto es 2*2");
var respuestaCorrecta="4";


if(respuesta==respuestaCorrecta){
    console.log("felicitaciones, eres panameña");

}
while(respuesta!=respuestaCorrecta){
    var respuesta=prompt("cúanto es 2*2"); 
    if(respuesta==respuestaCorrecta){
        console.log("felicitaciones, eres panameña");}
    else if(respuesta!=respuestaCorrecta){
        console.log("Error, vuelve a intentar.");
        
    }
}
