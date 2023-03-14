function calcularconsumo(){
 
 var km = document.getElementById ('km').value;
 var gas = document.getElementById('gas').value;
 var marca = document.getElementById('marca').value;
 var modelo = document.getElementById('modelo').value;

 var consumo = km / gas;

 document.getElementById("consumo").innerHTML = "Seu " + marca + " " + modelo + " fez " + consumo + "KM/L" ;
 var paragraph2 = document.getElementById("paragraph2");
 var paragraph1 = document.getElementById("paragraph1");
 var paragraph3 = document.getElementById("paragraph3");
 var paragraph4 = document.getElementById("paragraph4");
  if(consumo >= 20){
  paragraph1.style.backgroundColor = "red";
  }

  else if( consumo >= 12 && consumo < 20){
  paragraph2.style.backgroundColor = "red";
  }
  
  else if( consumo >= 8 && consumo < 12){
  paragraph3.style.backgroundColor = "red";
  }
  
  else if (consumo <= 8) {
  paragraph4.style.backgroundColor = "red";
  }
  else{
      alert("NAO TEM")
  }
}