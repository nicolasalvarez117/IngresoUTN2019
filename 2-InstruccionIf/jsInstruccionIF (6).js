function Mostrar()
{
//tomo la edad  


var edad;
edad = document.getElementById("edad").value;

if (edad >= 18)
{
    alert("eres mayor de edad");
}
else if (edad >= 13 && edad <=17)
{
    alert("eres adolecente");
}
else
{
    alert("eres un niño");
}

}//FIN DE LA FUNCIÓN
