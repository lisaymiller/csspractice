/*function ajaxCall() {
    var ajaxRequest = new XMLHttpRequest();
​
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
           if (ajaxRequest.status == 200) {
               var myDiv = document.querySelector('.main');
               var newDiv = document.createElement('div');
               newDiv.innerHTML = ajaxRequest.responseText;
               myDiv.appendChild(newDiv);
               console.log(ajaxRequest);
           }
           else if (ajaxRequest.status == 400) {
              console.log('There was an error 400');
           }
           else {
              console.log('something else other than 200 was returned');
           }
        }
    };
​
    ajaxRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos', true);
    ajaxRequest.send();
}
​
(function(document){
  var myBtn = document.getElementById('myButton');
  myBtn.addEventListener('click', ajaxCall);
  console.log(myBtn);
})(document);
​
$.get('https://jsonplaceholder.typicode.com/todos', function(todos){
  console.log(todos);
})*/


function getAllUsers() {
  return new Promise(function(resolve,reject) {
    $.get('https://reqres.in/api/users', function(users) {
      resolve(users);
      reject(console.log("Danger Will Robinson, Danger!"));
    })
  })
}

function getAllPosts () {
  return new Promise(function(resolve,reject) {
    $.get('https:reqres.in/api/posts', function(posts) {
      resolve(posts);
    })
  })
}

var usersPromise = getAllUsers();
var postsPromise = getAllPosts();

Promise.all([usersPromise, postsPromise])
  .then(function(results) {
    console.log(results[0]);
    console.log(results[1]);
  })
