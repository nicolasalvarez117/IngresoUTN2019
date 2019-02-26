function Mostrar()
{

	var contador=0;
	var numeroMax = 0;
	var numeroMin = 0;
	var flag = true;
	var numero = 0;
	// declarar variables
	
	var respuesta ="si".toLowerCase();

	while(respuesta == "si")
	{
	 numero = parseInt(prompt("ingrese un numero"));
	 while(!(numero >= 0)){
		 numero = parseInt(prompt("numero incorrecto, reingrese el numero"));
	 }
	 if(flag){
		 numeroMin = numero;
		 flag = false;
	 }
	 if(numero > numeroMax){
		 numeroMax = numero;
	 }
	 else if(numero < numeroMin){
		 numeroMin = numero;
	 }
	 respuesta = prompt("quiere seguir agregando numeros? si - no");
	 while(respuesta != "si" && respuesta != "no")

	{
		respuesta = prompt("incorrecta ,quiere seguir agregando numeros? si - no");
	}
	 
	
	}
	document.getElementById("maximo").value = numeroMax;
	document.getElementById("minimo").value = numeroMin;




}//FIN DE LA FUNCIÓN