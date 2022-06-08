//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Creamos la función calcularPrecioConDescuento(), esta se ejecutará cuando se presione el botón del html:


function calcularPrecioConDescuento(){

    //Definimos el valor de precioProducto invocando el value de el input con id "precioProducto":
    let EtiquetaPrecioProducto=document.getElementById("precioProducto");
    let precioProducto=parseFloat(EtiquetaPrecioProducto.value);

   //Definimos el valor de descuento invocando el value de el input con id "descuento":
    let EtiquetaDescuento=document.getElementById("descuento");
    let descuento=parseFloat(EtiquetaDescuento.value);

    //Definimos la fórmula para determinar el descuento mediante los valores dados anteriormente:
    let porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precioProducto*porcentajePrecioConDescuento)/100;

    //Imprimimos un mensaje en un parrafo con id "resultado" con un string, las variables descuento y precio con descuento:
    let etiquetaResultado=document.getElementById("resultado");
    etiquetaResultado.innerText="El precio con el "+ descuento+"% de descuento es de $"+precioConDescuento;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion para calcular el descuento con cupones

function calcularDescuentoConCupon(){
    //val precioProducto y codigoCupon:
    const etiquetaPrecioProducto=document.getElementById("precioProducto2");
    const precioProducto=parseFloat(etiquetaPrecioProducto.value);

    const etiquetaCodigoCupon=document.getElementById("codigoCupon");
    const codigoCupon=etiquetaCodigoCupon.value;

    //Cupones y su respectiva promoción:

    let codigoCupones=["1038866085","5689191415","3133701667","5972500","3053598988"];
    let descuentos=[20,40,30,50,10];


    //Validación de cupones y aplicación de descuentos:
    let porcentajePrecioConDescuento;
    let precioConDescuento;
    let i=0;
    let cuponEsValido=false;

    while(i<5){
        if(codigoCupon==codigoCupones[i]){
            porcentajePrecioConDescuento=100-descuentos[i];
            precioConDescuento=(precioProducto*porcentajePrecioConDescuento)/100;
            let etiquetaResultado2=document.getElementById("resultado2");
            etiquetaResultado2.innerText="El cupón con código "+codigoCupones[i] +  " corresponde a un "+descuentos[i]+"% de descuento... El precio total del producto es $"+precioConDescuento;        
            cuponEsValido=true;
        }
            
            i=i+1;
    }
    if(cuponEsValido==false){
        let etiquetaResultado2=document.getElementById("resultado2");
        etiquetaResultado2.innerText="Ese cupón no es válido, verifique que el número esté correctamente insertado."
    }
   
}