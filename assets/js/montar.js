document.addEventListener('DOMContentLoaded', function() {
 	let params = coDesExtract()
 	let jogo = params['atv']
 	console.log(params);
 	console.log(jogo);
 	console.log("vamo la meu querido");
 	let d = {
 		'basquete': 'Basquete', 'futebol': 'Futebol', 'volei': 'Vôlei', 'rugby': "Rugby", 
 	}

// // var inputEmail= document.getElementById("email");
// // localStorage.setItem("email", inputEmail.value);

function myFunction2(ide, texto, variavel) {
  var str = document.getElementById(ide).innerHTML; 
  var res = str.replace(texto,variavel);
  document.getElementById(ide).innerHTML = res;
}
  myFunction2("demo","jogo", d[params['atv']])
  myFunction2("main","jogoo", params['atv'])
})
