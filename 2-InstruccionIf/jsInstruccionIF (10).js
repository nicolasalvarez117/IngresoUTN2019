function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num = Math.floor(Math.random() * 10 + 1);

	if(num <4)
	{
		alert("vamos, la proxima se puede");
	}
	else if(num <9 )
	 {
		 alert("APROBO");

	 }
	 else
	 {
		 alert("exelente");
	 }
}//FIN DE LA FUNCIÓN