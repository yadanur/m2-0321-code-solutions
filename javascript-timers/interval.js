var i=3;
var timeOutID;
timeOutID = window.setInterval(counter, 1000);

function counter(){
  document.getElementById('message').textContent = i;
  i--;
  if (i<0){
    clearInterval(timeOutID);
    document.getElementById('message').textContent = "~Earth Beeeelooowww Us~";
  }
}
