// Criar variavéis no Javascript
//var letra = "O"; não usar

//const letra = 'D';
//console.log(letra);


let letra = "X";

function joga(cel) {
    let casaClicada = document.getElementById(cel).innerHTML;
    if(casaClicada == "X" || casaClicada ='O') {
        alert("Já foi escolhida essa posição");
    }
}