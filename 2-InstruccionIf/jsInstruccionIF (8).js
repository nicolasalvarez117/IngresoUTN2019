function Mostrar()
{
//tomo la edad  

var edad;
var estadocivil;
edad = document.getElementById("edad").value;

if ( !(edad <18 && estadocivil != "Soltero") )
{
    alert("es soltero y no es adolecente");
}	


}//FIN DE LA FUNCIÓN