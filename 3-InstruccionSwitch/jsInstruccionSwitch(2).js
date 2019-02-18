function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
    case "Septiembre" :
    case "Octubre" : 
    case "Noviembre" :
    case "Diciembre" :
    {
        alert("falta para el invierno");
        break;
    }
    case "Julio" :
    case "Agosto" :
    {
        alert("abrigate que hace frio");
        break;
    }
    default :
    {
        alert("ya pasamos el frio, ahora el calor");
        break;
    }
}




}//FIN DE LA FUNCIÓN