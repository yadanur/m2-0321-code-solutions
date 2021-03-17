var imageIndex=0;
autoDisplay();

function displayImage(number){
  var i;
  var imageList=document.getElementsByClassName("images");
  var dotList=document.getElementsByClassName("dots");

  for (i = 0; i < imageList.length; i++) {
    imageList[i].style.display = "none";
  }
  for (i= 0; i<dotList.length; i++){
    dotList[i].style['background-color']="grey";
  }
  if (imageIndex>= imageList.length){
    imageIndex=0;
  }
  if (imageIndex <0) {
    imageIndex=imageList.length-1;
  }
  imageList[imageIndex].style.display="block";
  dotList[imageIndex].style['background-color']="black";
}

function dotDisplay(dotNumber){
  imageIndex=dotNumber;
  displayImage(imageIndex);
}
function navigationDisplay(direction){
  imageIndex+=direction;
  displayImage(imageIndex);
}

function resetInterval(interval){
  clearInterval(interval);
  interval=window.setInterval(autoDisplay,3000);
}

//
// Auto Display
//
var timeOutID = window.setInterval(autoDisplay, 3000);
function autoDisplay(){
  var i;
  var imageList = document.getElementsByClassName("images");
  var dotList = document.getElementsByClassName("dots");

  for (i = 0; i < imageList.length; i++) {
    imageList[i].style.display = "none";
  }
  for (i = 0; i < dotList.length; i++) {
    dotList[i].style['background-color'] = "grey";
  }
  if (imageIndex >= imageList.length) {
    imageIndex = 0;
  }
  if (imageIndex < 0) {
    imageIndex = imageList.length - 1;
  }

  imageList[imageIndex].style.display = "block";
  dotList[imageIndex].style['background-color'] = "black";
  imageIndex++;
}
