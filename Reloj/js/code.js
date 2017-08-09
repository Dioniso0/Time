		

function Reloj () {

	var Fecha = new Date();
	var hora = Fecha.getHours();
	var min = Fecha.getMinutes();
	var seg = Fecha.getSeconds();

	var recarga = setTimeout('Reloj()',500);

	var x = document.getElementById('Hora');
	var y = document.getElementById('Min');
	var z = document.getElementById('Seg');

	x.innerHTML = hora;
	y.innerHTML = min;
	z.innerHTML = seg;
	
	
	
}

	

	
	

	
	
	
