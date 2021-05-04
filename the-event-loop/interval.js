let counter=3;
const countdown=setInterval(function(){
  if (counter<1){
    console.log('Blast Off!!!');
    clearInterval(countdown);
  }
  else {
    console.log(counter);
  }
  counter--;
},1000);
