document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let atv = params['atv']
  let local = params['onde']
  let dia = params['quando']
  let pessoas = params['quem']
  let loc = params['onde']
  let hora = params['hora']

  console.log(params);
  console.log(local);
  console.log(dia);
  console.log(typeof params['hora']);
  
// Math.floor(Math.random() * 10);
// PREPARANDO O HORARIO
  var sem_minutos = hora.slice(0, 2);
  console.log(sem_minutos);
  numero= parseInt(sem_minutos, 10)
  console.log(numero);


function myFunction2(ide, texto, variavel) {
  var str = document.getElementById(ide).innerHTML; 
  var res = str.replace(texto,variavel);
  document.getElementById(ide).innerHTML = res;
}
  myFunction2("atv","futebol",atv)
  myFunction2("quantos","x",Math.floor(Math.random() * 3))
  myFunction2("onde","onde",local)
  myFunction2("quadra","y",Math.floor(Math.random() * 8))
  myFunction2("hora","hora",numero+1)
//
//
  myFunction2("quantos1","x",Math.floor(Math.random() * 3))
  myFunction2("onde1","onde",local)
  myFunction2("quadra1","y",Math.floor(Math.random() * 8))
  myFunction2("hora1","hora",numero+2)
//
//
//
//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  })
