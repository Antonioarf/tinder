function myFunction2(ide, texto, variavel) {
  var str = document.getElementById(ide).innerHTML; 
  var res = str.replace(texto,variavel);
  document.getElementById(ide).innerHTML = res;
}
let params = coDesExtract()
let tipo = params['oque']
if (tipo == "privadas"){
  window.location.href = 'feed2.html';
}
document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let tipo = params['oque']
  var locais = [params['onde1'],params['onde2'],params['onde3']];
  console.log(params);
  console.log(tipo);
  console.log(locais);
  
  var limpo = locais.filter(function (el) {
  return el != null;
});

console.log(limpo);

if (limpo.length == 2) {
  // myFunction2("tipo","tipo",tipo)
  myFunction2("quadra1","y",Math.floor(Math.random() * 8))
  myFunction2("quadra2","y",Math.floor(Math.random() * 8))
  myFunction2('onde1','onde',limpo[1])
  myFunction2('onde2','onde',limpo[0])

}
else if (limpo.length == 3){ 
    // myFunction2("tipo","tipo",tipo)
  myFunction2("quadra1","y",Math.floor(Math.random() * 8))
  myFunction2("quadra2","y",Math.floor(Math.random() * 8))
  myFunction2('onde1','onde',limpo[1])
  myFunction2('onde2','onde',limpo[2])
}
else {
    // myFunction2("tipo","tipo",tipo)
  myFunction2("quadra1","y",Math.floor(Math.random() * 8))
  myFunction2("quadra2","y",Math.floor(Math.random() * 8))
  myFunction2('onde1','onde',limpo[0])
  myFunction2('onde2','onde',limpo[0])
}








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


// <input class = "item2" type="checkbox" name="onde1" value="ibira" > <h1 class="name_item2">Ibirapuera</h1>
//           </br>
//         </div>
//         <div class="tipo_">
//           <input class = "item2" type="checkbox" name="onde2" value="villa"> <h1 class="name_item2"> Pinheiros</h1>
//           </br>
//         </div>
//         <div class="tipo_">
//           <input class = "item2" type="checkbox" name="onde3" value="p_do_povo"><h1 class="name_item2"> Butanta </h1>
//           </br>