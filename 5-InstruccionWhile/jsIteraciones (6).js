function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeros = 0;
	var suma;
	
	while (numeros <5)
	{
	  suma = parseInt(prompt("ingrese un numero") );
	  acumulador = acumulador + suma;
	  numeros = numeros +1;
	}

	
	

	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;






}//FIN DE LA FUNCIÓN