/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

  var sueldo;
  var aumento;
  var nuevosueldo;

  sueldo = parseInt(document.getElementById("sueldo").value);
  nuevosueldo = ((sueldo * 10) / 100) + sueldo;
  document.getElementById("resultado").value = nuevosueldo;
  aumento = (sueldo * 10) / 100;
  alert("el aumento es "+aumento);

	
}
