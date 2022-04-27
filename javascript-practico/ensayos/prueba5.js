var carros=[
    {nombre:"nissan",año:2004},
    {nombre:"chevrolet",año:2000},
    {nombre:"mustand",año:2020},
    {nombre:"caniken",año:2010},

];

let miFuncion=function(objeto){
    for(let i=0;i<objeto.length;i++){
    console.log(objeto[i].nombre);}
};
    
miFuncion(carros);

