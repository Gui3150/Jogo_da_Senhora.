	letra = "X";
 
	function joga(celula){
		let celulaclicada = document.getElementById(celula).innerHTML;
		if (celulaclicada == "X" || celulaclicada == "O"){
			alert("Opa, este quadrado já foi escolhido!");
		}else{
			document.getElementById(celula).innerHTML = letra;
			if (letra == "X"){
				letra = "O";
			}else{
				letra = "X";
			}
		}
	}
 
	function verifica() {
		let c1 = document.getElementById('cel11').innerHTML;
		let c2 = document.getElementById('cel12').innerHTML;
		let c3 = document.getElementById('cel13').innerHTML;
		let c4 = document.getElementById('cel21').innerHTML;
		let c5 = document.getElementById('cel22').innerHTML;
		let c6 = document.getElementById('cel23').innerHTML;
		let c7 = document.getElementById('cel31').innerHTML;
		let c8 = document.getElementById('cel32').innerHTML;
		let c9 = document.getElementById('cel33').innerHTML;

		if(c1 != '' && c2 != '' && c3 != '' &&
		 c1 == c2 && c2 == c3 ||

		 c4 != '' && c5 != '' && c6 != '' &&
		 c4 == c5 && c5 == c6 ||

		 c7 != '' && c8 != '' && c9 != '' &&
		 c7 == c8 && c8 == c9 ||

		 c1 != '' && c4 != '' && c7 != '' &&
		 c1 == c4 && c4 == c7 ||

		 c2 != '' && c5 != '' && c8 != '' &&
		 c2 == c5 && c5 == c8 ||

		 c3 != '' && c6 != '' && c9 != '' &&
		 c3 == c6 && c6 == c9 ||

		 c1 != '' && c5 != '' && c9 != '' &&
		 c1 == c5 && c5 == c9 ||

		 c3 != '' && c5 != '' && c7 != '' &&
		 c3 == c5 && c5 == c7) {
			alert('Parabéns, você zerou o jogo da velha');
		 }
			
		
	}

	function novo() {
		document.getElementById('cel11').innerHTML = '';
		document.getElementById('cel12').innerHTML = '';
		document.getElementById('cel13').innerHTML = '';
		document.getElementById('cel21').innerHTML = '';
		document.getElementById('cel22').innerHTML = '';
		document.getElementById('cel23').innerHTML = '';
		document.getElementById('cel31').innerHTML = '';
		document.getElementById('cel32').innerHTML = '';
		document.getElementById('cel33').innerHTML = '';
	}