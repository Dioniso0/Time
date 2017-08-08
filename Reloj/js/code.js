		

function Reloj () {

	var Fecha = new Date();
	var hora = Fecha.getHours();
	var min = Fecha.getMinutes();
	var seg = Fecha.getSeconds();

	var recarga = setTimeout('Reloj()',500);

	var x = document.getElementById('print');
	x.innerHTML = hora + " : " + min + " : " + seg;
	
	
	
}

	

	
	

	
	
	
