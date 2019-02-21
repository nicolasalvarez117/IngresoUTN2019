function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si" ;
	var numeros;
	

	while (respuesta === "si")
	{
		numeros = parseInt(prompt("ingrese un numero"));
		acumulador = numeros + acumulador;
		contador = contador + 1;
		respuesta = prompt("quiere seguir sumando?");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=(acumulador/contador).toFixed(2);

}//FIN DE LA FUNCIÓN