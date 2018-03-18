setInterval(function() {

  //affiche le monero et le dollars et l'euros dans la page stats
  $.post("php/coinhive.php", function(data){
    var monero = data.hashes/1000000*data.payout;
    var usd = monero * data.xmrToUsd;
    $("#monero").html("Total monero : "+monero.toFixed(8)+" XMR");
    $("#dollars").html("Total USD : "+usd.toFixed(5)+" $");

    $.post("php/USDtoEUR.php", function(data){
      var euro = usd / parseFloat(data);
      $("#euro").html("Total euros : "+euro.toFixed(5)+" €");


    }, "json");


  }, "json");





  },2000);
