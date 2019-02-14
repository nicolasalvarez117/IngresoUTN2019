

function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;

//fuera del rango , no es adolecente

//if (edad <=12 && edad >=18)
    
//  {  alert ("no eres adolecente");
//}

//forma negada, dentro del rango , No es adolecente
if ( !(edad >=13 && edad <= 17) )
{
  alert("no es adolecente");
}

}//FIN DE LA FUNCIÓN
//FIN DE LA FUNCIÓN