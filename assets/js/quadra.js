document.addEventListener('DOMContentLoaded', function() {
 	let params = coDesExtract()
 	let jogo = params['atv']
 	console.log(params);
 	console.log(jogo);
 	console.log("vamo la meu querido");

	coDesReplace('.top', params['atv'])
	console.log(params['atv']);

// // var inputEmail= document.getElementById("email");
// // localStorage.setItem("email", inputEmail.value);

	function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementByname("quando");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    console.log(checkBox)
  } 
}
function myFunction2() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace("jogo", params['atv']);
  document.getElementById("demo").innerHTML = res;
}
	myFunction2()

})
