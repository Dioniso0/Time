		

function Reloj () {

	var Fecha = new Date();
	var hora = Fecha.getHours();
	var min = Fecha.getMinutes();
	var seg = Fecha.getSeconds();
	//permite poder estar mostrando la funcion cada 500 mls
	var recarga = setTimeout('Reloj()',500);
	//estas variables toman los valores de los span en que se 
	//muestra la hora
	var x = document.getElementById('Hora');
	var y = document.getElementById('Min');
	var z = document.getElementById('Seg');

	x.innerHTML = hora;
	y.innerHTML = min;
	z.innerHTML = seg;
	
	
	
}

	

	
	

	
	
	
