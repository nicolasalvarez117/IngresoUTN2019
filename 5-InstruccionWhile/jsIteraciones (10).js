function Mostrar()
{
    var numero = 0;
	var contador=0;
	var negativos =0;
	var positivos = 0;
	var cantidadpositivo =0;
	var cantidadnegativo = 0;
	var ceros = 0;
	var numerospares = 0;
	var promediopositivos = 0;
	var promedionegativos = 0;
	var diferencia = 0;
	var pares = 0;
	//declarar contadores y variables 
	
	var respuesta="si";

	do
	{
       numero = parseInt(prompt("ingrese un numero positivo o negativo"));
	   while(isNaN(numero)){
		   numero = parseInt(prompt("numero incorrecto,ingrese un numero positivo o negativo"));
	   }
	   if(numero > 0){
		   positivos = positivos + numero;
		   cantidadpositivo++;
		    if(numero%2 == 0){
		   pares++;
	   }
	   }
	   else if(numero < 0){
		   negativos = negativos + numero;
		   cantidadnegativo++;
		    if(numero%2 == 0){
		   pares++;
	   }
	   }
	   else {
		   ceros++;
	   }
	   contador++;
	  

	   respuesta = prompt("quiere seguir agregando numeros? si - no").toLowerCase();
	   while(respuesta != "si" && respuesta != "no"){
		   respuesta = prompt("respuesta incorrecta ,quiere seguir agregando numeros? si - no").toLowerCase();
	   }

		
	
	}while(respuesta!="no");
	promediopositivos = positivos / contador;
	promedionegativos = negativos / contador;
	diferencia = positivos + negativos;


	document.write("suma de los positivos : "+positivos +"<br>");
	document.write("suma de los negativos : "+negativos+"<br>");
	document.write("cantidad de ceros : "+ceros+"<br>");
	document.write("promedio de los positivos : "+promediopositivos.toFixed(2)+"<br>");
	document.write("promedio de los negativos : "+promedionegativos.toFixed(2)+"<br>");
	document.write("la diferencia entre los positivos y los negativos es : "+ diferencia+"<br>");
	document.write("la cantidad de numeros pares ingresados son : "+pares+"<br>");







}//FIN DE LA FUNCIÓN