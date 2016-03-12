function aleatorio(inferior,superior){
   return parseInt(inferior) + Math.floor(Math.random() * (superior - inferior));
}

function gerarCorAleatorio(){
	   var hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
	   var cor_aleatoria = "#";
	   // Pega-se uma posição por vez no array e monta um hexadecimal;
	   for (i=0; i<6; i++){
	      cor_aleatoria += hexadecimal[aleatorio(0,hexadecimal.length)];
	   }
	   
	   return cor_aleatoria
}