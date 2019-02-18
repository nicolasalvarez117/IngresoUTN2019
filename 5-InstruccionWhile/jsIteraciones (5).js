function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f")
{
      if (sexo = "m")
      {
          break;
      }
      alert("sexo incorrecto");
      sexo = prompt("ingrese f ó m .");


}
 

if (sexo == "f")
{
    sexo = "femenino";
}
else 
{
    sexo = "masculino";
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN