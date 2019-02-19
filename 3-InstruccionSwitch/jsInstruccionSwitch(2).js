function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
    case "Septiembre" :
        alert("falta para el invierno");
        break;
    case "Octubre" : 
        alert("falta para el invierno");
        break;
    case "Noviembre" :
        alert("falta para el invierno");
        break;
    case "Diciembre" :
        alert("falta para el invierno");
        break;
    
    case "Julio" :
        alert("abrigate que hace frio");
        break;
    case "Agosto" :
        alert("abrigate que hace frio");
        break;
    
    default :
        alert("ya pasamos el frio, ahora el calor");
        break;
    
}




}//FIN DE LA FUNCIÓN