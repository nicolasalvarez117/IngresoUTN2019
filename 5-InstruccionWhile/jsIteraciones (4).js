function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero > 10)
	{
		alert("numero incorrecto");
		numero = prompt("ingrese un numero entre 0 y 9");
	}


}//FIN DE LA FUNCIÓN