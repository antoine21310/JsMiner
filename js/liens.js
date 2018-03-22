var etatMenu = 0 ;

function miner(){

  document.getElementById("Frame").src="miner_monero.html";
  document.getElementById("FrameStats").src="stats.html";
}

function stats(){

  document.getElementById("Frame").src="stats.html";
  document.getElementById("FrameStats").src="";

}
function menu(){
  if(etatMenu == 0){
    document.getElementById("menu").style.transform = "translateX(0px)";
    etatMenu = 1 ;
    return;
  }
  if(etatMenu == 1){
    document.getElementById("menu").style.transform = "translateX(-300px)";
    //document.getElementById("menu").style.display = "none";
    etatMenu = 0;
  }

}
