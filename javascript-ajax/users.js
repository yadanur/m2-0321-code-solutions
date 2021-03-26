var $element = document.querySelector('#user-list');
var xhr=new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType='json';
xhr.addEventListener('load', function(){
  console.log(xhr.status);
  console.log(xhr.response);
  var userList=xhr.response;
  for (var i=0; i<userList.length; i++){
    var userName=userList[i].name;
    var $li=document.createElement('li');
    $li.textContent=userName;
    $element.appendChild($li);
  }
});
xhr.send();
