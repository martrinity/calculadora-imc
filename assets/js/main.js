function calculadoraImc(peso, altura){
	var peso = prompt("Ingresa tu peso en kilos");
	var estatura = prompt("Ingresa tu estatura en metros");
	var imc = peso/Math.pow(estatura,2);
	return imc.toFixed(2);
	}

alert(calculadoraImc());