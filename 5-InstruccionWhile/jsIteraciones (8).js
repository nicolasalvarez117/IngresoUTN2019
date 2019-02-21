function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

while(respuesta == "si")
{
	positivo = parseInt(prompt("ingrese un numero positivo"));
	negativo = parseInt(prompt("ingrese un negativo"));
	posivito = positivo + positivo;
	negativo = negativo * negativo;
	respuesta = prompt("quiere seguir con la operacion? si - no");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN