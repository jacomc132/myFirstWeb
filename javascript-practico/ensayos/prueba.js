var errores=true;
var EstadoPrograma=prompt("Escribe iniciar para comenzar");
var tipoSuscripciones=["basic","free","expert","expertplus"];
var respuestas=["puedes tomar casi todos los cursos","solo cursos gratis","todo expert","expert y amigos"];
while(EstadoPrograma=="iniciar" || EstadoPrograma=="seguir"){
    var tipoSuscripcion=prompt("cual es tu tipo de suscripcion");
    i=0;
    while(i<4){
        if(tipoSuscripciones[i]==tipoSuscripcion){
            console.log(respuestas[i]);
            errores=false;
        }
        i=i+1;
    }
    if(errores==true){
        console.log("error, inserta un valor válido.");}
    var EstadoPrograma=prompt("Escribe seguir para continuar con el programa.");
}

