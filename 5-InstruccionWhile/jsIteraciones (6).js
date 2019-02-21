function Mostrar()
{

	var contador=0;
	var acumulador=0;
	
	var suma;
	
	while (contador <5)
	{
	  suma = parseInt(prompt("ingrese un numero") );
	  acumulador = acumulador + suma;
	  contador++;
	}

	
	

	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;






}//FIN DE LA FUNCIÓN