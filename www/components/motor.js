function calcularconsumo(){
 
 var km = document.getElementById ('km').value;
 var gas = document.getElementById('gas').value;
 var marca = document.getElementById('marca').value;
 var modelo = document.getElementById('modelo').value;

 document.getElementById("consumo").innerHTML = "Seu " + marca + " " + modelo + " fez " + km / gas + "KM/L" ;

}