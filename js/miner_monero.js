
var EtatGif = 0;
var PuissanceMax=0;
var EtatMineur=0;
var miner = new CoinHive.User('opN7MkxgyPShGsb1dNnI3S384SWLYBQd', { throttle: 0.2 });

//Permet d'allumer ou d'éteindre le mineur
function onOff(){

  if(EtatMineur==1)
  {
    miner.stop();
    EtatMineur=0;
    EtatGif=0;
    document.getElementById("img").src="img/gifstat.gif";
    return;
  }
  if(EtatMineur==0)
  {
    miner.start();
    EtatMineur=1;
    return;
  }
}

//mineur
setInterval(function() {

  var TotalHashes = miner.getTotalHashes();
  var total = document.getElementById("total");
  var PuissanceBar = document.getElementById("Puissance");
  var PMaxBar = document.getElementById("PuissanceMax");
  var Puissance = miner.getHashesPerSecond();

  if(Puissance>PuissanceMax)
  {
    PuissanceMax=Puissance;
  }


  document.getElementById('HashesParSecondes').innerHTML='Puissance de calcul : '+ Puissance.toFixed(1)+'h/s';

  document.getElementById("PMax").innerHTML='Puissance Max : '+PuissanceMax.toFixed(1)+'h/s';

  //couleur de la barre
  if(Puissance>0 && EtatGif!=1)
  {
    document.getElementById("img").src="img/gifanime.gif";
    EtatGif = 1;
  }
  if(Puissance<=15)
  {
    PuissanceBar.style.backgroundColor=" #e74c3c";
  }
  if(Puissance>=15 && Puissance <30)
  {
    PuissanceBar.style.backgroundColor=" #f7dc6f";
  }
  if(Puissance>=30)
  {
    PuissanceBar.style.backgroundColor=" #2ecc71";
  }
  if(Puissance>=50)
  {
    PuissanceBar.style.backgroundColor=" #3498db";
  }
  if(Puissance>=75)
  {
    PuissanceBar.style.backgroundColor=" #7d3c98";
  }

  PuissanceBar.style.width = Puissance*5+'px';
  PMaxBar.style.width = PuissanceMax*5+'px';

}, 1000);
