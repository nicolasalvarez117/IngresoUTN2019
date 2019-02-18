function Mostrar()
{
var contador;
for (contador = 1 ; contador < 10 ; contador = contador + 1)
{
    if (contador == 5)
    {
        alert("Break");
        break;
    }
    alert(contador);
}


}//FIN DE LA FUNCIÓN