setInterval(function() {

//affiche le monero, le dollars et l'euros dans la page stats
  $.post("php/coinhive.php", function(data){
    var monero = data.hashes/1000000*data.payout;
    $("#monero").html("Total monero : "+monero.toFixed(8)+" XMR");
    $("#dollars").html("Total USD : "+data.xmrToUsd+" $");

  }, "json");

},2000);
