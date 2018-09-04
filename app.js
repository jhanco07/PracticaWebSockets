var express= require('express');
var app= express();

app.get('/', function(req, res){
	var object={
		id: 1, 
		nombre: 'Jhan Luis',
		apellid: 'Morales Ortiz'
	}
	
	res.send(object);
});

app.listen(4000, function(){
	console.log('Servidor iniciado');
})