function obtenerFactorial(){
  var resultado = 1;
	for ( i=1; i<=document.getElementById('numero').value; i++) {
		resultado *= i;
	}
  alert("El resultado es: "+resultado );
  
}
