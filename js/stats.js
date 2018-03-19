setInterval(function() {


  $.post("php/coinhive.php", function(data){
    //var monero = data.hashes/1000000*data.payout;
    var monero = data.xmrPending;

    var usd = monero * data.xmrToUsd;
    var pourcentObjectif = monero / 0.02 * 100

    //affichage de l'objectif
    objectifActuel.style.width = pourcentObjectif + "%";
    $("#pourcent").html(pourcentObjectif.toFixed(2) + "%");
    pourcent.style.marginLeft = pourcentObjectif + "%";


    //affiche le monero, le dollars et la puissance dans la page stats
    $("#monero").html("Total monero : "+monero.toFixed(8)+" XMR");
    $("#dollars").html("Total USD : "+usd.toFixed(5)+" $");
    $("#hashesPerSecond").html("Total H/s : "+data.hashesPerSecond.toFixed(1)+" H/s");

    // affiche l'euros dans la page stats
    $.post("php/USDtoEUR.php", function(data){
      var euro = usd / parseFloat(data);
      $("#euro").html("Total euros : "+euro.toFixed(5)+" €");


    }, "json");


  }, "json");

},1000);
